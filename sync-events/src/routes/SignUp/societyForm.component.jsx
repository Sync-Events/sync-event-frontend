import './signUp.styles.css'

function SocietyForm() {
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
                <input type="text" required/>
                <label>Email Address</label>
            </div>
            <div className="fieldnew">
                <input type="text" required/>
                <label>Convener Name</label>
            </div>
            <div className="fieldnew">
                <input type="text" required/>
                <label>Convener Email</label>
            </div>
            <div className="fieldnew">
                <input type="text" required/>
                <label>Social Links</label>
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
                <label>Bio</label>
                <textarea type="text" rows={4} cols={30} required></textarea>
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

export default SocietyForm