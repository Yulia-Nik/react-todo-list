import './style.scss';

const DeleteButton = ({ onClick }) => {
	return <button className="delete-button" data-name="deleteNote" onClick={ onClick }></button>;
};

export default DeleteButton;
