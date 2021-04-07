import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';

// this serves as wrapper to component e.g. index.js
// for reference: https://github.com/vercel/next.js/blob/master/errors/css-global.md
const AppComponent = ({ Component, pageProps, currentUser }) => {
    return <div>
        <h1>Header! {currentUser.email}</h1>
        <Component {...pageProps} />
        </div>
};

AppComponent.getInitialProps = async (appContext) => {

    //console.log(Object.keys(appContext))

    const client = buildClient(appContext.ctx);
    const { data } = await client.get('/api/users/currentuser');

    let pageProps = {};
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx); 
    }
   

    console.log("...pageProps:\n", pageProps);

    return {
        pageProps,
        ...data
    };

};

export default AppComponent;