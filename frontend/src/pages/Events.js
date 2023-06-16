import { Suspense } from 'react';
import { useLoaderData, json, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';

function Events() {
  const {events} = useLoaderData();

  // if(data.error) return <p>{data.message}</p>
  // const eventsList = data.events; 

  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={events}>
        {(eventsList) => {
            return  <EventsList events={eventsList} />
        }}
      </Await>
    </Suspense>
  );
}

export default Events;

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

export const loader = () => {
  return {
    events: getEvents()
  }
}
