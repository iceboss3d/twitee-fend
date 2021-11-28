import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ProtectedRoute from './Context/protectedRoute';
import AuthenticationProvider from './Context/authProvider';
require('dotenv').config();
function App() {
	return (
		<AuthenticationProvider>
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' exact element={<ProtectedRoute><Home /></ProtectedRoute>} />
				<Route path='/signup' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</Router>
		</AuthenticationProvider>
	);
}

export default App;
