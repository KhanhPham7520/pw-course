import test, { expect } from "@playwright/test";


test.describe("Authentication", () => {

    let usernameXpath : string;
    let passwordXpath : string; 
    let loginBtn : string;
    let errorXpath : string;

    let invalidCredential : {
        username : string;
        password : string;
    }

    test.beforeAll(() => {
        usernameXpath = "//input[@id='user_login']";
        passwordXpath = "//input[@id='user_pass']";
        loginBtn = "//input[@id='wp-submit']";
        errorXpath = "//div[@id='login_error']";
        invalidCredential = {
            username : "K12",
            password : "invalid"
        }

    });

    test.beforeEach(async ({page}) => {
        // Go to login page
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
    });


    test.afterEach(()=> {
        console.log("After Each");

    })

    test.afterAll(() => {
        console.log("After All");
    });




    test("Login pass", async() => {
        console.log("Passed step");
        
        
    });
    
    
    test("Login fail", async( {page} ) => {
        await test.step("Nhập thông tin username, password bị sai", async() => {
            
            // input
            await page.locator(usernameXpath).fill(invalidCredential.username);
            await page.locator(passwordXpath).fill(invalidCredential.password);

            // Get text in input field
            const actualUsername = await page.locator(usernameXpath).inputValue();
            const actualPassword = await page.locator(passwordXpath).inputValue();

            // verify text in input field
            expect(actualUsername).toEqual(invalidCredential.username);
            expect(actualPassword).toBe(invalidCredential.password);

        });

        await test.step("Click vào login button", async() => {
            await page.locator(loginBtn).click();
            await expect(page.locator(errorXpath)).toBeVisible();
        });
    });
});


