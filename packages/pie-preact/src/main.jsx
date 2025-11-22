import { render } from 'preact';
import { useState } from 'preact/hooks';

const primaryTheme = ['#FF6384', '#36A2EB', '#FFCE56'];
const secondaryTheme = ['#00FF41', '#008F11', '#003B00'];

function App() {
  const [ theme, setTheme ] = useState('primary');
  const colors = theme === 'primary' ? primaryTheme : secondaryTheme;

  function toggleTheme() {
    setTheme((t) => t === 'primary' ? 'secondary' : 'primary');
  }

  return (
    <figure style={{ textAlign: 'center' }}>
      <svg viewBox="0 0 100 100" width="120" height="120">
        <path d="M 50 50 L 50 10 A 40 40 0 0 1 88 62 Z" fill={colors[0]}>
          <title>30% Europe</title>
        </path>
        <path d="M 50 50 L 88 62 A 40 40 0 0 1 12 62 Z" fill={colors[1]}>
          <title>45% North America</title>
        </path>
        <path d="M 50 50 L 12 62 A 40 40 0 0 1 50 10 Z" fill={colors[2]}>
          <title>25% Asia</title>
        </path>
      </svg>
      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <figcaption>Preact Pie Chart</figcaption>
        <button onClick={toggleTheme}>theme</button>
      </div>
    </figure>
  );
}

export function buildWidget(host = document.body) {
  render(<App />, host);
}
