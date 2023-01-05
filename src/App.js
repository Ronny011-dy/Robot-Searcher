import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

// functional component

const App = () => {
  const [searchField, setsearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setsearchField(searchFieldString);
  };
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Robot Searcher</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="search robots"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
// class component

// import { Component } from 'react';
// // Components
// import CardList from './components/card-list/card-list.component';
// import SearchBox from './components/search-box/search-box.component';
// // styling and assets
// import './App.css';
// // main Application component
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }
//   // lifecycle methods
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(() => {
//           return { monsters: users };
//         });
//       });
//   }
//   // custom methods
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return {
//         searchField,
//       };
//     });
//   };
//   // componenet render method
//   render() {
//     const { monsters, searchField } = this.state;
//     const onSearchChange = this.onSearchChange;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Robot Searcher</h1>
//         <SearchBox
//           className="monsters-search-box"
//           placeholder="search robots"
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
