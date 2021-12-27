import React from 'react';
import style from "./Tasks.module.css";

export const Task: React.FC<TaskProps> = React.memo(() => {
  <div
    key={task.id}
  className={style.Task}
  style={{
    background: `#${`${Math.random().toString(16)}000000`
      .substring(2, 8)
      .toUpperCase()}`,
  }}
>
  <button type="button" onClick={() => DelateTaskCallback(task.id)}>
  Delete
  </button>
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
});
