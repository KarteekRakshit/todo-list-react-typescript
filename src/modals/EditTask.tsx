import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { ElementNames } from '../common/Constants';
import { ITaskList } from '../interfaces/TaskInterface';

interface Props {
    toggle(): void;
    modal: boolean;
    updateTask(taskListObj: ITaskList): void;
    taskObj: ITaskList;
}

const EditTask = ({ toggle, modal, updateTask, taskObj }: Props) => {

    const [taskName, setTaskName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [taskObjToEdit, setTaskObjToEdit] = useState<ITaskList>(taskObj);
    const [status, setStatus] = useState<string>('0');

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        if (name === ElementNames.taskName) {
            setTaskName(value);
        }
    }

    const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        if (name === ElementNames.taskDescription) {
            setDescription(value);
        }
    }

    const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = event.target;
        if (name === ElementNames.selectStatus) {
            setStatus(value);
        }
    }

    const handleUpdate = () => {
        let tempTaskObj: ITaskList = {
            taskId: taskObjToEdit.taskId,
            taskstatus: status,
            taskName: taskName,
            taskDescription: description
        };
        updateTask(tempTaskObj);
        toggle();
    }

    useEffect(() => {
        setTaskObjToEdit(taskObj);
        setTaskName(taskObjToEdit.taskName);
        setDescription(taskObjToEdit.taskDescription);
        if (taskObjToEdit.taskstatus) {
            setStatus(taskObjToEdit.taskstatus);
        }
    }, [taskObjToEdit.taskName, taskObjToEdit.taskDescription, taskObjToEdit.taskstatus, taskObj])

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Update Task</ModalHeader>
                <ModalBody>
                    <form >
                        <div className="form-group">
                            <label htmlFor="taskName">Task Name</label>
                            <input type="text" name="taskName" id="taskName" className="form-control" value={taskName} onChange={handleChangeInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="statusSelect" >Status</label>
                            <select name="selectStatus" id="statusSelect" className="form-control" onChange={handleChangeSelect} value={status}>
                                <option value="0">None</option>
                                <option value="1">Draft</option>
                                <option value="2">open</option>
                                <option value="3">In Progress</option>
                                <option value="4">Completed</option>
                                <option value="5">Hold</option>
                            </select >
                        </div>
                        <div className="form-group">
                            <label htmlFor="taskDescription">Description</label>
                            <textarea name="taskDescription" id="taskDescription" rows={5} className="form-control" value={description} onChange={handleChangeTextArea}></textarea>
                        </div>

                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditTask
