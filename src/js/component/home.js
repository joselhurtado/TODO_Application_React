import React from "react";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>TODO LIST</h1>
			<br />

			<div className="todoList">
				<input className="todoInput" placeholder="Add Task" />
			</div>
		</div>
	);
}
