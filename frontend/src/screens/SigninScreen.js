const SigninScreen = {
  after_render: () => {},
  render: () => {
   return `
    <div class="form-container">
      <form class="signin-form">
        <ul class="form-items">
          <li>
            <h1>Sign In</h1>
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
            <button type="submit" class="primary">Sign in</button>
          </li>
          <li>
            <div>New user?
              <a href="/#/register">Create your account</a>
            </div>
          </li>
        </ul>
      </form>
    </div>
   `
  }
}

export default SigninScreen;