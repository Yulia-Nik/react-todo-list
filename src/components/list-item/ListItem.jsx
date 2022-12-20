import './style.scss';
import Checkbox from '../checkbox/Checkbox';
import DeleteButton from '../delete-button/DeleteButton';

const ListItem = ({text = 'Элемент списка', id}) => {
	return (
		<li className="list-group-item" key={ text.toString() } id={ id }>
			<div>
				<Checkbox />
				<label className="form-check-label" htmlFor="thirdCheckbox">{ text }</label>
			</div>
			<DeleteButton />
		</li>
	);
};

export default ListItem;
