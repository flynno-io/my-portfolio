import Project from "../components/Project/Project"
import projectData from "../assets/data/projects"

const Portfolio = () => {
	// component styles
	const styles = {
		section: {
			margin: "2rem 3rem",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
		},
		h1: {
			fontSize: "2rem",
		},
	}

	const projects = projectData.map((project, index) => (
		<Project
			key={index}
			title={project.title}
			imageURL={project.imageURL}
			deployedLink={project.deployedLink}
      repoLink={project.repoLink}
		/>
	))

	return (
    <>
      <h1 style={styles.h1}>Portfolio</h1>
      <section style={styles.section}>
        {projects}
      </section>
    </>
	)
}

export default Portfolio
