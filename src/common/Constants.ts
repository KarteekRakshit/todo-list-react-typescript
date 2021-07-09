import { IColors } from "../interfaces/CardInterface";

export class ElementNames {
    public static taskName = 'taskName';
    public static selectStatus = 'selectStatus';
    public static taskDescription = 'taskDescription';
}


export class Colors {
    public static cardColors : IColors[] = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]
}
