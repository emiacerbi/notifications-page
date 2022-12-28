export type Notification = {
  id: number
  author: string
  avatar: string
  action: string
  post: string | null
  isActive: boolean
  group: string | null
  date: string
  message: string | null
  picture: string | null
}
