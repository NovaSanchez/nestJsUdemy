import { Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  task: ITask[] = [];
  create(taskDto: TaskDTO): ITask {
    const task = {
      id: uuidv4(),
      ...taskDto,
    };
    this.task.push(task);
    return task;
  }
  getAll(): ITask[] {
    return this.task;
  }

  FindOne(id: string): ITask {
    return this.task.find((t) => t.id === id);
  }
  UpdateOne(id: string, taskDto: TaskDTO): ITask {
    const nt = { id, ...taskDto };
    this.task = this.task.map((t) => (t.id === id ? nt : t));
    return nt;
  }
  DeleteOne(id: string): string {
    this.task = this.task.filter((t) => t.id !== id);
    return 'Task Deleted';
  }
}
