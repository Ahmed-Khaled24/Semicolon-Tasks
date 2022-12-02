import '../styles/new-item.styles.css'
import { useState } from 'react';

const AddNewItem = ({addItem}) => {
    const priorities = ['Low', 'Normal', 'High'];
    const [priority, setPriority] = useState(0)
    const onClick = () => {
        priority < 2 ? setPriority(priority+1) : setPriority(0);
    }

    return (
        <div className='new-item-section'>
            <input type='text' className='main-text-input' placeholder='Add New Item' id='new-title'/>
            <button type="button" onClick={onClick}> Priority: <span id='new-priority'> {priorities[priority]} </span> </button>
            <button type='button' onClick={addItem}> Add </button>
        </div>
    )
}
export default AddNewItem;