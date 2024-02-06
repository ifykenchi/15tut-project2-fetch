const Header = ({ setPath }) => {
	return (
		// className={buttonText === reqType ? "selected" : null}
		<header>
			<button autoFocus onClick={() => setPath("users")} type='button'>
				users
			</button>
			<button onClick={() => setPath("posts")} type='button'>
				posts
			</button>
			<button onClick={() => setPath("comments")} type='button'>
				comments
			</button>
		</header>
	);
};

export default Header;
