import ServerFacade from "../network/ServerFacade";
import Login from '../request/Login';
import { User } from '../response/User';

class UserService {
	// GET
	static async userLogin (email: string, password: string): Promise<User> {

        const login = new Login(email, password)
		
        return await ServerFacade.userLogin(login)
	}
}

export default UserService;