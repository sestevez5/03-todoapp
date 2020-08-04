import { createReducer, on } from '@ngrx/store';
import { filtrosValidos } from './filtros.actions';

import * as actions from './filtros.actions';

export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer(initialState,
  on(actions.establecerFiltro,
    (state, { filtro } ) => filtro)

);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
