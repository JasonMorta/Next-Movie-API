import '../styles/globals.css'

//to add my own custom ccs by using an external file, I needed to create the _app.js file. 
//This css import will only work inside this file.


//"Component": is the current page thats being displayed(any page inside  teh pages folder)
//"pageProps" : is the initial props thats being send down to the current page.

 function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;