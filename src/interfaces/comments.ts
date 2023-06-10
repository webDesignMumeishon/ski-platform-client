import { PostTitle } from "./post"

export interface IComment{
    id: number
    parent: null | number
    text: string
    created_at: string
    first_name: string
    last_name: string
}

export interface ICommentAndLike{
    post: PostTitle
	comments: IComment[]
	likes: string
}