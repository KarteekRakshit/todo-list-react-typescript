import React, { useState } from 'react'
import { ITaskList } from '../interfaces/TaskInterface';
import CreateTask from '../modals/CreateTask'

const TodoList = () => {
    const [modal, setModal] = useState<boolean>(false);
    const toggle = (): void => setModal(!modal);
    const [taskList, setTaskList] = useState<ITaskList[]>([])

    const saveTask = (taskObj: ITaskList): void => {
        setTaskList([...taskList, taskObj]);
        console.log(taskList);
    }
    return (
        <>
            <div className="header text-center">
                <h3>Todo List</h3>
                <button className="btn btn-outline-dark mt-3" onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div className="task-container">

            </div>
            <CreateTask toggle={toggle} modal={modal} saveTask={saveTask} />
        </>
    )
}

export default TodoList
