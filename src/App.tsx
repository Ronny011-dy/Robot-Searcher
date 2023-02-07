import { useState, useEffect, ChangeEvent } from 'react';

import { fetchData } from './utils/robots-api.utils';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

export type Robot = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setsearchField] = useState('');
  const [robots, setrobots] = useState<Robot[]>([]);
  const [filteredRobots, setfilteredRobots] = useState(robots);

  useEffect(() => {
    const getRobotUsers = async () => {
      const users = await fetchData<Robot[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setrobots(users);
    };
    getRobotUsers();
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLowerCase();
    setsearchField(searchFieldString);
  };
  useEffect(() => {
    const newfilteredRobots = robots.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setfilteredRobots(newfilteredRobots);
  }, [robots, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Robot Searcher</h1>
      <SearchBox
        className="robots-search-box"
        placeholder="search robots"
        onChangeHandler={onSearchChange}
      />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
