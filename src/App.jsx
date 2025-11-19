import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function App() { // function
  // 1. Javascript
  const [count, setCount] = useState(0);
  const title = 'React: From Zero to Hero';
  // part 9. Loops
  // const fruits = [
  //   {
  //     title: 'Apple',
  //     count: 12,
  //     options: [
  //       {
  //         title: 'Golden',
  //         count: 8,
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Banana',
  //     count: 8,
  //     options: [
  //       {
  //         title: 'Angola',
  //         count: 8,
  //       }
  //     ]
  //   }
  // ]

  // 2. React hooks

  // 3. JSX
  return (
    <>
    {/* part 9 related */}
      {/* <ul>
        {fruits.map((fruit, index) =>
          <li key={index}>
            <span>{fruit.title}, </span>
            <span>Quantity: {fruit.count}</span>
            <ul>
              {fruit.options.map((option, index) =>
              <li key={index}>
                <span>{option.title}, </span>
                <span>Quantity: {option.count}</span>
              </li>)}
            </ul>  
          </li>
        )}
      </ul> */} 
    {/* part 10. style related */}
    {/* <header style={{
      backgroundColor: 'green'
    }}>
      <h1>Hello Yui</h1>
      <p>You are a good person</p>

    </header> */}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}
