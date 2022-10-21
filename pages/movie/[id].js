import GlobalLayout from '../../components/GlobalLayout'
import Image from 'next/image'

// The [id].js will generate the content of any  selected movie.

//Store the movie sting into variables
let baseURL     = "https://api.themoviedb.org/3/movie/";
let lang        = "&language=en-US";
let API_KEY     = "?api_key=8cf1ee88fcff08cac4702a53ce7bc470";
let size        = "original";
let img_url     = "https://image.tmdb.org/t/p/"
let embed       = `https://www.youtube.com/embed/`

//Use this array to replay the month integer wit a string
const month = [null,"January","February","March","April","May","June","July","August","September","October","November","December"];

//convert milliseconds to Hours, Minutes and seconds
function padTo2Digits(num) {
   return num.toString().padStart(2, '0');
}

const imageStyle={
   "with": "380",
   "min-width": "250px",
   "height": "520",
}

let nimg ={
minWidth: "320px",
maxWidth: "500px !important"
}


function convertMsToTime(milliseconds) {
   let seconds = Math.floor(milliseconds / 1000);
   let minutes = Math.floor(seconds / 60);
   let hours = Math.floor(minutes / 60);
   seconds = seconds % 60;
   minutes = minutes % 60;
   //hours = hours % 24;
   return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
 seconds,
)}`;
}

//Render the movie details when selected
function Movie({results}) {
   //console.log(results)

   return <GlobalLayout>
      <div className='preview_movie_outer_container' style={{ backgroundImage: `url(${img_url+size+results.backdrop_path})` }}>
      <h1>{results.original_title }</h1>
         <div className='movie_preview' >
        
       <div className='inner-container'>
           <div className='header_img'>
              <Image 
              data-set={nimg}
              className='preview-image'
              src={img_url+size+results.poster_path}
              style={imageStyle}
              width={imageStyle.with}
              height={imageStyle.height}/>
           </div>
   
   
           <div className='description'>
            <h2>{results.tagline ? results.tagline:results.original_title}</h2>
               <p>{results.overview}</p>
               <br/>
               <p><b>Release Date:</b>
               {` 
               ${results.release_date.replaceAll("-", " ").split(" ")[2]}
               ${month[parseInt(results.release_date.replaceAll("-", " ").split(" ")[1])]}
               ${results.release_date.replaceAll("-", " ").split(" ")[0]}`
               }
               </p>
               <p><b>Status:</b> {results.status}</p>
               <p><b>Genre:</b> {results.genres.map(item=>`${item.name}, `)} </p>
               <p><b>Runtime:</b> {convertMsToTime(`${results.runtime}00000`)}</p>
   
          
              
           </div>
           <div className='iframe'>
                  <iframe
                 
                  width="100%" 
                  height="100%" 
                  src={embed+results.videos.results[0].key} >
      
                  </iframe>
               </div>
       </div>
         </div>
      </div>
         
         </GlobalLayout>

}
export default Movie

//Since we don't know what thi id will be we'll use something called a wildcard to render the page of the selected movie.




export async function getServerSideProps(context) {//context holds the data thats passed with the url
   const { id } = context.query//this will also hold the id of the movies selected on the home page.

   const request = await fetch(`${baseURL}${id}${API_KEY}${lang}&append_to_response=videos, images`)
   .then((response) => response.json());

   return{props: {results:request}}
   

   //console.table(url)
  
 }
 
