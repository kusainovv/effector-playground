import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useStore } from 'effector-react'
import { createEffect, createEvent, createStore } from 'effector'


const sayHi = createEffect(async (role: string) => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return result.json();
});


sayHi.done.watch((payload: any) => {
  console.warn(payload);
});

sayHi.doneData.watch((payload: any) => {
  console.warn(payload);
});


function App() {

  useEffect(() => {
    sayHi('admin');
  }, []);

  return <></>
}

export default App
