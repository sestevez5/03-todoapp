import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const establecerFiltro = createAction(
  '[FILTROS] Establecer Filtro',
  props<{filtro: filtrosValidos}>()
  );

