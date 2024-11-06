import Nav from "../Nav/Nav"

const Header = () => {
	// component styles
	const styles = {
		header: {
			display: "flex",
			padding: ".25rem",
			justifyContent: "space-between",
      marginBottom: "1rem",
		},
		h1: {
			fontSize: "2rem",
			fontWeight: "800",
			color: "var(--iris-blue)",
			margin: "0 1rem",
		},
	}

	return (
		<header style={styles.header}>
			<div style={styles.h1}>Luke Flynn</div>
			<Nav />
		</header>
	)
}

export default Header
