import { register } from "../js/api";
import { getUserInfo, setUserInfo } from "../js/localStorage";
import { hideLoading, redirectUser, showLoading, showMessage } from "../js/utils";

const RegisterScreen = {
  after_render: () => {
    document.getElementById('register-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      showLoading();
      const data = await register({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      });
      hideLoading();
      if(data.error) {
        showMessage(data.error);
      } else {
        setUserInfo(data);
        redirectUser();
      }
    });
  },
  render: () => {
    if(getUserInfo().name) {
      redirectUser();
    }
   return `
    <div class="form-container">
      <form id="register-form">
        <ul class="form-items">
          <li>
            <h1>Create Account</h1>
          </li>
          <li>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required/>
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required/>
          </li>
          <li>
            <label for="password">Password</label>
            <input type="password" name="password" id="password"/>
          </li>
          <li>
            <label for="repassword">Re-enter password</label>
            <input type="password" name="repassword" id="repassword"/>
          </li>
          <li>
            <button type="submit" class="primary">Register</button>
          </li>
          <li>
            <div>Already have an account?
              <a href="/#/signin">Sign in</a>
            </div>
          </li>
        </ul>
      </form>
    </div>
   `
  }
}

export default RegisterScreen;