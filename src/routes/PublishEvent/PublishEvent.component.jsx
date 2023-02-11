import { useState, useEffect } from 'react'
import '../SignIn//signIn.styles.css'
import './publishEvent.styles.css'
import axios from 'axios'

import { toast } from 'react-toastify';


function PublishEvent() {

    const [formData, setFormData] = useState({
        eventName: "",
        contact: {email: "", website: "", phoneNo: ""},
        venue: "",
        eventDescription: "",
        eventDates: {start: "", end: ""},
        banner: "",
        registrationDates: {start:"", end: ""}
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
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/auth/login`, formData);
            console.log("response");
            console.log(response.data.data);
            toast.success("User logined in succefully", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            console.log({
                token: response.data.data.token,
                userType: response.data.data.userType,
                id: response.data.data.id
            });
            localStorage.setItem('user', {
                token: response.data.data.token,
                userType: response.data.data.userType,
                id: response.data.data.id
            });
            window.location.href="/"
        }
        catch (error) {
            console.log(error)
        }
        // console.log(formData)
    }

    return (
        <div className="conatiner-main">
            <div className="wrapperme">
                <div className="titlenew">
                    Enter event details
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <input type="text" name="eventName" onChange={handleChange} value={formData.eventName} id="eventName" required />
                        <label htmlFor="eventName">Event Name</label>
                    </div>
                    <div className="field">
                        <input type="text" name="banner" onChange={handleChange} value={formData.banner} id="banner" required />
                        <label htmlFor="banner">Banner</label>
                    </div>
                    <div className="field">
                        <input type="text" name="venue" onChange={handleChange} value={formData.venue} id="venue" required />
                        <label htmlFor="venue">Venue</label>
                    </div>
                    <div className="field">
                        <input type="text" name="eventDescription" onChange={handleChange} value={formData.eventDescription} id="eventDescription" required />
                        <label htmlFor="eventDescription">Event Description</label>
                    </div>
                    <div className="field">
                        <input type="text" name="contact.email" onChange={handleChange} value={formData.contact.email} id="contact.email" required />
                        <label htmlFor="contact.email">Email</label>
                    </div>
                    <div className="field">
                        <input type="text" name="contact.website" onChange={handleChange} value={formData.website} id="contact.website" required />
                        <label htmlFor="contact.website">Website</label>
                    </div>
                    <div className="field">
                        <input type="text" name="contact.phoneNo" onChange={handleChange} value={formData.phoneNo} id="contact.phoneNo" required />
                        <label htmlFor="contact.phoneNo">Phone Number</label>
                    </div>
                    <div className="field">
                        <input type="date" name="eventDates.start" onChange={handleChange} value={formData.eventDates.start} id="eventDates.start" required />
                        <label htmlFor="eventDates.start">Start Date</label>
                    </div>
                    <div className="field">
                        <input type="date" name="eventDates.end" onChange={handleChange} value={formData.eventDates.end} id="eventDates.end" required />
                        <label htmlFor="eventDates.end">End Date</label>
                    </div>
                    <div className="field">
                        <input type="date" name="registrationDates.start" onChange={handleChange} value={formData.registrationDates.start} id="registrationDates.start" required />
                        <label htmlFor="registrationDates.start">Registration Date</label>
                    </div>
                    <div className="field">
                        <input type="date" name="registrationDates.end" onChange={handleChange} value={formData.registrationDates.end} id="registrationDates.end" required />
                        <label htmlFor="registrationDates.end">Registration End</label>
                    </div>

                    <div className="field">
                        <input type="submit" value="Publish" />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PublishEvent

