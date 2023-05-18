import Message from '../eums/Message';

import ServerCommunicator from './ServerCommunicator';
import { User } from '../response/User';
import { IUserLogged } from '../interfaces/user';

class UserFacade {
    static user = 'user'
	// GET
	static async getUser(): Promise<User> {
		const urlPath = `${this.user}/me`;
        try{
			const response = await ServerCommunicator.doGetRequest<IUserLogged>(urlPath);
			return new User(
				response.status, 
				true, 
				Message.SUCCESS, 
				response.data.firstName, 
				response.data.lastName,
				response.data.email,
				response.data.p_enabled
			)

		}catch(error){
			return new User(
				500, 
				false, 
				Message.ERROR, 
				"", 
				"",
				"",
				false
			)
		}
	}
}

export default UserFacade;
