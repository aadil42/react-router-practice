import { useLoaderData } from 'react-router-dom';

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
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // setError('Fetching events failed.');
    return {error:  true, message: 'couldn\'t fetch the data'}
  } else {
    // const resData = await response.json();
    return response;
  }
 }
