function Signup(){
    return(
        <>
        <h1 class="login-heading">Sign up to SK Garments & <br /> 
    Unlock Exclusive Offers</h1>

      <div className="signin-wrapper">
  <div className="form-container">
    <p className="title">Create Account</p>
    <form className="form">
         <input type="alphabet" className="input" placeholder="FirstName" />    
      <input type="email" className="input" placeholder="Email" />
      <input type="password" className="input" placeholder="Password" />
          <input type="confirmpassword" className="input" placeholder="Confirm Password" />

      <p className="page-link">
        <span className="page-link-label">Forgot Password?</span>
      </p>
      <button className="form-btn">Create Account </button>
    </form>
    <p className="sign-up-label">
     <a href="/signin"> Do you have an account?<span className="sign-up-link">Sign in</span></a>
    </p>
  </div>
  </div>
        </>
    )
}

export default Signup;