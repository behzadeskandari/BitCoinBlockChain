import { AccordionPages } from '../pages/AccordionPages';
import { Tabs } from '@material-ui/core';
import SiteFooter from '../components/_Shared/SiteFooter';

import NavigationMenu from '../components/_Shared/NavigationMenu';



export default function  Home(){
   return (
       <div>
                 <NavigationMenu/>
                    {/*    <Login />    */}
                    {/*    <SignUp />   */}

                    <Tabs className={`displayFlex`} style={{height: '85vh'}}> 
                        <AccordionPages/>
                    </Tabs>
                    <SiteFooter />
       </div>
   ) 
} 