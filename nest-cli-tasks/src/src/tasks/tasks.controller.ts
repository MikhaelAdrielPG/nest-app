import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get()
    listTasks(){}
    @Post()
    createTask(){}
    @Get('/:id')
    getTask(){}
}
