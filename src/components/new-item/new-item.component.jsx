import './new-item.styles.css'
const priorities = ['Low', 'Medium', 'High'];

const AddNewItem = ({addItemHandler, filterHandler, priority, setPriority, setTitle}) => {

    function onClick() {
        priority < 2 ? priority+=1 : priority=0;
        setPriority(priority);
        filterHandler(priorities[priority]);
    }

    function onChange (event){
        setTitle(event.target.value);
    } 

    return (
        <div className='new-item-section'>
            <input type='text' className='main-text-input' placeholder='Add New Item' onChange={onChange}/>
            <button type="button" onClick={onClick}> 
                Priority: <span id='new-priority'> {priorities[priority]} </span> 
            </button>
            <button type='button' onClick={addItemHandler}> Add </button>
        </div>
    )
}
export default AddNewItem;