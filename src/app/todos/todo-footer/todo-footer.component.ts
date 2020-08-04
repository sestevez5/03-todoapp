import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-reducer';
import * as filterActions from 'src/app/filtros/filtros.actions';
import * as todoActions from 'src/app/todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filterActions.filtrosValidos;
  filtros: filterActions.filtrosValidos[]=['todos','completados','pendientes'];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {


    this.store.subscribe(
      state => {
        this.filtroActual = state.filtro,
        this.pendientes = state.todos.filter( todo => !todo.completado).length;
      }
    );


  }

  onCambiarFiltro(nuevoFiltro: filterActions.filtrosValidos){
        this.store.dispatch(filterActions.establecerFiltro({filtro: nuevoFiltro}));
  }

  onLimpiarCompletados(){
    this.store.dispatch(todoActions.borrarCompletdos());
  }

}
