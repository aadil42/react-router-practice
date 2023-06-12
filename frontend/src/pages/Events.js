import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function Events() {
  const eventsList = useLoaderData();

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
  } else {
    const resData = await response.json();
    return resData.events;
  }
 }
