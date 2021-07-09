import { ITaskList } from "../interfaces/TaskInterface";

export class Validations {
    public static taskListisValid(taskListObj: ITaskList): boolean {
        return !!taskListObj.taskId && !!taskListObj.taskName && taskListObj.taskName.trim().length > 0;
    }


}