import { Args, Query, Resolver } from '@nestjs/graphql';

import { TodoEntity } from './todo.entity';
import { TodosService } from './todos.service';

@Resolver(() => TodoEntity)
export class TodosResolver {
  constructor(private todosService: TodosService) {}

  // 全件取得
  @Query(() => [TodoEntity], { name: 'readAllTodos' })
  readAllTodos(): TodoEntity[] {
    return this.todosService.readAllTodos();
  }

  // 1件取得
  @Query(() => TodoEntity, { name: 'readTodoById' })
  readTodoById(@Args('id', { type: () => String }) id: string): TodoEntity {
    return this.todosService.readTodoById(id);
  }
}
