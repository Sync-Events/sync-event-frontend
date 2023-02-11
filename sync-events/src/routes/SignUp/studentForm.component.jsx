import './signUp.styles.css'

function StudentForm() {
    return(
        <form action="/">
            <div className="fieldnew">
                <input type="text" required/>
                <label>Name</label>
            </div>
            <div className="fieldnew">
                <input type="text" required/>
                <label>College Name</label>
            </div>
            <div className="fieldnew">
                <input type="number" required/>
                <label>College Year</label>
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
                <input type="text" required/>
                <label>Profile Photo Url</label>
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
    )
}

export default StudentForm