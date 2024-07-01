import { TasksRepository } from "./task.repository";

export class tasksService {
    tasksRepo: TasksRepository;

    constructor() {
        this.tasksRepo = new TasksRepository();
    }

    findAll() {
        return this.tasksRepo.findAll();
    }


    findOne(id: number) {
        return this.tasksRepo.findOne(id);
    }

    create(task: string) {
        return this.tasksRepo.create(task);
    }
}