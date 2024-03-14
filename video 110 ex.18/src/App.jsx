import { useState , useEffect } from 'react'
import Card from './components/card'
import Navbar from './components/navbar'
import './App.css'

function App() {
  const [users, setuser] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data); // Log the data (optional)
        setuser(data); // Set the data in state
      });
  }, []);

  return (
    <>
    <Navbar />
    <section className='cards'>

      {users.map((user) => {
        return (
          <Card key={user.id} user={user} />
          )
        })}
       
    </section>
    </>
  )
}

export default App
