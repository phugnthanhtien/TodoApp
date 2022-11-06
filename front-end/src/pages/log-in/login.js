import React, { useState, useEffect } from 'react'
import styles from './login.module.css'
import axios from '../../API/axios'



function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleEmail(event) {
    setEmail(event.target.value)
  }

  function handlePassword(event) {
    setPassword(event.target.value)
  }

  async function handleSubmit() {
    // console.log({ email, password })

    try {
      const user = { email, password }
      const response = await axios.post('/users/login', user).then((response) => {
        console.log(response.data)
      })
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.form}>
        <h1 className={styles.formTitle}>Login</h1>
        <input
          className={styles.formInput}
          id="user-email" 
          type="email" 
          placeholder="Email"
          onChange={handleEmail}
        />
        <input
          className={styles.formInput}
          id="user-password" 
          type="password" 
          placeholder="Password"
          onChange={handlePassword}
        />
        <div className={styles.formHelper}>
          <div>
            <input type="checkbox"/> Remember me
          </div>
          <a>Sign up</a>
        </div>
        <button className={styles.loginButton} onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login

