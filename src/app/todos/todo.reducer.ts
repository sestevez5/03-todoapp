import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';



export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Recolectar piedras en el infinito'),
  new Todo('Macerar la luna')
];

const _todoReducer = createReducer(initialState,
  on(actions.crear, (state, { texto} ) => [...state, new Todo(texto)]),
  on(actions.toggle, (state, { id } ) => {
      return state.map(
        todo =>
        {
          if (todo.id === id )
          {
            return {
              ...todo,
              completado: !todo.completado
            }
          }
          else
          {
            return {
              ...todo
            };
          }
        }
      )
    }
  ),
  on(actions.editar, (state, { id, texto } ) =>
    {
      return state.map(
        todo =>
        {
          if (todo.id === id )
          {
            return {
              ...todo,
              texto: texto
            }
          }
          else
          {
            return {
              ...todo
            };
          }
        }
      )
    }
  ),
  on(actions.borrar, (state, { id } ) =>
  {
    return state.filter(item => item.id !== id);
  }
  ),

  on(actions.completarAll,
    (state, { completar } ) =>
    {
      return state.map(item => {
        return {
          ...item,
          completado: completar

        }
      }

      );
    }
  ),

  on (actions.borrarCompletdos,
    (state) => {
      return state.filter(todo => todo.completado === false);
    }

    )

);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
