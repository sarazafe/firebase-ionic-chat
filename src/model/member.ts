import {Message} from "./message";

/**
 * Member of a room
 */
export class Member {
  uid: string;
  email: string;
  roomId: string;
  color: string;

  /**
   * It initializes the object from json
   * @param {string} memberJson
   */
  constructor(memberJson: any) {
    Object.assign(this, memberJson);
  }
}
