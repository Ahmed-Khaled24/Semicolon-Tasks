import './new-item.styles.css'
import { useState } from 'react';

const AddNewItem = ({addItem, filter}) => {
    const priorities = ['Low', 'Medium', 'High'];
    let [priority, setPriority] = useState(0)
    const onClick = () => {
        priority < 2 ? priority+=1 : priority=0;
        setPriority(priority)
        filter(priorities[priority]);
    }

    return (
        <div className='new-item-section'>
            <input type='text' className='main-text-input' placeholder='Add New Item' id='new-title'/>
            <button type="button" onClick={onClick}> Priority: <span id='new-priority'>{priorities[priority]}</span> </button>
            <button type='button' onClick={addItem}> Add </button>
        </div>
    )
}
export default AddNewItem;