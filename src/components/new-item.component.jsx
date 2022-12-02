import '../styles/new-item.styles.css'
import TextInput from './text-input.component';
import Button from './button.component'

const NewItem = () => {
    return (
        <div className='new-item-section'>
            <TextInput placeholder='Add New Item'/>
            <Button text='Priority:High'/>
            <Button text='Add'/>
        </div>
    )
}
export default NewItem;