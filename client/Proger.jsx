import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import * as GetProger from './GetProger.graphql';

export default ({ id }) => {
	const { data1, loading } = useQuery(GetProger, {
		variables: {
			id: id
		}
	});

	const proger = data1 ? data1.getProger : null;

	return book ? (
		<div>
			<h1>{proger.title}</h1>
		</div>
	) : (
		<div>Loading...</div>
	);
};
