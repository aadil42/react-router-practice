import { useParams, json, useRouteLoaderData } from "react-router-dom";
import EventItem from '../components/EventItem';

const EventDetail = () => {
    // const id = useParams();
    const data = useRouteLoaderData('event-detail'); // this is the function that is getting the data.
    return (
        <>
            <EventItem event={data.event} />
        </>
    );
}

export default EventDetail;

export const loader = async ({request, params}) => {
    const id = params.eventId;
    const response = await fetch(`http://localhost:8080/events/${id}`);

    if(!response.ok) {
        throw json({message: 'something went wrong'}, {
            status: 500
        });
    } else {
        return response;
    }
} 