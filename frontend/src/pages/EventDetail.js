import { Suspense } from "react";
import { useParams, 
         json, 
         useRouteLoaderData, 
         redirect, 
         Await, 
         defer } from "react-router-dom";
import EventItem from '../components/EventItem';
import EventsList  from '../components/EventsList';

const EventDetail = () => {
    // const id = useParams();
    const {event, events} = useRouteLoaderData('event-detail'); // this is the function that is getting the data.

    return (
        <>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={event}>
                {(singleEvent) => {
                    return <EventItem event={singleEvent} />
                } }
            </Await>
        </Suspense>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={events}>
                {(eventsList) => <EventsList events={eventsList} />}
            </Await>
        </Suspense>
        </>
    );
}

export default EventDetail;

const getEvent = async (id) => { 
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
      // setError('Fetching events failed.');
      // return {error:  true, message: 'couldn\'t fetch the data'}
      // throw new Response(JSON.stringify({message: 'could not fetch events'}), {
      //   status: 500
      // });
      throw json({message: 'could not fetch events'}, {
        status: 500
      });
    } else {
      const resData = await response.json();
      return resData.event;
    }
}

const getEvents = async () => {

    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      // setError('Fetching events failed.');
      // return {error:  true, message: 'couldn\'t fetch the data'}
      // throw new Response(JSON.stringify({message: 'could not fetch events'}), {
      //   status: 500
      // });
      throw json({message: 'could not fetch events'}, {
        status: 500
      });
    } else {
      const resData = await response.json();
      return resData.events;
    }
}

export const loader = async ({request, params}) => {
    const id = params.eventId;

    return defer({
        event: await getEvent(id),
        events: getEvents()
    });
} 

export const action = async ({params, request}) => {
    const eventId = params.eventId;
    const response = await fetch(`http://localhost:8080/events/${eventId}`, {
        method: request.method
    });

    if(!response.ok) {
        throw json({message: `couldn't delete`}, {
            status: 500
        });
    }

    return redirect('/events');
}