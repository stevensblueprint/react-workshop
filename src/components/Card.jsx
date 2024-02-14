import { useEffect, useState } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

function Card({name, url}) {
	const [imageUrl, setImageUrl] = useState("");

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setImageUrl(data.sprites.front_default))
	}, [url])
	
	return (
		<div className='pokemon-card'>
			<h1>{name}</h1>
			<img src={imageUrl} alt={name} />
		</div>
	)
}

// Good Practice: define prop types so that you can catch errors early
Card.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
}

export default Card;