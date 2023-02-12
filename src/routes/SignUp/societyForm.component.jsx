import './signUp.styles.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


function SocietyForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
            "email":"",
            "image":"",
            "password":"",
            "fullName":"",
            "collegeName":"",
            "userType":"Society"
    }) 

    const handleChange = (event) => {
 
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        // console.dir(event.target)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const convenerDetail = {
            "name":event.target.convenerName.value,
            "email":event.target.convenerEmail.value
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/auth/register`, {...formData,convenerDetail})
            console.log(response);

            toast.success("User registered succefully. Please login now", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            navigate("/sign-in");

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
                <input type="text" name="image" onChange={handleChange} required/>
                <label>Image link</label>
            </div>
            <div className="fieldnew">
                <input type="text" name="email" onChange={handleChange} required/>
                <label>Email Address</label>
            </div>
            <div className="fieldnew">
                <input type="text" name="convenerName" onChange={handleChange} required/>
                <label>Convener Name</label>
            </div>
            <div className="fieldnew">
                <input type="text" name="convenerEmail" onChange={handleChange} required/>
                <label>Convener Email</label>
            </div>
            <div className="fieldnew">
                <input type="password" name="password" onChange={handleChange} required/>
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