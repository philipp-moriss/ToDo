import React from 'react';

import { Card } from '../ToDoList/types/types';

import { Task } from './Task';
import style from './Tasks.module.css';

type TasksPropsType = {
  tasks: Array<Card>;
};

export const Tasks: React.FC<TasksPropsType> = ({ tasks }): React.ReactElement => (
  <div className={style.tasksContainer}>
    {tasks.map(task => (
      <Task key={task.id} task={task} />
    ))}
  </div>
);
