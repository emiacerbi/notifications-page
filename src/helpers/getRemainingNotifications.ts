import { Notification } from '../types'

export const getRemainingNotifications = (array: Notification[]) => {
  return array.reduce((acc, el: Notification) => {
    if (el.isActive) {
      acc++
    }

    return acc
  }, 0)
}
