import "./App.css";
import Nav from "./components/nav/nav.component";
import AddNewItem from "./components/new-item/new-item.component";
import Grid from "./components/grid/grid.component";
import { useEffect, useState } from "react";

let items = [
	{
		title: "Study",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
		priority: "High",
		id: Math.floor(Math.random()*1e6),
	},
	{
		title: "Sleep",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
		priority: "High",
		id: Math.floor(Math.random()*1e6),
	},
	{
		title: "Eat",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
		priority: "High",
		id: Math.floor(Math.random()*1e6),
	},
	{
		title: "Study",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
		priority: "Medium",
		id: Math.floor(Math.random()*1e6),
	},
	{
		title: "Sleep",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
		priority: "Medium",
		id: Math.floor(Math.random()*1e6),
	},
	{
		title: "Eat",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
		priority: "Medium",
		id: Math.floor(Math.random()*1e6),
	},
	{
		title: "Study",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
		priority: "Low",
		id: Math.floor(Math.random()*1e6),
	},
	{
		title: "Sleep",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
		priority: "Low",
		id: Math.floor(Math.random()*1e6),
	},
	{
		title: "Eat",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
		priority: "Low",
		id: Math.floor(Math.random()*1e6),
	}
];

const App = () => {
	const [todos, setTodos] = useState(items);

	useEffect(() => {
		filterHandler('Low');
	}, []);

	const addItemHandler = () => {
		const title = document.getElementById("new-title").value;
		const currentPriority = document.getElementById("new-priority").innerHTML;
		items.push({
			title,
			priority: currentPriority,
			id: Math.floor(Math.random()*1e6),
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
		});
		filterHandler(currentPriority)
	};

	const filterHandler = (priority) => {
		setTodos(items.filter(item => item.priority === priority));
	}

	const deleteItemHandler = (event) => {
		const targetItemId = Number(event.target.id);
		items = items.filter(item => item.id === targetItemId ? false : true);
		const currentPriority = document.getElementById("new-priority").innerHTML;
		filterHandler(currentPriority);
	}

	return (
		<div className="App">
			<Nav links={["Home", "Contact", "Login"]} brandName="todo" />
			<AddNewItem addItem={addItemHandler} filter={filterHandler}/>
			<Grid items={todos} deleteItem={deleteItemHandler}/>
			<footer>
				<p className="footer-text"> © AHMED KHALED </p>
			</footer>
		</div>
	);
};

export default App;
