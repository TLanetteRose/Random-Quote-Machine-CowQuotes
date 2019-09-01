import React from 'react';


const Button = ({ buttonDisplayName, clickHandler }) => (
	<button className="btn btn-primary btn-lg" onClick={clickHandler}>{buttonDisplayName}</button>

	);

export default Button;