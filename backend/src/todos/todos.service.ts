import { Injectable } from '@nestjs/common';

import { TodoEntity } from './todo.entity';

@Injectable()
export class TodosService {
  private todos: TodoEntity[] = [
    {
      id: '1',
      title: 'title - 1',
      description: 'description - 1',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '2',
      title: 'title - 2',
      description: 'description - 2',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  // 全件取得
  readAllTodos(): TodoEntity[] {
    return this.todos;
  }

  // 1件取得
  readTodoById(todoId: string): TodoEntity {
    return this.todos.find((todo) => todo.id === todoId);
  }
}
