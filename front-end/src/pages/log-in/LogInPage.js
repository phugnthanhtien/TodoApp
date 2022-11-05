import styles from './login.module.css'
import FormInput from '../../components/form/FormInput'


function LogInPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.form}>
          <h1 className={styles.formTitle}>Login</h1>
          <FormInput 
            id="user-email" 
            type="email" 
            placeholder="Email"
          />
          <FormInput
            id="user-password" 
            type="password" 
            placeholder="Password"
          />
          <div className={styles.formHelper}>
            <div>
              <input type="checkbox"/> Remember me
            </div>
            <a>Sign up</a>
          </div>
          <button className={styles.loginButton}>Login</button>
      </div>
    </div>
  )
}

export default LogInPage