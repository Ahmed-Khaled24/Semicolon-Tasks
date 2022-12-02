import "./App.css";
import Nav from "./components/nav.component";
import AddNewItem from "./components/new-item.component";
import Grid from "./components/grid.component";
import { useState } from "react";

const App = () => {
	let items = [
		{
			title: "Study",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
			priority: "High",
		},
		{
			title: "Gym",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
			priority: "Medium",
		},
		{
			title: "Sleep",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
			priority: "High",
		},
		{
			title: "Eat",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
			priority: "High",
		},
		{
			title: "Eat",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
			priority: "High",
		},
		{
			title: "Eat",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
			priority: "High",
		},
		{
			title: "Eat",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
			priority: "High",
		},
		{
			title: "Eat",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
			priority: "High",
		},
		{
			title: "Eat",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
			priority: "High",
		},
	];
	const [todos, setTodos] = useState(items);

	const addItemHandler = () => {
		const title = document.getElementById("new-title").value;
		const priority = document.getElementById("new-priority").innerHTML;
		setTodos([
			...todos,
			{
				title,
				priority,
				content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
			},
		]);
	};

	return (
		<div className="App">
			<Nav links={["Home", "Login", "Logout"]} brandName="todo" />
			<AddNewItem addItem={addItemHandler} />
			<Grid items={todos} />
			<footer>
				<p className="footer-text"> © AHMED KHALED </p>
			</footer>
		</div>
	);
};

export default App;
