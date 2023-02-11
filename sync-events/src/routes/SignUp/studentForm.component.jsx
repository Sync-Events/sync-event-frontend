import './signUp.styles.css'
import { useState } from 'react'
import axios from 'axios'

function StudentForm() {

    const [formData, setFormData] = useState({
            "email":"",
            "password":"",
            "fullName":"",
            "collegeName":"",
            "collegeYear":"",
            "course":"",
            "userType":"Student"
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
                <input type="number" name="collegeYear" onChange={handleChange} required/>
                <label>College Year</label>
            </div>
            <div className="fieldnew">
                <input type="text" name="email" onChange={handleChange} required/>
                <label>Email Address</label>
            </div>
            <div className="fieldnew">
                <input type="text" name="course" onChange={handleChange} required/>
                <label>Course</label>
            </div>
            {/* <div className="fieldnew">
                <input type="text" required/>
                <label>Profile Photo Url</label>
            </div> */}
            <div className="fieldnew">
                <input type="password" name="password" onChange={handleChange} required/>
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