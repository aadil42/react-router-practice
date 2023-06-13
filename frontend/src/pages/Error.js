import { useRouteError } from 'react-router-dom';

import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

const Error = (props) => {
    const error = useRouteError();
    let title = "An error occurred";
    let message = "Something went wrong";

    if(error.status === 500) {
        message = error.data.message;
    }

    if(error.status === 404) { // if you don't have any status status will have 404 by default.
        title = "Not Found!";
        message = "Could not find resource page.";
    }
    return (
        <>
        <MainNavigation />
        <PageContent title={title} >
            <p>{message}</p>
        </PageContent>
        </>
    )
}

export default Error;