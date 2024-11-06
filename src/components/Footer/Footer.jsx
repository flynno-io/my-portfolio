const Footer = () => {

  // component styles
  const styles = {
    footer: {
      display: 'flex',
      justifyContent: 'left',
      height: '20vh',
      backgroundColor: 'var(--tertiary-color)',
      color: 'var(--light-color)',
      padding: '1rem',
    },
    ul: {
      display: 'flex',
      listStyle: 'none',
      margin: '0',
    },
    li: {
      margin: '0 1rem 0 0',
      cursor: 'pointer',
    },
    copyright: {
      marginLeft: 'auto',
      fontSize: "0.75rem",
    }
  }

  return (
    <footer style={styles.footer}>
      <ul style={styles.ul}> 
        <li style={styles.li}>LinkedIn</li>
        <li style={styles.li}>Github</li>
        <li style={styles.li}>Contact</li>
      </ul>
      <div style={styles.copyright}>All Rights Reserved © 2024</div>
    </footer>
  )
}

export default Footer