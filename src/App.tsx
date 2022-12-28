import { useEffect, useState } from 'react'
import data from './data.json'
import { Notification } from './types'
import { getRemainingNotifications } from './helpers/getRemainingNotifications'

function App() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    setNotifications(data)
  }, [])

  const setNotificationStatus = (id: number) => {
    setNotifications(
      notifications.map((notification: Notification) =>
        notification.id === id
          ? { ...notification, isActive: !notification.isActive }
          : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification: Notification) => {
        return {
          ...notification,
          isActive: false,
        }
      })
    )
  }

  const remainingNotifications = getRemainingNotifications(notifications)

  return (
    <div className="font-primary bg-neutral-50 min-h-screen grid place-content-center">
      <div className="max-w-2xl p-5 md:p-6 bg-white rounded-lg shadow-lg">
        <header className="flex items-center gap-3">
          <h1 className="text-xl font-bold">Notifications</h1>
          <p className="py-1 px-3 rounded-md bg-primary-800 text-white">
            {remainingNotifications}
          </p>
          <p
            className="text-neutral-600 hover:text-primary-800 cursor-pointer ml-auto"
            onClick={markAllAsRead}
          >
            Mark all as read
          </p>
        </header>

        <main className="flex flex-col gap-3 mt-8">
          {notifications.map((notification) => (
            <article
              key={notification.id}
              className={`flex items-start gap-3 p-3 cursor-pointer rounded-lg ${
                notification.isActive && 'bg-neutral-100'
              }`}
              onClick={() => setNotificationStatus(notification.id)}
            >
              <img
                src={notification.avatar}
                className="w-10 h-10 rounded-full"
                alt={notification.author}
              />
              <div>
                <h3 className="inline font-black hover:text-primary-800">
                  {notification.author}{' '}
                </h3>
                <span className="text-neutral-600">{notification.action} </span>

                <span className="text-neutral-600 font-extrabold hover:text-primary-800">
                  {' '}
                  {notification.post}
                </span>
                <span className="text-primary-800 font-bold">
                  {notification.group}{' '}
                </span>

                {notification.isActive && (
                  <div className="w-2 h-2 ml-1 mb-[1px] bg-primary-400 rounded-full inline-block" />
                )}

                <p className="text-neutral-400">{notification.date}</p>

                {notification.message && (
                  <p className="border p-3 mt-3 rounded-md leading-tight text-neutral-600">
                    {notification.message}
                  </p>
                )}
              </div>
              {notification.picture && (
                <img
                  src={notification.picture}
                  className="w-10 h-10 rounded-md ml-auto"
                  alt={notification.author}
                />
              )}
            </article>
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
