

import GlobalLayout from '../components/GlobalLayout'
import Image from 'next/image'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router';

//This index.js will act as the HOME page

//Using theMovieDb.org API v3
 //*Popular movies from TMDB
 //https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
 //*Top rated movies
 //https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
 //* Get the Latest movies
 //https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US

 //* Get details about a movie
 //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US


//The concat() method returns a new array/object, containing the joined items

//Creating a reusable url
let baseURL     = "https://api.themoviedb.org/3/movie/";
let popular     = "popular?api_key=";
let topRated    = "top_rated?api_key=";
let latest      = "latest?api_key=";
let lang        = "&language=en-US";
let API_KEY     = "8cf1ee88fcff08cac4702a53ce7bc470";
let imageConfig = 'configuration?api_key=';
let size        = "w200";
let file_path   = ""
let img_url     = "https://image.tmdb.org/t/p/"
let url         = "".concat(baseURL, popular, API_KEY, lang)



// TODO: Need to fetch `data` (by calling some API endpoint) before this page can be pre-rendered.

//* getInitialProps: deprecated and not recommended.
//* getStaticProps(): Fetch data at build time
//* getStaticPath(): Specify dynamic(when it changes) routes to pre-render based on data
//* getServerSideProps(): Fetch data on each render


//Render the movie data on page build on the index page
//Pass the selected movie id with router trough the url

//I tried using the Link method to pass the item id to my movies page.
//I id did pass and showed up in the url but my initialPros context didn't have the id.
//I change to useRoutes()in stead and pushed the item.id to a folder(movie) in pages.
//And retrieved it trough the getServerSideProps()context.

//Use this array to replay the month integer wit a string
const month = [null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


function Index(data){
  
  const router = useRouter()

 return  <GlobalLayout>
  
   <h1 className='page_banner'>Popular Movies</h1>
    <div className='movie_outer_container'>
      <div className='movie_inner_container'>
      {data.results.map((item) => (
         <div 
          onClick={()=> router.push(`/movie/${item.id}`)} 
          className="card" 
          key={item.id}>

         <Image 
          src={`${img_url}${size}${item.poster_path}`} 
          alt="poster"
          width={`200`} 
          height={`300`}/>
     
         <div className="inner_container">
           <h4><b>{item.title}</b></h4> 
           
           <p>Popularity: {`${item.vote_average}%`.replace(".", "")}</p>
           {/* 
           My way of destructuring the release_date(2022-06-28) string into an array and replacing the month[] item with a destructured string 
           */}
           <p> 
            {` 
            ${month[parseInt(item.release_date.replaceAll("-", " ").split(" ")[1])]}
            ${item.release_date.replaceAll("-", " ").split(" ")[2]},
            ${item.release_date.replaceAll("-", " ").split(" ")[0]}
            `}
           
            </p>
           
         </div>
         </div>
        ))}
   
       </div>
    </div>
  </GlobalLayout>
  
  }



export default Index





//fetching movie data
export async function getStaticProps() {
  // Call an external API endpoint
  const res = await fetch(url)
  const data = await res.json()

  
  // By returning { props: { data } }, the index component
  // will receive `movie data` as a prop at build time
  return { props: data }

}