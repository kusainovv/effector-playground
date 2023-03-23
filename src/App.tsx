import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useStore } from 'effector-react'
import { createEffect, createStore } from 'effector'


const sayHi = createEffect();

sayHi.watch(() => {
  alert('Hello!');
});

function App() {
  return (
    <div onClick={sayHi}>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
