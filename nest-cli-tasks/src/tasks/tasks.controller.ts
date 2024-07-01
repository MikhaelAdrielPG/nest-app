import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksService } from './task.service';

@Controller('tasks')
export class TasksController {
    taskService: TasksService;

    constructor() {
      this.taskService = new TasksService();
    }

    @Get()
    listTasks(){
        return this.taskService.findAll();
    }
    @Post()
    createTask(@Body() body: CreateTaskDto){
        return this.taskService.create(body.content);
    }
    @Get('/:id')
    async getTask(@Param('id') id: string){
        const task = await this.taskService.findOne(parseInt(id));;

        if (!task) {
            throw new NotFoundException('Task not found');
        }
        
        return task;
    }
}
