import React from 'react'
import GlobalLayout from '../components/GlobalLayout'


export default function about() {
  return (
   <GlobalLayout>
      <h1 className='page_banner'>About</h1>
      <div className='movie_outer_container'>
         <div className='about_text'>
            <p>This website will display a list of the latest movie at the current time.</p>
            <p>Brought to you by <a href='http://www.themoviedb.org/movie' target="_blank">themoviedb.org</a></p>
         </div>
      </div>
   </GlobalLayout>
  
  )
}
