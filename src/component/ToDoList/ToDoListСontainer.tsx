import React, {
  ChangeEvent,
  MouseEvent,
  useState,
  KeyboardEvent,
  DragEvent,
} from 'react';

import style from './ToDoList.module.css';
import { Card, Filter } from './types/types';

type ToDoListPropsType = {
  Tasks: Array<Card>;
  addTaskCallback: (value: string) => void;
  CheckTaskCallback: (id: string) => void;
  DelateTaskCallback: (id: string) => void;
  setFilter: (param: Filter) => void;
  OnDragStartHandlerCallBack: (event: DragEvent<HTMLDivElement>, task: Card) => void;
  OnDragLeaveHandlerCallBack: (event: DragEvent<HTMLDivElement>) => void;
  OnDragOverHandlerCallBack: (event: DragEvent<HTMLDivElement>) => void;
  OnDragEndHandlerCallBack: (event: DragEvent<HTMLDivElement>) => void;
  OnDragDropHandlerCallBack: (event: DragEvent<HTMLDivElement>, task: Card) => void;
};
export const ToDoList: React.FC<ToDoListPropsType> = ({
  Tasks,
  addTaskCallback,
  CheckTaskCallback,
  setFilter,
  OnDragDropHandlerCallBack,
  OnDragEndHandlerCallBack,
  OnDragLeaveHandlerCallBack,
  OnDragOverHandlerCallBack,
  OnDragStartHandlerCallBack,
  DelateTaskCallback,
}): React.ReactElement => {
  const [inputValue, setInputValue] = useState<string>('');

  const inputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.currentTarget.value);
  };
  const OnKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.code === 'Enter') {
      addTaskCallback(inputValue.trim());
      setInputValue('');
    }
  };
  const addTaskHandler = (): void => {
    addTaskCallback(inputValue.trim());
    setInputValue('');
  };
  const FilteredTaskHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    if (event.currentTarget.textContent === 'All') {
      setFilter('All');
    }
    if (event.currentTarget.textContent === 'Completed') {
      setFilter('Completed');
    }
    if (event.currentTarget.textContent === 'Active') {
      setFilter('Active');
    }
  };

  return (
    <div className={style.ToDoListContainer}>
      <div className={style.inputContainer}>
        <input
          value={inputValue}
          placeholder="input Text"
          onChange={inputHandler}
          onKeyPress={OnKeyPressHandler}
        />
        <button onClick={addTaskHandler}>Add Task</button>
      </div>
      <div className={style.tasksContainer}>
        {Tasks.map(task => (
          <div
            onDragStart={event => OnDragStartHandlerCallBack(event, task)}
            onDragLeave={event => OnDragLeaveHandlerCallBack(event)}
            onDragOver={event => OnDragOverHandlerCallBack(event)}
            onDragEnd={event => OnDragEndHandlerCallBack(event)}
            onDrop={event => OnDragDropHandlerCallBack(event, task)}
            draggable
            key={task.id}
            className={style.Task}
          >
            <button onClick={() => DelateTaskCallback(task.id)}>Delete</button>
            {task.title}
            <label>
              <input
                onChange={() => CheckTaskCallback(task.id)}
                type="checkbox"
                className="filled-in"
                checked={task.checked}
              />
              {task.checked ? <span>Checked</span> : <span>Not checked</span>}
            </label>
          </div>
        ))}
      </div>
      <div className={style.buttonsFilterContainer}>
        <button onClick={FilteredTaskHandler}>All</button>
        <button onClick={FilteredTaskHandler}>Completed</button>
        <button onClick={FilteredTaskHandler}>Active</button>
      </div>
    </div>
  );
};
