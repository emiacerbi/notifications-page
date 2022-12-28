import { useEffect, useState } from 'react'
import data from './data.json'
import { Notification } from './types'

function App() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    setNotifications(data)
  }, [])

  return (
    <div className="font-primary min-h-screen">
      <div className="mx-auto max-w-2xl p-5">
        <header className="flex items-center justify-between">
          <h1>Notifications</h1>
          {/* {notifications} */}
          <p>Mark all as read</p>
        </header>

        <main className="bg-neutral-50 flex flex-col gap-3">
          {notifications.map((notification) => (
            <div key={notification.author} className="flex items-start gap-3">
              <img
                src={notification.avatar}
                className="w-10 h-10 rounded-full"
                alt={notification.author}
              />
              <div>
                <h3 className="inline font-black">{notification.author} </h3>
                <span className="text-neutral-600">{notification.action} </span>

                <span className="text-neutral-600 font-extrabold">
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
                  <p className="border p-3 rounded-md leading-tight text-neutral-600">
                    {notification.message}
                  </p>
                )}
              </div>
              {notification.picture && (
                <img
                  src={notification.picture}
                  className="w-10 h-10 rounded-md"
                  alt={notification.author}
                />
              )}
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
