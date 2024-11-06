import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Error = () => {

  // component styles
  const styles = {
    page: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      background: "liner-gradient(180deg, #f5f5f5, #f5f5f5)",
    },
    h1: {
      fontFamily: 'var(--title-font)',
      fontSize: '5rem',
      fontWeight: '800',
      color: 'var(--iris-blue)',
      margin: '0 1rem',
    },
    main: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }
  }
  return (
    <div style={styles.page}>
      <Header />
      <main style={styles.main}>
        <h1 style={styles.h1}>404</h1>
        <p>Page not found</p>
      </main>
      <Footer />
    </div>
  )
}

export default Error