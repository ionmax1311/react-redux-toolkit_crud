import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./redux/users";

function App() {
	const dispatch = useDispatch();
	const userList = useSelector((state) => state.users.value);

	const [name, setName] = useState();
	const [username, setUserName] = useState();
	const [newUsername, setNewUserName] = useState();

	return (
		<div className='App'>
			<div className='addUser'>
				<input
					type='text'
					placeholder='Name...'
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Username...'
					onChange={(e) => setUserName(e.target.value)}
				/>
				<button
					onClick={() =>
						dispatch(addUser({ id: new Date(), name, username }))
					}>
					Add User
				</button>
			</div>
			<div className='displayUsers'>
				{userList.map((user) => {
					return (
						<div key={user.id}>
							<h2>{user.name}</h2>
							<h2>{user.username}</h2>
							<input
								type='text'
								placeholder='NEW Username...'
								onChange={(e) => setNewUserName(e.target.value)}
							/>
							<button
								onClick={() =>
									dispatch(
										updateUsername({
											id: user.id,
											username: newUsername,
										}),
									)
								}>
								Update Username
							</button>
							<button
								onClick={() => dispatch(deleteUser(user.id))}>
								Delete User
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
