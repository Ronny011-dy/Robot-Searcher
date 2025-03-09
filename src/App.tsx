import { useState, ChangeEvent, useEffect } from 'react';

import { CardList } from './components/CardList';
import { SearchBox } from './components/SearchBox';
import { useGetRobotUsers } from './hooks/useGetRobotUsers';

import './App.css';

export type Robot = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const { robots } = useGetRobotUsers();

  const [searchField, setSearchField] = useState('');
  const [filteredRobots, setFilteredRobots] = useState(robots);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    const newfilteredRobots = robots.filter(({ name }) =>
      name.toLowerCase().includes(searchField.toLowerCase())
    );

    setFilteredRobots(newfilteredRobots);
  }, [robots, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Robot Searcher</h1>
      <SearchBox onChange={handleSearch} value={searchField} />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
