import './signUp.styles.css'

function SignUp() {
    return(
        <>
        <div className="wrapperme">
        <div className="title">
        Signup Form
        <div className="btn-group btn-group-toggle ustubutton" data-toggle="buttons">
            <label className="btn btn-secondary active">
            <input type="radio" name="options" id="option1" autocomplete="off" checked/> as a student
            </label>
            <label className="btn btn-secondary">
            <input type="radio" name="options" id="option2" autocomplete="off"/>as a Society
            </label>
        
        </div>
        </div>
        <div className="checkuser">
            
        </div>
        <form action="/">


            <div className="fieldnew">
                <input type="text" required/>
                <label>Name</label>
            </div>
            <div className="fieldnew">
                <input type="text" required/>
                <label>Email Address</label>
            </div>
        <div className="fieldnew">
            <input type="text" required/>
            <label>Phone Number</label>
        </div>
        <div className="fieldnew">
            <input type="password" required/>
            <label>Password</label>
        </div>

        <div className="fieldnew">
            <input type="submit" value="Signup"/>
        </div>
        <div className="signup-link">
            Already a member? <a href="/">Login Now</a>
        </div>
        </form>
        </div>



        </>
    )
}

export default SignUp