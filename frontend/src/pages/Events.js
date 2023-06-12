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