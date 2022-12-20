const NoteInput = ({classes = ''}) => {
	const classList = `form-control fixed-size-input${classes ? ` ${classes}` : ''}`;

	return <textarea className={classList} id="noteField" placeholder="Введите текст заметки" rows="1"></textarea>;
};

export default NoteInput;
