import PropTypes from "prop-types"

const Project = ({ title, imageURL, deployedLink, repoLink }) => {
	// component styles
	const styles = {
		section: {
			display: "flex",
			flexDirection: "column",
			padding: "2rem",
			borderRadius: "5px",
			boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
			maxWidth: "600px",
			minWidth: "300px",
			margin: "1rem",
		},
    image: {
      width: "100%",
      borderRadius: "5px",
      marginBottom: "1rem",
    },
		h2: {
			fontSize: "2rem",
		},
		link: {
			textDecoration: "underline",
			textDecorationColor: "var(--iris-blue)",
			textUnderlineOffset: "0.5rem",
			textDecorationThickness: "2px",
			padding: ".5rem",
			width: "fit-content",
			cursor: "pointer",
		},
	}

	return (
		<section style={styles.section}>
      <img style={styles.image} src={imageURL} alt={title} />
			<h2 style={styles.h2}>{title}</h2>
			<a style={styles.link} target="_blank" href={deployedLink}>
				View App
			</a>
			<a style={styles.link} target="_blank" href={repoLink}>
				Review Code
			</a>
		</section>
	)
}

Project.propTypes = {
	title: PropTypes.string.isRequired,
	imageURL: PropTypes.string,
	deployedLink: PropTypes.string,
	repoLink: PropTypes.string,
}

export default Project
