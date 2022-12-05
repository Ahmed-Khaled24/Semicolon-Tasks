import './grid.styles.css'
import GridItem from '../grid-item/grid-item.component';
const Grid = ({items}) => {
    return (
        <div className='grid'>
            {items.map((item, index) => {
                return (
                    <GridItem item={item} key={index}/>
                )
            })}
        </div>
    )
}
export default Grid;