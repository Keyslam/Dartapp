import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <li>
        <ul><Link to="/a">Link A</Link></ul>
        <ul><Link to="/b">Link B</Link></ul>
      </li>
    </>
  );
}

export default App;
