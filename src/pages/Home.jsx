const Home = () => {

  // component styles
  const styles = {
    h1: {
      fontFamily: 'var(--title-font)',
      fontSize: '5rem',
      fontWeight: '800',
      color: 'var(--iris-blue)',
      margin: '0 1rem',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: '400',
      margin: '0 1rem',
    },
  }

  return (
    <section style={styles.section}>
      <h1 style={styles.h1}>Luke Flynn</h1>
      <h2 style={styles.h2}>Full Stack Developer</h2>
      <h2 style={styles.h2}>Designer</h2>
      <h2 style={styles.h2}>Father</h2>
    </section>
  )
}

export default Home