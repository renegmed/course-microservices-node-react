import axios from 'axios';

// Execute on the browser
// for nextjs, we are not allowed to fetch inside this component only on initialization only
const LandingPage = ({ currentUser }) => {
     
    console.log('...currentUser:\n', currentUser);
     
    return <h1>Landing Page</h1>
};

// Execute on the server
// this is nextjs specific, thiis is where we can fetch data 
LandingPage.getInitialProps = async ({ req }) => {
        //console.log('I am on the server!');
 
    if (typeof window === 'undefined') {
        // we are on the server!
        // request should be mad to http://ingress-nginx-controller.default.svc.cluster.local/api/users/currentuser
        const { data } = await axios.get (  
            'http://ingress-nginx-controller.kube-system.svc.cluster.local/api/users/currentuser',
             {
                headers: req.headers 
            }
        );
        // NOTE: host 'ticketing.dev' found in infra/k8s/ingress-srv.yaml 
        return data;

    } else {
        // we are on the browser!
        // requests can be made with a base url of '' 
        const {data } = await axios.get('/api/users/currentuser');
       
        return data
    }
    
    return {}
}

export default LandingPage; 
