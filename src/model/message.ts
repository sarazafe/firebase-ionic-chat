/**
 * Message of a room
 */
export class Message {
    sender: string;
    roomId: number;
    message: string;
    time: Date;

    constructor(messageJson: any){
      Object.assign(this, messageJson);
    }
}
