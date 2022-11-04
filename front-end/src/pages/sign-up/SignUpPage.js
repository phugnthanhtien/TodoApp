import './SignUp.css'
import FormInput from '../../components/form/FormInput'

function SignUpPage() {
  return (
    <div class="signup-page">
      <div class="form">
          <h1>Sign up</h1>
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
          <div class="form__item-login">
              <a href="login.html">Log in</a>
          </div>
          <button id="sign-up-button" onclick="onSignUpForm()">Create An Account</button>
      </div>
    </div>
  )
}

export default SignUpPage