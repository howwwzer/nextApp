// this is essentially the main file that is run first; it creates the "App"
// component which is the container for everything else
//
// it can be used for other things but in this case it just loads the global styles, meaning 
// these rules apply to every other thing in your Next app unless you override them

import '../styles/global.css';


// creates the App component
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
