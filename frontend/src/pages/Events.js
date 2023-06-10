import { Link } from 'react-router-dom';

const data = [
    {title: 'event one', id: 'e1'},
    {title: 'event two', id: 'e2'},
    {title: 'event three', id: 'e3'}
];

const Events = () => {
    return (
        <>
            <h1>Events page</h1>
            <ul>
                {data.map((d) => {
                    return <li>
                        <Link to={`${d.id}`}> {d.title} </Link>
                        <Link to={`${d.id}/edit`}> Edit this event</Link>
                    </li>;
                })}
            </ul>
        </>
    );
}

export default Events;