import logo from './logo.svg';
import './App.css';
import data from './data.js'
import List from './List.js'
import { useState } from 'react'

function App() {

  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container" >
        <h3>0 birthdays today</h3>
        <List people={people}/>
        <button onClick={() => console.log('i have been clicked')}>Clear All</button>
      </section>
    </main>
  );
}

export default App;