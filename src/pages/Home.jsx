import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../api';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';
import { useHistory, useLocation } from 'react-router-dom';

function Home() {
	const [catalog, setCatalog] = useState([]);
	const [filteredCatalog, setFilteredCatalog] = useState([]);

	const { pathname, search } = useLocation();
	const { push } = useHistory();

	const handleSearch = (string) => {
		setFilteredCatalog(
			catalog.filter((item) =>
				item.strCategory.toLowerCase().includes(string.toLowerCase())
			)
		);
		push({
			pathname,
			search: `?search=${string}`,
		});
	};

	useEffect(() => {
		getAllCategories().then((data) => {
			setCatalog(data.categories);
			setFilteredCatalog(
				search ?(
					data.categories.filter((item) =>
						item.strCategory
							.toLowerCase()
							.includes(search.split('=')[1].toLowerCase())
					)) : (data.categories)
			);
		});
	}, [search]);
	return (
		<>
			<Search cb={handleSearch} />
			{!catalog.length ? (
				<Preloader />
			) : (
				<CategoryList catalog={filteredCatalog} />
			)}
		</>
	);
}

export { Home };
