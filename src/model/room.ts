/**
 * Room of a chat
 */
export class Room {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.name = name;
        this.id = id;
    }
}