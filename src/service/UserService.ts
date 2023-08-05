import ServerFacade from "../network/ServerFacade";
import UserFacade from "../network/UserFacade";
import Login from '../request/Login';
import { User } from '../response/User';

class UserService {
	// GET
	static async userLogin (email: string, password: string): Promise<User> {
        const login = new Login(email, password)
        return await ServerFacade.userLogin(login)
	}

	static async getUser(): Promise<User> {
        return UserFacade.getUser()
	}
}

export default UserService;