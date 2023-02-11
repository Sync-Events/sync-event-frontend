import './eventCard.styles.css'
import venueSvg from '../../assets/venue.svg'
import dateSvg from '../../assets/date.svg'
import timeSvg from '../../assets/time.svg'
import { useEffect, useState } from 'react'

const eventDetails = {
    eventBanner: 'https://picsum.photos/200',
    eventName: 'Tech Talks',
    societyName: 'TCP',
    description: 'It is series of seminars and workshops',
    eventVenue: 'KMC, auditorium',
    eventDate: '02/12/2023',
    eventTime: '12PM',
    website: 'link.com',
    instagram: 'instagram.com',
    linkedin: 'linkedin.com',
    twitter: 'twitter.com'
}

function EventCard() {
    const [eventDetail, setEventDetail] = useState({})
    useEffect(() => {
        setEventDetail(eventDetails)
        console.log(eventDetail)
    }, [eventDetail])
    return(
        <div className="card card-width">
            <img src={eventDetail.eventBanner} className="card-img-top banner" alt="event-banner"/>
            <div className="card-body">
                <h5 className="card-title">{eventDetail.eventName}</h5>
                <p className="card-text">{eventDetail.description}</p>
            </div>
            <div className="container d-flex flex-column">
                <div className="">{eventDetail.societyName}</div>
                <div className="d-flex flex-row justify-content-evenly">
                    <div>
                        <img className='svg' src={venueSvg} alt="" />
                        <p>{eventDetail.eventVenue}</p>
                    </div>
                    <div>
                        <img className='svg' src={dateSvg} alt="" />
                        <p>{eventDetail.eventDate}</p>
                    </div>
                    <div>
                        <img className='svg' src={timeSvg} alt="" />
                        <p>{eventDetail.eventTime}</p>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <button className="btn btn-outline-success" type="">Learn More</button>
            </div>
            <div className='d-flex justify-content-evenly'>
                <a href={eventDetail.website}>website</a>
                <a href={eventDetail.instagram}>instagram</a>
                <a href={eventDetail.linkedin}>linkedin</a>
                <a href={eventDetail.twitterx}>twitter</a>
            </div>
        </div>
)
}

export default EventCard