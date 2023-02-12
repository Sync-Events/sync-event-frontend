import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
// import EventCard from './../../components/EventCard/eventCard.component';
import RegisteredCard from '../../components/RegisteredCard/RegisteredCard.component';

import "./profile.css";


export default function Profile() {
    
    // const eventDetail = [{
    //     banner: 'https://picsum.photos/200',
    //     eventName: 'Tech Talks',
    //     societyName: 'TCP',
    //     eventDescription: 'It is series of seminars and workshops',
    //     venue: 'KMC, auditorium',
    //     eventDates: {start: "02 July", end: "03 July"},
    //     // eventTimes: '12PM',
    //     contact: [{website:"www.", phoneNo:"9898", email: "vabs"}]
    // }]
    const eventDetail = [
        {
            id: "1",
            eventName: "Tech Talks",
            url: "/"
        }
    ]
    const [userDetails, setUserDetails] = useState(null);
    const [events, setEvents] = useState([]);

    const loadUserData = async () => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        console.log(userData);
        const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/auth/getUser/${userData.id}`);
        console.log(response.data.data);
        setUserDetails(response.data.data)

        // if (response.data.data.userType === "Student") {
        //     const events = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/event/registredByUser`, {
        //         headers: { Authorization: `Bearer ${userData.token}` }
        //     });

        //     console.log("events");
        //     console.log(events.data.data);
        //     setEvents(events.data.data);
        // } else {
        //     const events = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/event/of/${userData.id}`);

        //     console.log("events");
        //     console.log(events.data.data);
        //     setEvents(events.data.data);
        // }
    }

    useEffect(() => {
        setEvents(eventDetail)
        loadUserData();
    }, [])


    return (
        <div className='profile-container d-flex flex-column justify-content-center align-items-center mt-3'>
            <div className="profile-box mb-5">
                {userDetails && <img className='image-fluid' src={userDetails.image} alt="" />}
                <div className="profile-info mt-3">
                    <h4>Name: {userDetails?.fullName}</h4>
                    <div className='profile-details'>
                        {userDetails?.collegeYear && <h4 className='text-muted'>College Year: {userDetails.collegeYear}</h4>}
                        <h4 className='text-muted'>Email: {userDetails?.email}</h4>
                    </div>
                </div>
            </div>
            <div className="events">
                <h4>
                    {userDetails && userDetails.userType === "Student" ? "Registrated Events" : "Published Events"}
                </h4>
                <div className="eventsList">
                    {console.log(events)}
                    {events.length > 0 ? <RegisteredCard data={events} /> 
                        :
                        <h4>No events</h4>
                    }
                </div>
            </div>
        </div>
    )
}
