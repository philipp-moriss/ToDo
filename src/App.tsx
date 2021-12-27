import React, { useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import './App.css';
import { ToDoListContainer } from './component/ToDoList/ToDoListСontainer';
import { Card } from './component/ToDoList/types/types';
import { LocalStore } from './LocalStorage/LocalStore';
import { filter } from './mob/toDoState/Filter';
import { toDoList } from './mob/toDoState/ToDoState';

const App = observer((): React.ReactElement => {
  useEffect(() => {
    const result = LocalStore.GetLocalStorage();
    if (Array.isArray(result)) {
      toDoList.SetToDOState(result);
    }
  }, []);
  let FilteredTask: Card[];
  switch (filter.filter) {
    case 'All': {
      FilteredTask = [...toDoList.toDoTasks];
      break;
    }
    case 'Completed': {
      FilteredTask = toDoList.toDoTasks.filter(task => task.checked === true);
      break;
    }
    case 'Active': {
      FilteredTask = toDoList.toDoTasks.filter(task => task.checked === false);
      break;
    }
    default: {
      FilteredTask = [...toDoList.toDoTasks];
    }
  }
  return (
    <div className="App">
      <ToDoListContainer
        tasks={FilteredTask}
        addTaskCallback={value => toDoList.AddTaskHandler(value)}
      />
    </div>
  );
});

export default App;
