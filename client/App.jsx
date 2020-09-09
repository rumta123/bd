import React, { useState } from 'react';
import AllBooks from './AllBooks';
import Book from './Book';
import AllProger from './AllProger';
import Proger from './Proger';

export default () => {
	const [selectedBookId, setSelectedBookId] = useState();
	const [selectedProgerId, setSelectedProgerId] = useState();
	return (
		<div>
			<div>
				<AllBooks onSelect={book => setSelectedBookId(book.id)} />
				
			</div>
			<div>
			<AllProger onSelect={proger => setSelectedProgerId(proger.id)} />
			</div>
			{selectedBookId && (
				<div>
					<Book id={selectedBookId} />
				</div>
			)}
 			{selectedProgerId && (
				<div>
					<Proger id={selectedProgerId} />
				</div>
			)}

		</div>
	);
};
