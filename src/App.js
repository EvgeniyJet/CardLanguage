import './App.sass';
import React, { useState, useEffect } from 'react'
import CardContainer from './components/CardContainer';
import Nav from './components/Nav';
import { Context } from './context';
function App() {
	const [cards, _setCards] = useState(
		[]
	);
	const setCards = (func) => {
		_setCards(pre => {
			const newState = func(pre);
			localStorage.setItem('cards', JSON.stringify(newState));
			return newState
		});
	}
	useEffect(() => {
		const cards = JSON.parse(localStorage.getItem('cards')) ?? [];
		setCards(() => cards);
	}, [])
	const changeCardState = (id) => {
		setCards(prev => {
			const newState = prev.map(word => {
				if (word.id === id) {
					word.state = word.state === 'ru' ? 'en' : 'ru';
				}
				return word
			})
			return newState
		})
	}

	const changeLanguage = (language) => {
		setCards(prev => prev.map(card => {
			card.state = language;
			return card
		})
		)
	}

	const addCard = (card) => {
		setCards(prev => [...prev, card]);
	}
	const deleteCard = (id) => {
		setCards(prev => prev.filter(card => card.id !== id));
	}
	return (
		<Context.Provider value={{ changeLanguage, changeCardState, addCard, deleteCard }}>
			<div >
				<Nav />
				<CardContainer cards={cards} />
			</div>
		</Context.Provider>
	);
}

export default App;
