import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Register from './Pages/Register';
import Login from './Pages/Login';
require('dotenv').config();
function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/signup' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
