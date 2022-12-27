import data from './data.json'
import { Notification } from './types'

function App() {
  return (
    <div className="font-primary">
      <header>
        <h1>Notifications</h1>
        <p>Mark all as read</p>
      </header>

      <main>
        {data.map((notification: Notification) => (
          <h1 key={notification.author}>{notification.author}</h1>
        ))}
      </main>
    </div>
  )
}

export default App
