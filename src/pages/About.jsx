 import photo from '../assets/images/luke-flynn-headshot.jpg'

const About = () => {

  // component styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '2rem 0',
    },
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
      textAlign: 'left',
      fontWeight: '800',
      color: 'var(--iris-blue)',
      margin: '0 1rem',
      maxWidth: '450px',
    },
    p: {
      textAlign: 'left',
      maxWidth: '450px',
      margin: '0 1rem',
      padding: '.25rem',
    },
  }
  
  return (
    <>
      <div style={styles.container}>
        <img style={styles.photo} src={photo} alt="Luke Flynn headshot" />
        <h1 style={styles.h1}>Luke Flynn</h1>
        <p style={styles.p}>
          I am a full-stack web developer with a background in marketing, economics, and international business. I am passionate about creating user-friendly applications that help businesses grow. I have experience with JavaScript, React, Node.js, Express, MongoDB, and more. I am a lifelong learner and am always looking for new ways to improve my skills.
        </p>
      </div>
    </>
  )
}

export default About