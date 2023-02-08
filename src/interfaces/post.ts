export interface IPost{
    id: number
    user_id: number
    title: string
    created_at: Date
    number_comments: string
    number_likes: string
    first_name: string
    last_name: string
    did_like: number
}

export interface IPostListRequest{
	city: string,
	state: string
}

export interface ISinglePostRequest{
	id: string,
}