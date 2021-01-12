import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MainView = () => {
  return (
    <div>
      <h1>Camera Tethering with gphoto2</h1>
      <div className="MainView">
        <button type="button">
          <span role="img" aria-label="books">
            📚
          </span>
          New session
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainView} />
      </Switch>
    </Router>
  );
}
