import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { ChangeEvent, useState } from 'react'
import { ElementNames } from '../common/Constants';
import { ITaskList } from '../interfaces/TaskInterface';

interface Props {
    toggle(): void;
    modal: boolean;
    saveTask(taskObj: ITaskList): void;
}

const CreateTask = ({ toggle, modal, saveTask }: Props) => {

    const [taskName, setTaskName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

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

    const handleSave = () => {
        let taskObj: ITaskList = {
            taskName: taskName,
            taskDescription: description
        };
        saveTask(taskObj);
        toggle();
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <form >
                        <div className="form-group">
                            <label htmlFor="taskName">Task Name</label>
                            <input type="text" name="taskName" id="taskName" className="form-control" value={taskName} onChange={handleChangeInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="taskDescription">Description</label>
                            <textarea name="taskDescription" id="taskDescription" rows={5} className="form-control" value={description} onChange={handleChangeTextArea}></textarea>
                        </div>

                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CreateTask
