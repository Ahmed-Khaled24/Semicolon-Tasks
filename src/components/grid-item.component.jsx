import "../styles/grid-item.styles.css";

const GridItem = ({ item }) => {
	return (
		<article className="grid-item">
			<p className="item-title"> {item.title} </p>
			<p className="item-content"> {item.content} </p>
			<p className="item-priority"> {item.priority} </p>
		</article>
	);
};
export default GridItem;
