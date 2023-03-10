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
        try {
            const _user = JSON.parse(localStorage.getItem("userData"));

            const registerIn = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/event/registerIn/${eventId}`, {
                headers: { Authorization: `Bearer ${_user.token}` }});
            window.location.reload();

        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }


    }

    return (
        (eventDetail &&
            <div className='mt-3'>
                <h1>{eventDetail.eventName}</h1>
                <img src={eventDetail.banner} alt="" style={{width: '20rem'}}/>

                <div className='mt-3'>
                    <h2 className='event-time'>Registration Start from {eventDetail.registrationDates.start} till {eventDetail.registrationDates.end}</h2>

                    <h2 className='event-time'>Event Start from {eventDetail.registrationDates.start} till {eventDetail.registrationDates.end}</h2>
                </div>

                <p className='text-muted'>{eventDetail.eventDescription}</p>


                {userData &&
                String(userData.id) !== String(eventDetail._id) && !hasUserRegistared &&
                    <button onClick={registerInEvent} className="btn btn-success" type="">Register In this Event</button>
                }

            </div>)
    )
}
