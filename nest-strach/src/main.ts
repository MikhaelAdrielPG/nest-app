import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppController } from "./app.controller";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}

bootstrap();