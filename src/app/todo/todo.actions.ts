import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TOGGLE] Toggle todo';
export const TOGGLE_ALL_TODO = '[TOGGLE_ALL] Toggle todo';
export const EDITAR_TODO = '[EDITAR] Toggle todo';
export const BORRAR_TODO = '[BORRAR] Borrar todo';
export const BORRAR_ALL_TODO = '[BORRAR_ALL] Borrar all todo';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;
  constructor(public texto: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public id: number) {}
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;
  constructor(public id: number, public texto: string) {}
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO;
  constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;
  constructor(public completado: boolean) {}
}

export class BorrarAllTodoAction implements Action {
  readonly type = BORRAR_ALL_TODO;
}

export type Acciones = AgregarTodoAction | ToggleTodoAction | EditarTodoAction | BorrarTodoAction | ToggleAllTodoAction | BorrarAllTodoAction;
