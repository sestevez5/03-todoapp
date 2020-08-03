import { createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from './models/todo.model';



export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Recolectar piedras en el infinito'),
  new Todo('Macerar la luna')
];

const _todoReducer = createReducer(initialState,
  on(crear, (state, { texto} ) => [...state, new Todo(texto)]),

);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
