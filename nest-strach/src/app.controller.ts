import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get('/asd')
    getRootRoute(): string {
        return 'Hello World';
    }

    @Get('/contact')
    getContactPage(): string {
        return 'This Contact Response';
    }
}
