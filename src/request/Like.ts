import { ILikeRequest } from '../interfaces/like'

export class LikeRequest implements ILikeRequest {
  private readonly _postId: number

  constructor (postId: number) {
    this._postId = postId
  }

  get postId (): number {
    return this._postId
  }
}
