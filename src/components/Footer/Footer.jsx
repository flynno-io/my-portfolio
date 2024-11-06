import { Link } from "react-router-dom"

const Footer = () => {
	// component styles
	const styles = {
		footer: {
			display: "flex",
			justifyContent: "left",
			height: "20vh",
			backgroundColor: "var(--tertiary-color)",
			color: "var(--light-color)",
			padding: "1rem",
		},
		ul: {
			display: "flex",
			listStyle: "none",
			margin: "0",
		},
		li: {
			margin: "0 1rem 0 0",
			cursor: "pointer",
		},
		copyright: {
			marginLeft: "auto",
			fontSize: "0.75rem",
		},
	}

	return (
		<footer style={styles.footer}>
			<ul style={styles.ul}>
				<li style={styles.li}>
					<a href="https://www.linkedin.com/in/flynno/">LinkedIn</a>
				</li>
				<li style={styles.li}>
					<a href="https://github.com/flynno-io">Github</a>
				</li>
				<li style={styles.li}>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
			<div style={styles.copyright}>All Rights Reserved © 2024</div>
		</footer>
	)
}

export default Footer
