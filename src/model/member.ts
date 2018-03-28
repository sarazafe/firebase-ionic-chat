import { Message } from "./message";

/**
 * Member of a room
 */
export class Member {
    username: string;
    roomId: string;

    constructor(username: string, roomId: string) {
        this.username = username;
        this.roomId = roomId;
    }
}