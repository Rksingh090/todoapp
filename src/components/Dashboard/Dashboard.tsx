import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import List from '../List/List';
import Task from '../Task/Task';
import { ITask } from '../../models/ITask';

const Dashboard = () => {
  const [listData, setListData] = useState<ITask[]>([]);
  const [listID, setListID] = useState<number>(0);
  const [list, setList] = useState<ITask>();

  useEffect(() => {
    const singledata:ITask = listData.filter((a) => a.id === listID)[0]; 
    setList(singledata);
  }, [listID])

  const addList = (s:any) => {
    let mydata:ITask = {
      id: s.id,
      title: s.title,
      description: "",
      lables: [],
      deadline: new Date()
    }
    setListData([...listData, mydata]);
  }
  return (
    <div className='Dashboard'>
      <List data={listData} onAdd={addList} onClickList={(id:number) => setListID(id)} />
      <Task item={list} />
    </div>
  );
}

export default Dashboard;