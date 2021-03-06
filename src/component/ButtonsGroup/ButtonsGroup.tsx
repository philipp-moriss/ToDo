import React, { MouseEvent } from 'react';

import { observer } from 'mobx-react-lite';

import { filter } from '../../mob/toDoState/Filter';

import style from './ButtonsGroup.module.css';

export const ButtonsGroup: React.FC = observer((): React.ReactElement => {
  const FilteredTaskHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    if (event.currentTarget.textContent === 'All') {
      filter.setFilter('All');
    }
    if (event.currentTarget.textContent === 'Completed') {
      filter.setFilter('Completed');
    }
    if (event.currentTarget.textContent === 'Active') {
      filter.setFilter('Active');
    }
  };
  return (
    <div className={style.buttonsFilterContainer}>
      <button type="button" onClick={FilteredTaskHandler}>
        All
      </button>
      <button type="button" onClick={FilteredTaskHandler}>
        Completed
      </button>
      <button type="button" onClick={FilteredTaskHandler}>
        Active
      </button>
    </div>
  );
});
