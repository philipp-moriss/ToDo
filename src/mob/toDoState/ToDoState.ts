import { action, makeObservable, observable } from 'mobx';
import { v1 } from 'uuid';

import { Card } from '../../component/ToDoList/types/types';
import { LocalStore } from '../../LocalStorage/LocalStore';

export class ToDoState {
  @observable
  toDoTasks: Array<Card> = [
    {
      id: v1(),
      title: 'Title1',
      checked: true,
      order: 1,
    },
    {
      id: v1(),
      title: 'Title2',
      checked: false,
      order: 2,
    },
  ];

  constructor() {
    makeObservable(this);
  }

  @action
  SetToDOState(newState: Array<Card>): void {
    this.toDoTasks = newState;
  }

  @action
  AddTaskHandler(value: string): void {
    const newTask = {
      id: v1(),
      title: value === '' ? 'Title' : value,
      checked: false,
      order: this.toDoTasks[this.toDoTasks.length - 1]
        ? this.toDoTasks[this.toDoTasks.length - 1].order + 1
        : 1,
    };
    this.toDoTasks.push(newTask);
    LocalStore.SetLocalStorage(this.toDoTasks);
  }

  @action
  DeleteTaskHandler(id: string): void {
    this.toDoTasks = this.toDoTasks.filter(task => task.id !== id);
    LocalStore.SetLocalStorage(this.toDoTasks);
  }

  @action
  CheckTaskHandler(id: string): void {
    this.toDoTasks = this.toDoTasks.map(task =>
      task.id === id ? { ...task, checked: !task.checked } : { ...task },
    );
    LocalStore.SetLocalStorage(this.toDoTasks);
  }
}
export const toDoList = new ToDoState();
