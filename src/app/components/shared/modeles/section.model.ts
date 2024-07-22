import { SessionModel } from "./session.model";
export class SectionModel
 {
    name?: string;
    duration?: number;
    nombreSessions?: number;
    ended?: boolean;
    sessions?: SessionModel[];
    constructor(){}
}
