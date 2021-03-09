import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getFilteredCategories } from '../api';

import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';

function Category() {
	const { name } = useParams();
	const [meals, setMeals] = useState([]);
	const { goBack } = useHistory();
	useEffect(() => {
		getFilteredCategories(name).then((data) => setMeals(data.meals));
	}, [name]);
	return (
		<div>
			<button className='btn btn-primary' onClick={goBack}>
				Go Back
			</button>
			{!meals.length ? <Preloader /> : <MealList meals={meals} />}
		</div>
	);
}

export { Category };
