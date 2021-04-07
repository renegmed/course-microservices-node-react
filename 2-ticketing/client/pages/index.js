import buildClient from '../api/build-client';

// Execute on the browser
// for nextjs, we are not allowed to fetch inside this component only on initialization only
const LandingPage = ({ currentUser }) => {
     
    console.log('...currentUser:\n', currentUser);
     
    return <h1>Landing Page</h1>
};

// Execute on the server
// this is nextjs specific, thiis is where we can fetch data 
LandingPage.getInitialProps = async context => {

    const client = buildClient(context);
    const { data } = await client.get('/api/users/currentuser');

    return data;
}

export default LandingPage; 
