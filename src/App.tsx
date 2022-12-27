import data from './data.json'
import { Notification } from './types'

function App() {
  return (
    <div className="font-primary">
      <header className="flex items-center">
        <h1>Notifications</h1>
        <p>Mark all as read</p>
      </header>

      <main className="bg-neutral-50">
        {data.map((notification: Notification) => (
          <div key={notification.author} className="flex items-center gap-3">
            <img src={notification.avatar} alt={notification.author} />
            <div>
              <h3 className="inline font-black">{notification.author} </h3>
              <span className="text-neutral-600">{notification.action}</span>
              <span className="text-neutral-600 font-extrabold">
                {' '}
                {notification.post}
              </span>
              <div className="w-3 h-3 inline bg-primary-400 rounded-full" />
              <span className="">{notification.group}</span>
              <p className="text-neutral-400">{notification.date}</p>
              <p>{notification.message}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App
