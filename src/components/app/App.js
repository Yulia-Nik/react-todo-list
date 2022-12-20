// Импорт стилей компонента. TODO: Доработать по возможности.
import '../list-item/style.scss';

import { useState } from 'react';

import Title from '../title/Title';
import NoteInput from '../note-input/NoteInput';
import Button from '../button/Button';
import Checkbox from '../checkbox/Checkbox';
import DeleteButton from '../delete-button/DeleteButton';

// Начальные данные (типа из БД)
const dataDefault = [
	{text: 'Заметка № 1'},
	{text: 'Заметка № 2'},
	{text: 'Заметка № 3'},
];

const App = () => {
	const [noteData, setNoteData] = useState(dataDefault);

	const handleAddNote = () => {
		const input = document.getElementById('noteField');
		const value = input?.value || '';

		if (value) {
			setNoteData([
				...noteData,
				{text: value},
			]);
			input.value = '';
		}
		
	};

	const handleDeleteNote = key => {
		setNoteData(
			noteData.filter((item, index) => index !== key)
		);
	};

	const listItems = noteData.map((item, index) =>
		<li className="list-group-item" key={ item.text.toString() }>
			<div className="notes-item">
				<Checkbox />
				<label className="form-check-label" htmlFor="thirdCheckbox">{ item.text }</label>
			</div>
			<DeleteButton onClick={ () => handleDeleteNote(index) } />
		</li>
	);

	return (
		<div className="container">
			<header>
				<Title />
			</header>
			<main>
				<div className="d-flex">
					<NoteInput classes="me-2 me-md-4" />
					<Button text="Добавить" onClick={ handleAddNote } />
				</div>
				<ul className="list-group mt-3" id="note-list">
					{ listItems }
				</ul>
			</main>
		</div>
	);
};

export default App;
