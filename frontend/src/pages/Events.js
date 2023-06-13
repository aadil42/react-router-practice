import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

function Events() {
  const data = useLoaderData();

  if(data.error) return <p>{data.message}</p>
  const eventsList = data.events; 

  return (
    <>
      <EventsList events={eventsList} />
    </>
  );
}

export default Events;

export const loader = async () => {
  const response = await fetch('http://localhost:8080/eventsfd');
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
    // const resData = await response.json();
    return response;
  }
 }
