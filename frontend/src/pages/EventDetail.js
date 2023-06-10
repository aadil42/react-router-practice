import { useParams } from "react-router-dom";

const EventDetail = () => {
    const id = useParams();
    return (
        <>
            <h1>EventDetail page</h1>
            <p>this is the id {id.eventId}</p>
        </>
    );
}

export default EventDetail;