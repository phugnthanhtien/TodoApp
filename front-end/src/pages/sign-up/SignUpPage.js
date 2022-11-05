import styles from './SignUp.module.css'
import FormInput from '../../components/form/FormInput'

function SignUpPage() {
  return (
    <div class={styles.signUpPage}>
      <div class={styles.form}>
          <h1 className={styles.formTitle}>Sign up</h1>
          <FormInput 
            id="new-name" 
            type="text" 
            placeholder="Fullname"
          />
          <FormInput 
            id="new-email" 
            type="email" 
            placeholder="Email"
          />
          <FormInput
            id="new-password" 
            type="password" 
            placeholder="Password"
          />
          <div class={styles.formHelper}>
              <a>Log in</a>
          </div>
          <button className={styles.signUpButton}>Sign up</button>
      </div>
    </div>
  )
}

export default SignUpPage