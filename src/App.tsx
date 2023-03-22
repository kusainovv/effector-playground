import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useStore } from 'effector-react'
import { createEffect, createStore } from 'effector'


const sideEffect = createEffect(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return response.json();
});

const $user = createStore({})
  .on(sideEffect.doneData, (state, payload) => payload);

sideEffect();

function App() {
  const input = useStore($user);
  console.warn(input);
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  )
}

export default App
