import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-reducer';
import * as actions from '../todo.actions';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  chkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe(
      valor =>
      this.store.dispatch(actions.toggle({id: this.todo.id}))
    )
  }

  onEditar(){
    this.editando = true;
    setTimeout(() => {

      this.txtInputFisico.nativeElement.focus();

    }, 1);

  }

  onTerminarEdicion(){

    this.editando = false;

    if ( this.txtInput.invalid || this.txtInput.value === this.todo.texto)
    {
      return;
    }

      this.store.dispatch(actions.editar({ id: this.todo.id, texto: this.txtInput.value }));
  }

  onBorrar(){
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }




}
