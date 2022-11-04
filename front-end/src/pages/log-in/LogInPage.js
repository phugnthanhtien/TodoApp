import './LogIn.css'
import FormInput from '../../components/form/FormInput'


function LogInPage() {
  return (
    <div className="login-page">
      <div className="form">
          <h1>Log in</h1>
          <FormInput 
            id="user-email" 
            type="email" 
            placeholder="Your email"
          />
          <FormInput
            id="user-password" 
            type="password" 
            placeholder="Your password"
          />
          <div className="form__item-signup">
            <div className="remember">
              <input id="user-remember" type="checkbox"/> 
              <label for="user-remember">Remember me</label>
            </div>
              <a href="signup.html">Sign up</a>
          </div>

          <button id="submit-button" onclick="onLogInForm()">Log In</button>
      </div>
    </div>
  )
}

export default LogInPage