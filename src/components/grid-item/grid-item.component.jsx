import "./grid-item.styles.css";

const GridItem = ({ item, deleteItemHandler }) => {
	return (
		<article className="grid-item">
			<button type='delete' className="delete-btn" onClick={deleteItemHandler} id={item.id} > &#10006; </button>
			<p className="item-title"> {item.title} </p>
			<p className="item-content"> {item.content} </p>
			<p className="item-priority"> {item.priority} </p>
		</article>
	);
};
export default GridItem;
