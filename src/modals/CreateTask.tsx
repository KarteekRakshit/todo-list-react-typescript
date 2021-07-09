import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { ChangeEvent, useState } from 'react'
import { ElementNames } from '../common/Constants';
import { ITaskList } from '../interfaces/TaskInterface';
import { Validations } from '../common/Validations';

interface Props {
    toggle(): void;
    modal: boolean;
    saveTask(taskObj: ITaskList): void;
}

const CreateTask = ({ toggle, modal, saveTask }: Props) => {

    const [taskName, setTaskName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [status, setStatus] = useState<string>('0');
    const [priority, setPriority] = useState<string>('1');
    const [createButtonIsDisabled, setCreateButtonIsDisabled] = useState<boolean>(true);

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        if (name === ElementNames.taskName) {
            setTaskName(value);
            isSaveDisabled(value, priority);
        }
    }

    const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        if (name === ElementNames.taskDescription) {
            setDescription(value);
        }
        if (name === ElementNames.taskDescription) {
            setDescription(value);
        }
    }

    const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = event.target;
        if (name === ElementNames.selectStatus) {
            setStatus(value);
        }
        if (name === ElementNames.taskPriority) {
            setPriority(value);
            isSaveDisabled(taskName, value);
        }
    }

    const isSaveDisabled = (taskNameReceived: string, priorityReceived: string): void => {
        let tempTaskObj: ITaskList = {
            taskId: uid(),
            taskName: taskNameReceived,
            taskPriority: priorityReceived,
        };
        setCreateButtonIsDisabled(!Validations.taskListisValid(tempTaskObj));
    }

    const handleSave = () => {
        let tempTaskObj: ITaskList = {
            taskId: uid(),
            taskName: taskName,
            taskPriority: priority,
            taskDescription: description,
            taskstatus: status,
        };
        if (Validations.taskListisValid(tempTaskObj)) {
            saveTask(tempTaskObj);
            toggle();
        }
    }

    const uid = () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label htmlFor="taskName">Task Name</label>
                            <input type="text" name="taskName" id="taskName" className="form-control" value={taskName} onChange={handleChangeInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="statusSelect" >Status</label>
                            <select name="selectStatus" id="statusSelect" className="form-control" onChange={handleChangeSelect} value={status}>
                                <option value="0">None</option>
                                <option value="1">Draft</option>
                                <option value="2">Open</option>
                                <option value="3">In Progress</option>
                                <option value="4">Completed</option>
                                <option value="5">Hold</option>
                            </select >
                        </div>
                        <div className="form-group">
                            <label htmlFor="statusSelect" >Priority</label>
                            <select name="taskPriority" id="PrioritySelect" className="form-control" onChange={handleChangeSelect} value={priority}>
                                <option value="1">Low</option>
                                <option value="2">Medium</option>
                                <option value="3">High</option>
                            </select >
                        </div>
                        <div className="form-group">
                            <label htmlFor="taskDescription">Description</label>
                            <textarea name="taskDescription" id="taskDescription" rows={5} className="form-control" value={description} onChange={handleChangeTextArea}></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" disabled={createButtonIsDisabled} onClick={handleSave}>Create</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )


}

export default CreateTask
