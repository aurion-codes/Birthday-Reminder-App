import logo from './logo.svg';
import './App.css';
import data from './data.js'
import List from './List.js'
import { useState } from 'react'

function App() {

  const [people, setPeople] = useState(data)
  console.log(data)
  return (
    <main>
      <section className="container" >
        <h3>{people.length} Birthdays Today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
