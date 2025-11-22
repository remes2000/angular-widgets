import { useState } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  const [ title ] = useState('react-pie');
  return (
    <>
      <h1>Hello World { title }</h1>
    </>
  )
}

export function buildWidget(host: HTMLElement = document.body) {
  const root = createRoot(host);
  root.render(<App />);
}
