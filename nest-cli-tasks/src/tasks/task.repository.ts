import { readFile, writeFile } from "fs/promises";

export class TasksRepository {
    async findAll(): Promise<any>{}
    async findOne(id: number){
        const data = await readFile('tasks.json', 'utf-8');
        const tasks = JSON.parse(data);

        return tasks.find((tasks: any) => tasks.id === id);
    }
    async create(task: string) {}
}