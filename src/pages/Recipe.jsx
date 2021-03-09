import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';
import { Table } from 'reactstrap';

function Recipe() {
	const [recipe, setRecipe] = useState({});
	const { id } = useParams();
	const { goBack } = useHistory();
	useEffect(() => {
		getMealById(id).then((data) => setRecipe(data.meals[0]));
	}, [id]);

	return (
		<>
			{recipe.length ? (
				<Preloader />
			) : (
				<div className='recipe text-center'>
					<img src={recipe.strMealThumb} alt={recipe.strMeal} />
					<h1>{recipe.strMeal}</h1>
					<h6>Category: {recipe.strCategory}</h6>
					{recipe.strArea && <h6>Come from: {recipe.strArea}</h6>}
					<Table striped>
						<thead>
							<tr>
								<th>Ingredient</th>
								<th>Measure</th>
							</tr>
						</thead>
						<tbody>
							{Object.keys(recipe).map((key) => {
								if (key.includes('Ingredient') && recipe[key]) {
									return (
										<tr key={key}>
											<td>{recipe[key]}</td>
											<td>{recipe[`strMeasure${key.slice(13)}`]}</td>
										</tr>
									);
								}
							})}
						</tbody>
					</Table>
					<p>{recipe.strInstructions}</p>
					{recipe.strYoutube && (
						<div>
							<h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipe</h5>
							<iframe
								title={id}
								src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
									-11
								)}`}
								allowFullScreen
							/>
						</div>
					)}
				</div>
			)}
			<button type='button' className='btn btn-primary' onClick={goBack}>
				Go Back
			</button>
		</>
	);
}

export { Recipe };
