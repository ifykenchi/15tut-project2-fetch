import Header from "./Header";
import Content from "./Content";
import Table from "./Table";
import { useState, useEffect } from "react";

function App() {
	const API_URL = "https://jsonplaceholder.typicode.com";

	const [items, setItems] = useState([]);
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [path, setPath] = useState("users");

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const reqUrl = `${API_URL}/${path}`;
				const response = await fetch(reqUrl);
				if (!response.ok) throw Error("Did not receive expected data");
				const listItems = await response.json();
				setItems(listItems);
				setFetchError(null);
			} catch (err) {
				setFetchError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		(async () => await fetchItems())();
	}, [path]);

	return (
		<div className='App'>
			<Header setPath={setPath} />
			<main>
				{isLoading && <p>Loading Items...</p>}
				{fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
				{!fetchError && !isLoading && <Table items={items} />}
				{/* {!fetchError && !isLoading && <Content items={items} />} */}
			</main>
		</div>
	);
}

export default App;
