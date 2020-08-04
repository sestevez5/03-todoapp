import { Pipe, PipeTransform, ɵisBoundToModule__POST_R3__ } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtros/filtros.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {

    switch( filtro ){
      case 'completados':
          return todos.filter( todo => todo.completado);

      case 'pendientes':
        return todos.filter( todo => !todo.completado);


      default:
        return todos;

    }

  }

}
