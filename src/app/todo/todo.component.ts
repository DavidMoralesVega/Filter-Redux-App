import { Component, OnInit } from '@angular/core';
import * as fromTodo from './todo.actions';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toogleAll() {
    this.completado = !this.completado;
    const accion = new fromTodo.ToggleAllTodoAction(this.completado);
    this.store.dispatch(accion);
  }

}
