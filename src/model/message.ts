/**
 * Message of a room
 */
export class Message {
    sender: string;
    roomId: number;
    message: string;
    time: Date;
    position: string;
    constructor(messageJson: any){
      Object.assign(this, messageJson);
    }
}
