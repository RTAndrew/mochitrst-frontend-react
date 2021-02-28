import { StoreContext } from 'contexts';
import { SearchResults } from 'models/HttpResponse.types';
import { Home } from 'pages';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [queryResult, setQueryResult] = useState<SearchResults>({
    total_count: 0,
    incomplete_results: true,
    items: [],
  });

  const store = {
    loading,
    setLoading,
    query,
    setQuery,
    queryResult,
    setQueryResult,
    isError,
    setIsError,
  };

  return (
    <div className="App container">
      <Router>
        <Switch>
          <StoreContext.Provider value={store}>
            <Route path="/" component={Home} />

            <Route path="*">"404 "</Route>
          </StoreContext.Provider>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
