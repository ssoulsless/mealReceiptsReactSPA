/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function CategoryItem(props) {
	const { strCategory, strCategoryThumb, strCategoryDescription } = props;

	return (
		<>
			<Card className='card'>
				<CardImg top width='100%' src={strCategoryThumb} alt={strCategory} />
				<CardBody className='card-body text-center'>
					<CardTitle tag='h5'>{strCategory}</CardTitle>
					<CardText>{strCategoryDescription.slice(0, 60)}...</CardText>
				</CardBody>
				<Link
					to={`/category/${strCategory}`}
					className='btn btn-primary card-btn'>
					Watch category
				</Link>
			</Card>
		</>
	);
}

export { CategoryItem };
