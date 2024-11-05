import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;
	// component styles
	const styles = {
		nav: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			margin: "0 1rem",
		},
		ul: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			alignContent: "center",
			columnGap: "2rem",
			listStyle: "none",
			padding: "0",
		},
		li: {
			fontSize: "1.25rem",
			fontWeight: "300",
			color: "var(--dark-color)",
			cursor: "pointer",
      textDecoration: "none",
		},
    navLink: {
      textDecoration: "none",
      textUnderlineOffset: "0.25rem",
      color: "var(--dark-color)",
      padding: "0.5rem",
      fontWeight: "300",
      cursor: "pointer",
      transition: "color 0.s",
    }
	}
  styles.activeNavLink = { ...styles.navLink, fontWeight: "500", color: "var(--space-blue)" };

	return (
		<nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={currentPage === '/' ? styles.activeNavLink : styles.navLink}>Home</Link>
        </li>
        <li style={styles.li}>
          <Link to="/about" style={currentPage === '/about' ? styles.activeNavLink : styles.navLink}>About</Link>
        </li>
        <li style={styles.li}>
          <Link to="/portfolio" style={currentPage === '/portfolio' ? styles.activeNavLink : styles.navLink}>Portfolio</Link>
        </li>
        <li style={styles.li}>
          <Link to="/resume" style={currentPage === '/resume' ? styles.activeNavLink : styles.navLink}>Resume</Link>
        </li>
        <li style={styles.li}>
          <Link to="/contact" style={currentPage === '/contact' ? styles.activeNavLink : styles.navLink}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
