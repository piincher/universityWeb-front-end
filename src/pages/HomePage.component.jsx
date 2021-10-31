import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomButton from '../components/CustomButton.component';
import UniversitiesList from '../components/UniversitiesList.component';

export const HomePage = ({ history }) => {
	const [ universities, setUniversities ] = useState([]);

	useEffect(() => {
		const fetchAll = async () => {
			const { data } = await axios.get('http://localhost:8000/api');
			setUniversities(data);
		};
		fetchAll();
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push('/register');
	};

	return (
		<React.Fragment>
			<UniversitiesList universities={universities} />
			<CustomButton handleSubmit={handleSubmit}>Add new University</CustomButton>
		</React.Fragment>
	);
};

export default HomePage;
