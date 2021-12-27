import React from 'react';

import { observer } from 'mobx-react-lite';

import { toDoList } from '../../mob/toDoState/ToDoState';
import { Card } from '../ToDoList/types/types';

import style from './Tasks.module.css';

type TaskPropsType = {
  task: Card;
};

export const Task: React.FC<TaskPropsType> = observer(({ task }) => (
  <div
    key={task.id}
    className={style.Task}
    style={{
      background: `#${`${Math.random().toString(16)}000000`
        .substring(2, 8)
        .toUpperCase()}`,
    }}
  >
    <button type="button" onClick={() => toDoList.DeleteTaskHandler(task.id)}>
      Delete
    </button>
    {task.title}
    <label>
      <input
        onChange={() => toDoList.CheckTaskHandler(task.id)}
        type="checkbox"
        className="filled-in"
        checked={task.checked}
      />
      {task.checked ? <span>Checked</span> : <span>Not checked</span>}
    </label>
  </div>
));
