import * as React from 'react';
import { ITask } from '../../models/ITask';
import './Task.css'

export interface ITaskProps {
  item : ITask | undefined
}

const Task = ({item}: ITaskProps) => {
  return (
    <div className='Task'>
      <div className="TaskContainer">
        {item?.id}
      </div>
    </div>
  );
}

export default Task;