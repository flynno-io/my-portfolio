import photo from '../assets/images/luke-flynn-headshot.jpg'
import { Link } from 'react-router-dom'

const Home = () => {

  // component styles
  const styles = {
    photo: {
      borderRadius: '50%',
      width: '150px',
      height: '150px',
      margin: '0 auto',
      display: 'block',
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
      marginBottom: '1rem',
    },
    h1: {
      fontFamily: 'var(--title-font)',
      fontSize: '4rem',
      fontWeight: '800',
      textAlign: 'center',
      color: 'var(--iris-blue)',
      margin: '0 1rem',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: '400',
      margin: '0 1rem',
    },
    ctaContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2rem',
    },
    ctaButton: {
      backgroundColor: 'var(--iris-blue)',
      color: 'white',
      padding: '.5rem 2rem',
      border: 'none',
      borderRadius: '5px',
      margin: '0 1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  }

  return (
    <section style={styles.section}>
      <img style={styles.photo} src={photo} alt="Luke Flynn headshot" />
      <h1 style={styles.h1}>Luke Flynn</h1>
      <h2 style={styles.h2}>Full Stack Developer. Designer. Father.</h2>
      <div style={styles.ctaContainer}>
        <Link to="/portfolio">
          <button style={styles.ctaButton}>View Portfolio</button>
        </Link>
        <Link to="/resume">
        <button style={styles.ctaButton}>View Resume</button>
      </Link>
      </div>

    </section>
  )
}

export default Home