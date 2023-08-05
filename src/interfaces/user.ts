export interface ILogin{
	email: string
	password: string
}

export interface IUser{
	firstName: string,
	lastName: string,
	email: string,
	p_enabled: boolean
	logged?: boolean
}
