import 'bootstrap/dist/css/bootstrap.css';

// this serves as wrapper to component e.g. index.js
// for reference: https://github.com/vercel/next.js/blob/master/errors/css-global.md
export default ({ Component, pageProps }) => {
    return <Component {...pageProps} />
};