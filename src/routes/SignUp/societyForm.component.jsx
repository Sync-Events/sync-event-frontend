import './signUp.styles.css'
import { useState } from 'react'
import axios from 'axios'


function SocietyForm() {

    const [formData, setFormData] = useState({
            "email":"",
            "password":"",
            "fullName":"",
            "collegeName":"",
            "convenerDetail": {"name":"", "email":""},
            "userType":"Society"
    }) 

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
        // console.dir(event.target)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/auth/register`, formData)
            console.log(response)
        }
        catch(error) {
            console.log(error)
        }
    } 
    return(
        <form onSubmit={handleSubmit}>
            <div className="fieldnew">
                <input type="text" name="fullName" onChange={handleChange} required/>
                <label>Name</label>
            </div>
            <div className="fieldnew">
                <input type="text" name="collegeName" onChange={handleChange} required/>
                <label>College Name</label>
            </div>
            <div className="fieldnew">
                <input type="text" name="email" onChange={handleChange} required/>
                <label>Email Address</label>
            </div>
            <div className="fieldnew">
                <input type="text" name="convenerDetail.name" onChange={handleChange} required/>
                <label>Convener Name</label>
            </div>
            <div className="fieldnew">
                <input type="text" name="convenerDetail.email" onChange={handleChange} required/>
                <label>Convener Email</label>
            </div>
            {/* <div className="fieldnew">
                <input type="text" required/>
                <label>Social Links</label>
            </div>
            <div className="fieldnew">
                <input type="text" required/>
                <label>Profile Photo Url</label>
            </div> */}
            <div className="fieldnew">
                <input type="password" name="password" required/>
                <label>Password</label>
            </div>
            {/* <div className="fieldnew">
                <label>Bio</label>
                <textarea type="text" rows={4} cols={30} required></textarea>
            </div> */}
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