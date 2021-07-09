import { useState } from 'react'
import { Colors } from '../common/Constants'
import { ITaskList } from '../interfaces/TaskInterface'
import EditTask from '../modals/EditTask'

interface Props {
    taskObj: ITaskList;
    index: number;
    deleteTask(index: number): void;
    updateTaskList(obj: ITaskList, index: number): void;
}

const Card = ({ taskObj, index, deleteTask, updateTaskList }: Props) => {

    const [modal, setModal] = useState<boolean>(false);
    const toggle = (): void => setModal(!modal);

    const handleDelete = (): void => {
        deleteTask(index);
    }


    const updateTask = (obj: ITaskList): void => {
        updateTaskList(obj, index);
    }



    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{ "backgroundColor": Colors.cardColors[index % 5].primaryColor }}></div>
            <div className="task-holder">
                <span className="card-header" style={{ "backgroundColor": Colors.cardColors[index % 5].secondaryColor, "borderRadius": "10px" }}>
                    {taskObj.taskName}
                </span>
                <p className="mt-3">{taskObj.taskDescription}</p>

                <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
                    <i className="far fa-edit mr-3" style={{ "color": Colors.cardColors[index % 5].primaryColor, "cursor": "pointer" }} onClick={() => setModal(true)}></i>
                    <i className="fas fa-trash-alt" style={{ "color": Colors.cardColors[index % 5].primaryColor, "cursor": "pointer" }} onClick={handleDelete}></i>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    )
}



export default Card
