import React from 'react';

import { ButtonsGroup } from '../ButtonsGroup/ButtonsGroup';
import { InputAdd } from '../Input/InputAdd';
import { Tasks } from '../Tasks/Tasks';

import style from './ToDoList.module.css';
import { Card } from './types/types';

type ToDoListContainerPropsType = {
  tasks: Array<Card>;
  addTaskCallback: (value: string) => void;
};
export const ToDoListContainer: React.FC<ToDoListContainerPropsType> = ({
  tasks,
  addTaskCallback,
}): React.ReactElement => (
  <div className={style.ToDoListContainer}>
    <InputAdd addTaskCallback={value => addTaskCallback(value)} />
    <Tasks tasks={tasks} />
    <ButtonsGroup />
  </div>
);
