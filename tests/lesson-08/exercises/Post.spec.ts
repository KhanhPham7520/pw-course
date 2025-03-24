import test, { expect } from "@playwright/test";

test.describe("POST - Post", () => {
    let userNameOrEmailAddressTxtbox : string;
    let passwordTxtbox : string;
    let loginBtn : string;
    let postMenuItemLink : string;
    let tagSubItemLink : string;
    let tagNameValidationMsg : string;
    let tagNameTextbox : string;
    let addNewTagBtn : string;
    let addTagSuccessfullyMsg : string;
    let tagNameRowItem;
    let tagSlugRowItem;


    let validNewTag : {
        tagName : string;
        slugName : string;
    }

    let invalidTag : {
        tagName : string;
    }

    let validCredentials : {
        userNameOrEmailAddress : string;
        password : string;
    }

    test.beforeAll("", () => {
        userNameOrEmailAddressTxtbox = "//input[@id='user_login']";
        passwordTxtbox = "//input[@id='user_pass']";
        loginBtn = "//input[@id='wp-submit']";
        postMenuItemLink = "//ul[@id='adminmenu']//child::div[text()='Posts']";
        tagSubItemLink = "//a[text()='Tags']";
        tagNameValidationMsg = "//h1[text()='Tags']//parent::div//div[contains(@class,'notice')]//child::p";
        tagNameTextbox = "//input[@id='tag-name']";
        addNewTagBtn = "//input[@id='submit']";
        addTagSuccessfullyMsg = "//p[text()='Tag added.']";
        
        // Table

        validCredentials = {
            userNameOrEmailAddress : "k12-anh",
            password : "Fmjt^sg2e#WdNFBWmlcVLhi%"
        }

        invalidTag = {
            tagName : "lesson tag"
        }

        validNewTag = {
            tagName : "tag khanh",
            slugName : "tag khanh"
        }
    });

    test.beforeEach("Before Each", async({page}) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php");
        await page.locator(userNameOrEmailAddressTxtbox).fill(validCredentials.userNameOrEmailAddress);
        await page.locator(passwordTxtbox).fill(validCredentials.password);
        await page.locator(loginBtn).click();
    });
    
    test.afterEach("", () => {

    });

    test.afterAll("", () => {

    });

    test("@POST_TAG_001 - Tag - add tag failed", async ({page}) => {
        await test.step('1. Click button "Add New Tag"', async () => {
            await page.locator(postMenuItemLink).hover();
            await page.locator(tagSubItemLink).click();

            await page.locator(addNewTagBtn).click();

            let actualTagNameValidationMsg = await page.locator(tagNameValidationMsg).textContent();
            await expect(actualTagNameValidationMsg).toEqual("A name is required for this term.");
        });

        await test.step('2.Điền thông tin tag: name = "lesson tag", click button "Add New Tag"', async () => {
            await page.reload();
            await page.locator(tagNameTextbox).fill(invalidTag.tagName);
            await page.locator(addNewTagBtn).click();

            let actualTagNameValidationMsg = await page.locator(tagNameValidationMsg).textContent();
            await expect(actualTagNameValidationMsg).toEqual("A term with the name provided already exists in this taxonomy.");
        });
    })


    test("@POST_TAG_002 - Tag - add tag success", async ({page}) => {
        await test.step('1. Điền thông tin tag: name = "tag {name}" (name là tên bạn)"', async () => {
            await page.locator(postMenuItemLink).hover();
            await page.locator(tagSubItemLink).click();
           
            await page.locator(tagNameTextbox).fill(validNewTag.tagName);
        });

        await test.step('2.Click button "Add New Tag"', async () => {
            await page.locator(addNewTagBtn).click();
            
            const actualTagNameValidationMsg = await page.locator(tagNameValidationMsg).textContent();
            await expect(actualTagNameValidationMsg).toEqual("Tag added.");

            
        });
    })
   
});