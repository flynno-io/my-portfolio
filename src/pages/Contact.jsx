import { useState } from "react"

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})

  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [messageError, setMessageError] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

	const handleChange = (e) => {
    setIsDisabled(false)
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

  const handleBlur = (e) => {
    if (e.target.name === 'name') {
      if (e.target.value.length < 3) {
        setNameError('Required')
      } else {
        setNameError('')
      }
    }

    if (e.target.name === 'email') {
      if (!e.target.value.includes('@')) {
        setEmailError('Please enter a valid email')
      } else {
        setEmailError('')
      }
    }

    if (e.target.name === 'message') {
      if (e.target.value.length < 10) {
        setMessageError('At least 10 characters required')
      } else {
        setMessageError('')
      }
    }
  }

	// component styles
	const styles = {
		section: {
			padding: "2rem",
			backgroundColor: "var(--light-gray)",
			borderRadius: "5px",
			boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
			maxWidth: "600px",
			minWidth: "300px",
		},
		h1: {
			fontSize: "2rem",
			textAlign: "center",
			color: "var(--iris-blue)",
			margin: "0 1rem 1rem",
		},
		form: {
			display: "flex",
			flexDirection: "column",
			gap: ".5rem",
		},
		label: {
			fontSize: "1.15rem",
			color: "var(--iris-blue)",
		},
		input: {
			padding: ".5rem",
			borderRadius: "5px",
			border: "1px solid var(--iris-blue)",
			fontSize: "1rem",
		},
		message: {
			height: "100px",
			padding: ".5rem",
      fontSize: "1rem",
		},
		button: {
			backgroundColor: "var(--iris-blue)",
			color: "white",
			padding: ".5rem 2rem",
			border: "none",
			borderRadius: "5px",
			margin: "1rem 0",
			cursor: "pointer",
			transition: "background-color 0.3s",
		},
    error: {
      color: 'red',
      fontSize: '0.8rem',
      fontStyle: 'italic',
    },
    disabled: {
      backgroundColor: 'lightgray',
      cursor: 'not-allowed',
    }
	}

	return (
		<section style={styles.section}>
			<h1 style={styles.h1}>{`Let's talk`}</h1>
			<form style={styles.form}>
				<label style={styles.label} htmlFor="name">
					Name
				</label>
				<input style={styles.input} type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} />
        <span style={ nameError ? styles.error : {} }>{nameError}</span>

				<label style={styles.label} htmlFor="email">
					Email
				</label>
				<input style={styles.input} type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
        <span style={ emailError ? styles.error : {} }>{emailError}</span>

				<label style={styles.label} htmlFor="message">
					Message
				</label>
				<textarea style={styles.message} id="message" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} />
        <span style={ messageError ? styles.error : {} }>{messageError}</span>

				<button style={ isDisabled || nameError || emailError || messageError ? {...styles.button, ...styles.disabled } : styles.button } type="submit">
					Send
				</button>
			</form>
		</section>
	)
}

export default Contact
