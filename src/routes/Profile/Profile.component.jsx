import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import EventCard from './../../components/EventCard/eventCard.component';

import "./profile.css";


export default function Profile() {

    const [userDetails, setUserDetails] = useState(null);
    const [events, setEvents] = useState([]);

    const loadUserData = async () => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        console.log(userData);
        const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/auth/getUser/${userData.id}`);
        console.log(response.data.data);
        setUserDetails(response.data.data)

        if (response.data.data.userType === "Student") {
            const events = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/event/registredByUser`, {
                headers: { Authorization: `Bearer ${userData.token}` }
            });

            console.log("events");
            console.log(events.data.data);
            setEvents(events.data.data);
        } else {
            const events = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/event/of/${userData.id}`);

            console.log("events");
            console.log(events.data.data);
            setEvents(events.data.data);
        }
    }

    useEffect(() => {
        loadUserData();
    }, [])


    return (
        <div className='profile-container'>
            <div className="profile-box">
                {userDetails && <img src={userDetails.image} alt="" />}
                <div className="profile-info">
                    <h4>Name: {userDetails?.fullName}</h4>
                    {userDetails?.collegeYear && <h4>collegeYear: {userDetails.collegeYear}</h4>}
                    <h4>email: {userDetails?.email}</h4>
                </div>
            </div>
            <div className="events">
                <h1>
                    {userDetails && userDetails.userType === "Student" ? "Registrated Events" : "Published Events"}
                </h1>
                <div className="eventsList">
                    {events.length > 0 ? events.map((event, key) => {
                        return (
                            <EventCard data={event} key={key} />
                        )
                    })
                        :
                        <h1>No events</h1>
                    }
                </div>
            </div>
        </div>
    )
}
