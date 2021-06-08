
import SiteFooter from '../components/_Shared/SiteFooter';

import CustomTabsWrapper from '../components/_Shared/CustomTabsWrapper';
import AboveTheFold from '../components/_Shared/AboveTheFold';
import AboveTheFooter from '../pages/AboveTheFooter';
import {Carousel} from '../components/_Shared/Carousel';
import BegginerGuide from '../components/_Shared/BegginerGuide';
import FirstStatisticSection from './FirstStatisticSection';
import SecondStatisticSection from './SecondStatisticSection';
import AboutYokaBexSection from './AboutYokaBexSection';
import MobileSection from './MobileSection'

const carouselSlidesData = [
  {
    content:
      "Tomorrow, you will be place.",
    author: "Bane",
    source: "facebook",
  },
  {
    content:
      "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
    author: "Ra's Al Ghul",
    source: "Snapchat",
  },
  {
    content:
      "Introduce a little anarchy, about chaos? It's fair.",
    author: "Joker",
    source: "facebook",
  },
  {
    content:
      "I can't do that as Bruce Wa can be incorruptible, I can be everlasting.",
    author: "Bruce Wayne",
    source: "facebook",
  },
  {
    content:
      "But it's not who you are underneath... it's what you do that defines you.",
    author: "Rachel Dawes",
    source: "twitter",
  },
  {
    content:
      "When their enemies were at  honor, it was a public service.",
    author: "John Blake",
    source: "Google+",
  },
  {
    content:
      "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
    author: "Alfred Pennyworth",
    source: "twitter",
  },
];

export default function   Home(){
  // var items= [1,2,3,4,5,6,7,8,9,10]
    return (
       <div>
                
                    {/*    <Login />    */}
                    {/*    <SignUp />   */}
                    {/* <CustomTabsWrapper /> */}
                       <AboveTheFold />
                       
                       <Carousel slides={carouselSlidesData} />
                       
                       <BegginerGuide />

                       <FirstStatisticSection />
                       
                       <SecondStatisticSection />
                       
                       <AboutYokaBexSection />
                       
                       <AboveTheFooter />
                       
                       <MobileSection />
                       
                       <SiteFooter />

       </div>
   ) 
} 