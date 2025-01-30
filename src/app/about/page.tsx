
import Comment from "../componentcomment/page";
import Features from "../componentfeature/feature/page";

import Cutlerytwo from "../componentone/curtlerytwo/page";
import BottomSectiontwo from "../componenttwo/bottomsectiontwo/page";
import HeroSectiontwo from "../componenttwo/page";


export default function About(){
    return(
        <div>
            
            <Comment/>
            <BottomSectiontwo/>
            <HeroSectiontwo/>
            <Features/>
            <Cutlerytwo/>
           
        </div>
    )
}