import ListItem from '../list-item/ListItem';

const List = ({items = [] }) => {
	const listItems = items.map((item, index) => <ListItem text={ item.text } id={ index } />);

	return (
		<ul className="list-group mt-3" id="note-list">
			{ listItems }
		</ul>
	);
};

export default List;
