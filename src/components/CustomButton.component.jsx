import React from 'react';

const CustomButton = ({ children, otherProps }) => {
	return (
		<div className="form-group p-2">
			<button {...otherProps} className="btn btn-primary">
				{children}
			</button>
		</div>
	);
};

export default CustomButton;
