import React, { useEffect, useState } from 'react'
import { ITaskList } from '../interfaces/TaskInterface';
import CreateTask from '../modals/CreateTask'
import Card from './Card';

const TodoList = () => {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = (): void => setModal(!modal);
    const [taskList, setTaskList] = useState<ITaskList[]>([])

    useEffect(() => {
        let taskListPersistItem = localStorage.getItem('taskList');
        if (taskListPersistItem) {
            let taskListItem: ITaskList[] = JSON.parse(taskListPersistItem);
            setTaskList(taskListItem);
        }
    }, [])

    const saveTask = (taskObj: ITaskList): void => {
        let tempList = taskList;
        tempList.push(taskObj);
        setTaskList(tempList);
        localStorage.setItem('taskList', JSON.stringify(tempList));
    }

    const deleteTask = (taskObj: ITaskList): void => {
        let tempList = taskList;
        tempList = tempList.filter((ele) => ele.taskId !== taskObj.taskId);
        //tempList.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    }

    const updateTaskList = (obj: ITaskList, index: number): void => {
        let tempList = taskList;
        tempList[index] = obj;
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    }

    return (
        <>
            <div className="header text-center">
                <h3>Todo List</h3>
                <button className="btn btn-outline-dark mt-3" onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div className="task-container">
                {taskList.map((obj, index) => <Card taskObj={obj} index={index} key={index} deleteTask={deleteTask} updateTaskList={updateTaskList} />)}
            </div>
            <CreateTask toggle={toggle} modal={modal} saveTask={saveTask} />
        </>
    )
}

export default TodoList
