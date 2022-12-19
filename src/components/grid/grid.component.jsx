import "./grid.styles.css";
import GridItem from "../grid-item/grid-item.component";

const Grid = ({ items, deleteItemHandler }) => {
	return (
		<div className="grid">
			{items.map((item, index) => {
				return (
					<GridItem
						item={item}
						deleteItemHandler={deleteItemHandler}
						key={index}
					/>
				);
			})}
		</div>
	);
};
export default Grid;
