import { useState, useEffect } from 'react'
import './signIn.styles.css'
import axios from 'axios'

function SignIn() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    }) 

    const [user, setUser] = useState({
        token: '',
        userType: '',
        id: ''
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
        setUser(JSON.parse(storedUser));
        }
        // localStorage.setItem('user', JSON.stringify(user));
    }, []);


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/auth/login`, formData);
            console.log("response");
            console.log(response.data.data);

            setUser({
                token: response.data.data.token,
                userType: response.data.data.userType,
                id: response.data.data.id
            })
        }
        catch(error) {
            console.log(error)
        }
        // console.log(formData)
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
