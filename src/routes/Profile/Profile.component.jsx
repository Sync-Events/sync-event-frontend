import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
// import EventCard from './../../components/EventCard/eventCard.component';
import RegisteredCard from '../../components/RegisteredCard/RegisteredCard.component';

import "./profile.css";
import EventCard from '../../components/EventCard/eventCard.component';


export default function Profile() {

    const [userDetails, setUserDetails] = useState(null);
    const [events, setEvents] = useState([]);

    const [userWallet, setUserWallet] = useState(null);

    const loadUserData = async () => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/auth/getUser/${userData.id}`);
        setUserDetails(response.data.data);

        if (response.data.data.userType === "Student") {
            const events = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/event/registredByUser`, {
                headers: { Authorization: `Bearer ${userData.token}` }
            });
            setEvents(events.data.data);
        } else {
            const events = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/event/ofsociety/${userData.id}`);
            setEvents(events.data.data);
        }
        try {
            const wallet = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/wallet/getWallet`, {
                headers: { Authorization: `Bearer ${userData.token}` }
            });
            setUserWallet(wallet.data.data);
        } catch (error) {
            setUserWallet(null);
        }


    }

    useEffect(() => {
        loadUserData();
    }, [])


    const createCryptoWallet = async () => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        alert("Wallet Creating")

        try {
            console.log(`${process.env.REACT_APP_BASE_API_URL}/wallet/createWallet`);
            console.log(userData.token);
            const wallet = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/wallet/createWallet`, {headers: { Authorization: `Bearer ${userData.token}` }});

            console.log(wallet);
            alert("Wallet Created Succefully")
            window.location.reload();
        } catch (error) {
            // window.location.reload();
        }

    }


    const connectMetamask = async () => {
        alert("Soon...")
    }


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
            {userWallet ?
                <div className="profile-box mb-5">
                    <div className="profile-info mt-3">
                        <h4 className='text-muted'>Wallet Public Address: {userWallet.publicKey}</h4>

                    </div>
                </div>
                :
                <div className="profile-box mb-5">
                    <div className="profile-info mt-3">
                        <button type="button" class="btn btn-primary" onClick={createCryptoWallet}>Create New Crypto</button>
                        <p>Or</p>
                        <button type="button" class="btn btn-primary" onClick={connectMetamask} >Connect Metamask</button>
                    </div>
                </div>
            }
            <div className="events">
                <h4>
                    {userDetails && userDetails.userType === "Student" ? "Registrated Events" : "Published Events"}
                </h4>
                <div className="eventsList">
                    {events.length > 0 ? events.map((event, key) => {
                        return (
                            // <RegisteredCard data={event} key={key} />
                            <EventCard data={event} key={key} />
                        )
                    })
                        :
                        <h4>No events</h4>
                    }
                </div>
            </div>
        </div>
    )
}
