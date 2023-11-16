import React, { useState } from 'react';
import { TodosContext } from './components/TodosContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { FilterType } from './types/Filter';
import { Header } from './components/Header';
import { TodosFilter } from './components/TodosFilter';
import { TodosList } from './components/TodosList';

export const App: React.FC = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState(FilterType.All);

  return (
    <div className="todoapp">
      <TodosContext.Provider value={{ todos, setTodos }}>
        <Header />

        <TodosList filter={filter} />

        <TodosFilter filter={filter} setFilter={setFilter} />
      </TodosContext.Provider>
    </div>
  );
};
