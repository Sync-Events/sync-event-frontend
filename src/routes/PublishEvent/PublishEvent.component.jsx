import { useState, useEffect } from 'react'
import '../SignIn//signIn.styles.css'
import './publishEvent.styles.css'
import axios from 'axios'

import { toast } from 'react-toastify';


function PublishEvent() {

    const [formData, setFormData] = useState({
        eventName: "",
        venue: "",
        eventDescription: "",
        banner: "",
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
        event.preventDefault();

        const userData = JSON.parse(localStorage.getItem("userData"));
        const eventDates = {start: event.target.eventDatesStart.value, end: event.target.eventDatesEnd.value};
        const registrationDates = {start:event.target.registrationDatesStart.value, end: event.target.registrationDatesEnd.value};
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/event/publish`, {...formData,eventDates,registrationDates},{
                headers: { Authorization: `Bearer ${userData.token}`}});
            toast.success("Event Registraed Succefully", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            console.log(response);

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
                        <input type="text" name="eventDatesStart"  required />
                        <label htmlFor="eventDates.start">Start Date</label>
                    </div>
                    <div className="field">
                        <input type="text" name="eventDatesEnd" required />
                        <label htmlFor="eventDates.end">End Date</label>
                    </div>
                    <div className="field">
                        <input type="text" name="registrationDatesStart"  required />
                        <label htmlFor="registrationDatesStart">Registration Start</label>
                    </div>
                    <div className="field">
                        <input type="text" name="registrationDatesEnd" required />
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

