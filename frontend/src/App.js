// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './pages/Root';
import EventRoot from "./pages/EventRoot";
import EventsNavigation from "./components/EventsNavigation";
import Home from './pages/Home';
import Events, {loader as eventsLoader} from './pages/Events';
// import {loader as eventDetailLoader} from './pages/EventDetail';
// import {action as newEventAction} from './pages/NewEvent';
import EventDetail, {action as eventDetailAction, loader as eventDetailLoader} from './pages/EventDetail';
import NewEvent from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import NewsLetter from './pages/NewsLetter';
import {action as manupilateAction} from './components/EventForm';
import {action as newsLetterAction} from './pages/NewsLetter';
import Error from './pages/Error';

const route = createBrowserRouter([
  {
    path: '/', 
    element: <Root />, 
    errorElement: <Error />,
    children : [  
      {index: true, element: <Home />},
      { path: 'events', 
        element: <EventRoot />, 
        children: [
        {index: true, 
         element: <Events/>,
         loader: eventsLoader,
        },
        { path: ':eventId', 
          loader: eventDetailLoader,
          id: 'event-detail',
          children: [
            {
             index: true, 
             element:  <EventDetail />,
             action: eventDetailAction
            },
            {
             path: 'edit', 
             element: <EditEvent />,
             action: manupilateAction
            }
          ]
        },
        {
          path: 'new', 
          element: <NewEvent />, 
          action: manupilateAction
        }
      ]
    },
    {
      path: 'newsletter',
      element: <NewsLetter />,
      action: newsLetterAction
    }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;
