import EventCard from "../../components/EventCard/eventCard.component"
import { useEffect, useState } from "react"
import axios from "axios"

function Home() {
    const [eventDetail, setEventDetail] = useState([])

    const getEvents = async () => {
        try{
            const events = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/event/allEvents`);
            setEventDetail(events.data.data)
        }
        catch(error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getEvents()
    },[])

    return (
        eventDetail.length > 0 ? eventDetail.map((detail) => {
            return(
                // console.log(detail)
                <EventCard data={detail} key={detail._id} />
            )
        })
        :
        <h1>No Events available</h1>
    )
}

export default Home