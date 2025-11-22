import { render } from 'preact';
import { useState } from 'preact/hooks';

function App() {
  console.log('Rendering Preact App component');
  const [ title ] = useState('preact-pie');
  return (
    <>
      <h1>Hello World { title }</h1>
    </>
  )
}

export function buildWidget(host = document.body) {
  console.log('Building Preact widget in host:', host);
  render(<App />, host);
}
