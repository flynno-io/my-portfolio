import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  // component styles
  const styles = {
    app: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      background: "liner-gradient(180deg, #f5f5f5, #f5f5f5)",
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
    <div style={styles.app}>
      <Header />
      <main style={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
