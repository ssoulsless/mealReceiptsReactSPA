/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

function MealItem(props) {
	const { strMeal, idMeal, strMealThumb } = props;
	return (
		<Card>
			<CardImg top width='100%' src={strMealThumb} alt='Card image cap' />
			<CardBody>
				<CardTitle tag='h5'>{strMeal}</CardTitle>
			</CardBody>
			<Link to={`/meal/${idMeal}`} className='btn btn-primary'>
				Watch Recipe
			</Link>
		</Card>
	);
}

export { MealItem };
