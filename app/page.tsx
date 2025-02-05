// import Image from "next/image";


import Hero from "./components/Hero";
import Recentpost from "./components/Recentpost";



export default function Home() {
  return (
    <div className="bg-footerbackground">
      <title>FANCYWEAR.COM -THE FANCY WEAR</title>
      <meta name="description" content="FANCYWEAR.COM -the-fancy-wear"></meta>
      <link rel="icon" href="./favicon.ico"></link>
      
    <Hero/>
    <Recentpost/>

    </div>
  );
}
