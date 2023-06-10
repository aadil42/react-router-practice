import { NavLink } from 'react-router-dom';

import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={({isActive}) => {
              return isActive ? classes.active : undefined;
            }} to="" end> All Events </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => {
              return isActive ? classes.active : undefined;
            }} to="new"> new Events </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
