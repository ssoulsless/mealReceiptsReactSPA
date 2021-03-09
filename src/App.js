import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { About } from './pages/About';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

import './index.css';

function App() {
	return (
		<>
			<Router basename='/mealReceiptsReactSPA'>
				<Header />
				<main className='content container'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/about' component={About} />
						<Route path='/contacts' component={Contact} />
						<Route path='/category/:name' component={Category} />
						<Route path='/meal/:id' component={Recipe} />
						<Route component={NotFound} />
					</Switch>
				</main>
				<Footer />
			</Router>
		</>
	);
}

export default App;