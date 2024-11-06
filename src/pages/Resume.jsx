const Resume = () => {

  // component styles
  const styles = {
    section: {
      display: "flex",
      flexDirection: "column",
      padding: "2rem",
      maxWidth: "600px",
      minWidth: "300px",
      margin: "1rem",
    },
    h1: {
			fontSize: "2rem",
		},
    h2: {
      fontSize: "1.25rem",
    },
    ul: {
      listStyle: "none",
      padding: "0",
    },
    li: {
      margin: "0.5rem 0 0.5rem 1rem",
    },
    link: {
      textDecoration: "underline",
      textDecorationColor: "var(--iris-blue)",
      color: "var(--iris-blue)",
      textUnderlineOffset: "0.25rem",
      textDecorationThickness: "2px",
      width: "fit-content",
      cursor: "pointer",
    }
  }

  return (
    <>
      <h1>Resume</h1>
      <section style={styles.section}>
        <h2>Resume</h2>
        <p>Download and review my resume <a style={styles.link} href="/resume-luke-flynn.pdf" download>here</a></p>
        <br/>
        <h2>Front-End Proficiencies</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>HTML</li>
          <li style={styles.li}>CSS</li>
          <li style={styles.li}>JavaScript</li>
          <li style={styles.li}>responsive design</li>
          <li style={styles.li}>React</li>
          <li style={styles.li}>Bootstrap</li>
        </ul>
        <h2>Back-End Proficiencies</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>APIs</li>
          <li style={styles.li}>Node</li>
          <li style={styles.li}>Express</li>
          <li style={styles.li}>MySQL, Sequelize</li>
          <li style={styles.li}>MongoDB, Mongoose</li>
          <li style={styles.li}>REST</li>
        </ul>
      </section>
    </>
  )
}

export default Resume