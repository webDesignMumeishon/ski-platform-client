export interface ILogin{
	email: string
	password: string
}

export interface IUserLogged{
	firstName: string,
	lastName: string,
	email: string,
	p_enabled: boolean
}
