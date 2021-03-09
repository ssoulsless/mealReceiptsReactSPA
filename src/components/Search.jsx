/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Input } from 'reactstrap';

function Search(props) {
	const { cb } = props;
	const [searchText, setSearchText] = useState('');

	const handleKey = (event) => {
		if (event.key === 'Enter') {
			handleSubmit();
		}
	};

	const handleSubmit = () => {
		cb(searchText);
	};

	return (
		<div className='search-form'>
			<Input
				type='search'
				placeholder='searching...'
				id='search-field'
				onChange={(event) => setSearchText(event.target.value)}
				onKeyDown={handleKey}
				value={searchText}
			/>
			<button className='btn btn-primary ' onClick={handleSubmit}>
				Search
			</button>
		</div>
	);
}

export { Search };
