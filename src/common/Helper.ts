
export class HelperMethods {
    public static getStatusClassName(statusType: string): string {
        switch (statusType) {
            case '0':
                return "bg-dark";
            case '1':
                return "bg-secondary";
            case '2':
                return "bg-primary";
            case '3':
                return "bg-warning text-dark";
            case '4':
                return "bg-success";
            case '5':
                return "bg-danger";

            default:
                return "bg-light text-dark";
        }
    }

    public static getStatusLabel(statusType: string): string {
        switch (statusType) {
            case '0':
                return "None";
            case '1':
                return "Draft";
            case '2':
                return "Open";
            case '3':
                return "In Progress";
            case '4':
                return "Completed";
            case '5':
                return "Hold";

            default:
                return "None";
        }
    }

    public static getPriorityLabel(priorityType: string): string {
        switch (priorityType) {
            case '1':
                return "Low";
            case '2':
                return "Medium";
            case '3':
                return "High";

            default:
                return "None";
        }
    }
}

