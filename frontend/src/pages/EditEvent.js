
import { useParams } from 'react-router-dom';

const EditEvent = () => {
    const event = useParams();
    return (
        <>
            <h1>EditEvent page</h1>
            <p>this is {event.eventId} editing</p>
        </>
    );
}

export default EditEvent;