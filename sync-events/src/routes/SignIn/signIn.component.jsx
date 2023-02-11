import './signIn.styles.css'

function SignIn() {
    return(
        <div className="conatiner-main">
            <div className="wrapperme">
                <div className="titlenew">
                Login Form
                </div>
                <form action="#">
                <div className="field">
                    <input type="text" required/>
                    <label>Email Address</label>
                </div>
                <div className="field">
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <div className="contentnew">
                    <div className="checkbox">
                        <input type="checkbox" id="remember-me"/>
                        <label for="remember-me">Remember me</label>
                    </div>
                    <div className="pass-link">
                        <a href="/">Forgot password?</a>
                    </div>
                </div>
                <div className="field">
                    <input type="submit" value="Login"/>
                </div>
                <div className="signup-link">
                    Not a member? <a href="/">Signup now</a>
                </div>
                </form>
            </div>

        </div>
    )
}
export default SignIn
