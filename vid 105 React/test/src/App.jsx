import { useState , useEffect , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/nav.jsx'
import Footer from './components/footer.jsx'
import Card from './components/card.jsx'

function App() {
  let [count, setCount] = useState(0) // it is used to store the value of a variable and it will re-render the components

  const a = useRef(0) // it is used to store the value of a variable and it will not re-render the components
  //useRef is also used to store html elements and it will not re-render the components
  const ref= useRef()

  useEffect(() => {
    alert("count was chenged")
    ref.current.style.backgroundColor = 'red'
    console.log('a', a.current);
    a.current += 1;              
  },[count] )

  return (
    <>
      <Navbar Logo={"hello "+ count } />
      <button ref={ref} onClick={()=>setCount((count)=> count +1)}>Click me</button>
      <div className='divc'>
        <button onClick={()=>ref.current.style.display = 'none'}>delete click me button</button>
        <Card title="hello world" desc={count} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
        <Card title="hello world" desc={"helloword"} img={reactLogo}/>
      </div>
      <Footer x="hello" />
    </>
  )
}

export default App
