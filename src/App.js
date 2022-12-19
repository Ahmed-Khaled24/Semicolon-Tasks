import "./App.css";
import Nav from "./components/nav/nav.component";
import AddNewItem from "./components/new-item/new-item.component";
import Grid from "./components/grid/grid.component";
import LoadingScreen from "./components/loading-screen/loading-screen.component";
import { useEffect, useState, Fragment } from "react";

const priorities = ["Low", "Medium", "High"];
let items;

const App = () => {
	const [todos, setTodos] = useState([]);
	const [refetch, setRefetch] = useState(0);
	const [priority, setPriority] = useState(0);
	const [title, setTitle] = useState("");

	useEffect(() => {
		fetch("http://localhost:3001/todos")
			.then((data) => data.json())
			.then((data) => {
				items = data;
				filterHandler(priorities[priority]);
			});
	}, [refetch]);

	function addItemHandler() {
		const newTodo = {
			title,
			priority: priorities[priority],
			id: Math.floor(Math.random() * 1e6),
			content: "Lorem Ipsum is simply dummy text of the",
		};

		fetch("http://localhost:3001/todos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTodo),
		}).then(() => {
			setRefetch(Math.random());
			filterHandler(priorities[priority]);
		});
	}

	function filterHandler(curPriority /* String */) {
		setTodos(items.filter((item) => item.priority === curPriority));
	}

	function deleteItemHandler(event) {
		const targetId = event.target.id;
		fetch(`http://localhost:3001/todos/${targetId}`, {
			method: "DELETE",
		}).then(() => {
			setRefetch(Math.random());
		});
	}

	return (
		<div className="App">
			<Nav
				links={["HOME", "CONTACT", "LOGIN", "ABOUT"]}
				brandName="todo"
			/>
			{items ? (
				<Fragment>
					<AddNewItem
						addItemHandler={addItemHandler}
						filterHandler={filterHandler}
						priority={priority}
						setPriority={setPriority}
						setTitle={setTitle}
					/>
					<Grid items={todos} deleteItemHandler={deleteItemHandler} />
				</Fragment>
			) : (
				<LoadingScreen />
			)}
			<footer>
				<p className="footer-text"> © AHMED KHALID </p>
			</footer>
		</div>
	);
};

export default App;
