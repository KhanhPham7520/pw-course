import { test } from "@playwright/test";
import { LoginPage } from "./login-page";

let userCredential = {
  userName: "k12-mentor",
  password: "Fmjt^sg2e#WdNFBWmlcVLhi%",
};

let url = "https://pw-practice-dev.playwrightvn.com/wp-login.php";

test("pom login page", async ({ page }) => {
  const loginPage: LoginPage = new LoginPage(page);

  await test.step("1.Navigate to base url", async () => {
    await loginPage.navigateTo(url);
  });

  await test.step("2. Input username and pass", async () => {
    await loginPage.fillUsername(userCredential.userName);

    await loginPage.fillPassword(userCredential.password);

    const actualUsername = await loginPage.page.locator(loginPage.locatorUsername).inputValue();

    const actualPassword = await loginPage.page.locator(loginPage.locatorPassword)
      .inputValue();

    expect(actualUsername).toEqual(userCredential.userName);

    expect(actualPassword).toEqual(userCredential.password);
  });

  await test.step("Click button login", async () => {
    await loginPage.page.locator(loginPage.locatorLoginButton).click();
  });
});
