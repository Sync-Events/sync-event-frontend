import { useState } from 'react'
import './signIn.styles.css'

function SignIn() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    }) 

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
        console.dir(event.target)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    return(
        <div className="conatiner-main">
            <div className="wrapperme">
                <div className="titlenew">
                    Login Form
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <input type="text" name="email" onChange={handleChange} value={formData.email} id="email" required/>
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <div className="field">
                        <input type="password" name="password" onChange={handleChange} value={formData.password} id="password" required/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="contentnew">
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
