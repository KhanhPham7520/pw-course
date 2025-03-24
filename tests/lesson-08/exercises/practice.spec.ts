import test, { expect } from "@playwright/test";
import { log } from "console";

test.describe("Authentication", () => {
   
    let loginXpath : string;
    let emailTextboxXpath : string;
    let passwordTextboxXpath : string;
    let loginBtnXpath : string;
    let customerLanguageDropdownXpath : string;
    let loginFailSummaryErrorMsgXpath : string;
    let credentialsMsgIncorrectXpath : string;

    let validCredentials :{
        email : string;
        password : string;
    }

    let invalidCredentials : {
        email : string;
        password : string;
    }

    test.beforeAll(() => {
        loginXpath = "//a[text()='Log in']";
        emailTextboxXpath = "//input[@id='Email']";
        passwordTextboxXpath = "//input[@id='Password']";
        loginBtnXpath = "//button[text()='Log in']";
        customerLanguageDropdownXpath = "//select[@id='customerlanguage']";
        loginFailSummaryErrorMsgXpath = "//div[@class='message-error validation-summary-errors']";
        credentialsMsgIncorrectXpath = "//div[@class='message-error validation-summary-errors']//child::ul//li";

        validCredentials = {
            email : "steve_gates@nopCommerce.com",
            password : "123456"
        };

        invalidCredentials = {
            email : "steve_gates@nopCommerce.com",
            password : "xyz"
        }
    });

    test.beforeEach(async ({page}) => {
        await page.goto("http://localhost/")

        await page.locator(customerLanguageDropdownXpath).click();
        await page.locator(customerLanguageDropdownXpath).selectOption("EN");
    });

    test.afterEach(() => {
        console.log("After each");
        
    });

    test.afterAll(() => {
        console.log("After all");
    });

    // login successfully
    test("Check login pass", async ({page}) => {

        await test.step("1. Click into Login link from Home Page", async () =>{
            await page.locator(loginXpath).click();
        });

        await test.step("2. Fill credentials into textbox to login", async () => {
            await page.locator(emailTextboxXpath).fill(validCredentials.email);
            await page.locator(passwordTextboxXpath).fill(validCredentials.password);

            const actualEmailTxtbox = await page.locator(emailTextboxXpath).inputValue();
            const actualPasswordTxtbox = await page.locator(passwordTextboxXpath).inputValue();
    
            expect(actualEmailTxtbox).toEqual(validCredentials.email);
            expect(actualPasswordTxtbox).toEqual(validCredentials.password);
        })

        await test.step("3. Click Login button to login", async () => {
            await page.locator(loginBtnXpath).click();
        });
        
    });


    //login unsuccessfully

    test("Check login unsuccessfully", async ({page}) => {
        await test.step("1. Click into Login link from Home Page", async () =>{
            await page.locator(loginXpath).click();
        });

        await test.step("2. Fill credentials into textbox to login", async () => {
            await page.locator(emailTextboxXpath).fill(invalidCredentials.email);
            await page.locator(passwordTextboxXpath).fill(invalidCredentials.password);

            const actualEmailTxtbox = await page.locator(emailTextboxXpath).inputValue();
            const actualPasswordTxtbox = await page.locator(passwordTextboxXpath).inputValue();
    
            expect(actualEmailTxtbox).toEqual(invalidCredentials.email);
            expect(actualPasswordTxtbox).toEqual(invalidCredentials.password);
        })

        await test.step("3. Click Login button to login", async () => {
            await page.locator(loginBtnXpath).click();
        });

        await test.step("4. Verify failure login message has appeared",async () => {
            const actualSummaryErrorMsg = await page.locator(loginFailSummaryErrorMsgXpath).evaluate(
                (el) => el.firstChild?.textContent?.trim());
            
            const actualcredentialsErrorMsg = await page.locator(credentialsMsgIncorrectXpath).innerText();            
            
            expect(actualSummaryErrorMsg?.concat(actualcredentialsErrorMsg)).
            toEqual("Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect");
        });
    })

})
