import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
	return (
		<div
			className='shadow-sm p-3 mb-5 bg-body rounded'
			id='header-nav__wrapper'>
			<ul className='nav nav-pills nav-fill'>
				<li className='nav-item'>
					<Link className='nav-link active' aria-current='page' to='/'>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/about'>
						About
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/contacts'>
						Contact
					</Link>
				</li>
				<li className='nav-item'>
					<Link
						className='nav-link'
						to='https://github.com/ssoulsless/ReactShopProject'
						tabIndex='-1'
						aria-disabled='true'>
						Repo
					</Link>
				</li>
			</ul>
		</div>
	);
}

export { Header };
