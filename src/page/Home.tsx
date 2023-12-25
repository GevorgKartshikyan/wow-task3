import React, {FC, useState} from "react";
import TopMenu from "../layouts/TopMenu";
import Navigator from "../components/Navigator";
import Banner from "../layouts/Banner";
import About from "../layouts/About";
import Portfolio from "../layouts/Portfolio";
import Reviews from "../layouts/Reviews";
const Home:FC = ()=>{
    const [showTop,setShowTop] = useState(true)
    console.log(showTop)
    return (
        <div>
            {showTop &&  <TopMenu onClose={()=>setShowTop(false)}/>}
            <Navigator/>
            <Banner/>
            <About/>
            <Portfolio/>
            <Reviews/>
        </div>
    )
}
export default Home;
