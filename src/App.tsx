import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { useStore } from 'effector-react'
import { createEffect, createEvent, createStore, sample } from 'effector'

const callSample = createEffect();

const updateStore = createEffect();
const store = createStore(Math.random())
  .on(updateStore, () => {})

function App() {
  return <button onClick={callSample}>
    call sample
  </button>
}

sample({
  clock: callSample,
  source: store,
  target: callSample,
  fn: (payload: any) => {
    console.warn(payload);
  }
});

export default App
