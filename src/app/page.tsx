
import Navbarthree from "@/components/headerthree/page";
import Curtlery from "./componentone/curtlery/page";
import HeroSection from "./componenttwo/heroSection/page";

import BottomSection from "./componenttwo/bottomsection/page";

import BlogSection_one from "./componentfeature/Blogsone/page";
import Features from "./componentfeature/feature/page";








export default function Home() {
  return (
   <div>
<Navbarthree/>
<HeroSection/>
<Features/>
<BlogSection_one/>
<Curtlery/>
<BottomSection/>
   </div>
      
         
  );
}
