
import Link from "next/link";
import Head from "next/head"

export default(props) => {

   //the head of the HTML page can also be imported here to add scripts and other head content.
   return (
      <div className="contentContainer">
         
               <Head>
               <title>Movi API</title>
               </Head>
            <header className="navigation">
               <Link href="/">
                        <a>Home</a>
               </Link>
               <Link href="/about">
                        <a>About</a>
               </Link>

               
         
            </header>

         <div className="children" >
         {/* This is where all the other children components will nested */}
         {props.children}
         </div>



      </div>
   );
}
