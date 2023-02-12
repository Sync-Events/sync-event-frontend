import './eventCard.styles.css'
import venueSvg from '../../assets/venue.svg'
import dateSvg from '../../assets/date.svg'
// import timeSvg from '../../assets/time.svg'
import { Link } from 'react-router-dom';

    // const eventDetail = {
    //     banner: 'https://picsum.photos/200',
    //     eventName: 'Tech Talks',
    //     societyName: 'TCP',
    //     eventDescription: 'It is series of seminars and workshops',
    //     eventVenue: 'KMC, auditorium',
    //     eventDate: '02/12/2023',
    //     eventTime: '12PM',
    //     website: 'link.com',
    //     instagram: 'instagram.com',
    //     linkedin: 'linkedin.com',
    //     twitter: 'twitter.com'
    // }
// {banner, eventName, eventDescription, eventDates, contact, registrationDates, venue}

function EventCard({ data }) {

    // const [eventDetail, setEventDetail] = useState({})
    // useEffect(() => {
    //     const eventDetails = getEvents()
    //     setEventDetail(eventDetails)
    //     // console.log(eventDetail)
    // }, [])
    return (
        <div className="card card-width">
            <img src={data.banner} className="card-img-top banner" alt="event-banner" />
            <div className="card-body">
                <h5 className="card-title">{data.eventName}</h5>
                <p className="card-text">{data.eventDescription}</p>
            </div>
            <div className="container d-flex flex-column">
                <div className="">{ }</div>
                <div className="d-flex flex-row justify-content-evenly">
                    <div>
                        <img className='svg' src={venueSvg} alt="" />
                        <p>{data.venue}</p>
                    </div>
                    <div>
                        <img className='svg' src={dateSvg} alt="" />
                        <p>{data.eventDates.start}</p>
                    </div>
                    {/* <div>
                        <img className='svg' src={timeSvg} alt="" />
                        <p>{}</p>
                    </div> */}
                </div>
            </div>
            <div className="card-body">
                <Link to={`/eventDetail/${data._id}`}>
                    <button className="btn btn-outline-success" type="">Learn More</button>
                </Link>
            </div>
            {/* <div className='d-flex justify-content-evenly'>
                <a href={data.contact[0].website}>website</a>
                <p>{data.contact[0].phoneNo}</p>
                <p>{data.contact[0].email}</p>
                <a href={"/"}>twitter</a>
            </div> */}
        </div>
    )
}

export default EventCard