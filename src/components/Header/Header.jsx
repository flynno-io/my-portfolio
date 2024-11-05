import Nav from "../Nav/Nav"

const Header = () => {
	// component styles
	const styles = {
		header: {
			display: "flex",
			padding: ".25rem",
			justifyContent: "space-between",
			background:
				"linear-gradient(90deg, rgba(0, 57, 82,1) 10%, rgba(0,0,0,0) 100%)",
		},
		h1: {
			fontSize: "2rem",
			fontWeight: "800",
			color: "var(--light-color)",
			margin: "0 1rem",
		},
	}

	return (
		<header style={styles.header}>
			<div style={styles.h1}>Flynno</div>
			<Nav />
		</header>
	)
}

export default Header
