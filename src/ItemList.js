const ItemList = ({ items }) => {
	return (
		<ul>
			{items.map((item) => (
				<li key={item.id} className='item'>
					{JSON.stringify(item)}
				</li>
			))}
		</ul>
	);
};

export default ItemList;
