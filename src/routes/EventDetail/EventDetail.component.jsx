import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

import "./eventDetails.css";


export default function EventDetail() {
    let { eventId } = useParams();

    const [eventDetail, setEventDetail] = useState(null);

    const [hasUserRegistared, setHasUserRegistared] = useState(false);

    const [userData, setUserData] = useState(null);

    const loadEventData = async () => {

        const _user = JSON.parse(localStorage.getItem("userData"))
        setUserData(_user);
        const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/event/getEventWithId/${eventId}`);
        console.log(response.data.data);
        setEventDetail(response.data.data);

        if (_user) {
            const _has = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/event/hasUserRegistered/${eventId}`, {
                headers: { Authorization: `Bearer ${_user.token}` }
            });

            setHasUserRegistared(_has.data.isRegistered);
        }
    }
    useEffect(() => {
        loadEventData();
    }, []);


    const registerInEvent = async () => {
        const areYou = window.confirm("are you sure you want to register?");        ;

    }

    return (
        (eventDetail &&
            <div>
                <h1>{eventDetail.eventName}</h1>
                <img src={eventDetail.banner} alt="" />

                <h2>Registration Start from {eventDetail.registrationDates.star} till {eventDetail.registrationDates.end}</h2>

                <h2>Event Start from {eventDetail.registrationDates.start} till {eventDetail.registrationDates.end}</h2>

                <p>{eventDetail.eventDescription}</p>


                {userData &&
                String(userData.id) !== String(eventDetail._id) && !hasUserRegistared &&
                    <button onClick={registerInEvent} className="btn btn-success" type="">Register In this Event</button>
                }

            </div>)
    )
}
