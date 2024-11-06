import Project from "../components/Project/Project"

const Portfolio = () => {

  // component styles
  const styles = {
    section: {
      margin: "2rem",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    h1: {
      fontSize: "2rem",
    },
  }


  const projects = [
    {
      title: "Project 1",
      imageURL: "https://via.placeholder.com/600",
    },
    {
      title: "Project 2",
      imageURL: "https://via.placeholder.com/600",
    },
    {
      title: "Project 3",
      imageURL: "https://via.placeholder.com/600",
    },
  ].map((project, index) => (
    <Project key={index} title={project.title} />
  ))

  return (
    <section style={styles.section}>
      <div>
        {projects}
      </div>
    </section>
  )
}

export default Portfolio