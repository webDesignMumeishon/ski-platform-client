import Message from "../eums/Message";

import ServerCommunicator from "./ServerCommunicator";
import { User } from "../response/User";
import { IUser } from "../interfaces/user";

class UserFacade {
  static user = "user";
  // GET
  static async getUser(): Promise<User> {
    const urlPath = `${this.user}/me`;
    try {
      const response = await ServerCommunicator.doGetRequest<IUser>(urlPath);
      return new User(
        response.status,
        true,
        Message.SUCCESS,
        response.data.firstName,
        response.data.lastName,
        response.data.email,
        response.data.p_enabled
      );
    } catch (error) {
      return new User(500, false, Message.ERROR, "", "", "", false);
    }
  }

  // DELETE
  static async userLogut(): Promise<any> {
    const urlPath = `${this.user}/`;
    try {
      await ServerCommunicator.doDeleteRequest<any>(urlPath);
    } catch (error) {
      // console.error(error);
    }
  }
}

export default UserFacade;
