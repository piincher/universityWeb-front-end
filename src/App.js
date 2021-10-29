import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateUniversity from './pages/CreateUniversity.component';
import HomePage from './pages/HomePage.component';

function App() {
	return (
		<Router>
			<Route path="/" exact component={HomePage} />
			<Route path="/createUniversity" component={CreateUniversity} />
		</Router>
	);
}

export default App;
