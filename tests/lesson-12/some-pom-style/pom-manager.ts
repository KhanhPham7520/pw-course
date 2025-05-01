import { Page } from "@playwright/test";
import { PersonNotePage } from "./pages/personal-note-page";
import { RegisterPage } from "./pages/register-page";



export class PomManager {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getPersonalPage() {
        return new PersonNotePage(this.page);
    }

    getRegisterPage() {
        return new RegisterPage(this.page);
    }

}