import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './task.service';
import { TasksRepository } from './task.repository';

@Module({
  controllers: [TasksController],
  providers: [TasksService, TasksRepository]
})
export class TaskModule {}
