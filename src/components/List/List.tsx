import React, { useState } from 'react';
import './List.css'
import { ITask } from '../../models/ITask';

export interface IListProps {
  data: ITask[],
  onAdd: Function,
  onClickList: Function
}


// -- ++ && <= >= => == === $$ @@
 
const Listmenu =({data, onAdd, onClickList}: IListProps) => {
  const [addingTaks, setAddingTask] = useState<boolean>(false);
  const [newtask, setNewtask] = useState<string>("");
  const [maxId, setMaxId] = useState<number>(0);

  const handleChange = (e:any) => {
    setNewtask(e.target.value);
  }
  const handleTask = () => {
    setAddingTask(!addingTaks);
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onAdd({id: maxId, title: newtask})
    setMaxId(maxId+1);
    setNewtask("")
  }

  return (
    <div className='List'>
      <div className='ListHeading'>
        <h3>All Tasks</h3>
      </div>
      <div className="ListContent">
        <div className="ListItems">
          {data && data.map((item, idx) => {
           return (
             <p key={idx} onClick={() => onClickList(item.id)}>{item.title}</p>
           ) 
          })}
        </div>
        { addingTaks ? (
          <form className="AddTaskForm" onSubmit={handleSubmit}>
            <input type={'text'} autoFocus 
              placeholder={"Task Name"}
              value={newtask}
              onBlur={() => setAddingTask(false)}
              onChange={handleChange} />
          </form>
        ) : (
          <div className="AddTask">
            <button onClick={handleTask}>Add Task</button>
          </div>
        )}
      </div>
      <div className="ListUtils">

      </div>
    </div>
  );
}

export default Listmenu;