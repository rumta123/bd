import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import * as GetAllProger from './GetAllProger.graphql';

export default ({ onSelect }) => {
	const { data1, loading } = useQuery(GetAllProger);

	return (
		<div>
			<h1>All proger</h1>

			{loading && <div>Loading...</div>}

			{!loading && data1.getAllProger && (
				<ul>
					{data1.getAllProger.map(proger => (
						<li key={proger.title}>
							{proger.id}: {proger.title} ({proger.author.firstName} {proger.author.lastName}){' '}
							<button onClick={() => onSelect(proger)}>select</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
