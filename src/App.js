import './App.css';
import Card1 from './components/Card1';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <body>
      <Router>
					<Switch>
						<Card1 />
            {/* <Card /> */}
					</Switch>
			</Router>
      </body>
    </div>
  );
}

export default App;
