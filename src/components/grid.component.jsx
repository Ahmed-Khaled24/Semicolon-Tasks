import '../styles/grid.styles.css'
import GridItem from './grid-item.component';
const Grid = ({items}) => {
    return (
        <div className='grid'>
            {items.map((item) => {
                return (
                    <GridItem item={item} />
                )
            })}
        </div>
    )
}
export default Grid;