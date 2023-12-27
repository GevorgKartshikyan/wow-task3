import React, {FC, useEffect, useState} from "react";
import TopMenu from "../layouts/TopMenu";
import Navigator from "../components/Navigator";
import Banner from "../layouts/Banner";
import NavigationMobile from "../components/NavigationMobile";
import {useDispatch, useSelector} from "react-redux";
import {getHomePageRequests} from "../store/actions/homePageRequests";

const Home: FC = () => {
    const [language, setLanguage] = useState('en')
    // @ts-ignore
    const status = useSelector(state => state.homePageRequests.status)
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(getHomePageRequests())
    }, []);
    const [showTop, setShowTop] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [screenWidth]);
    const isMobile = screenWidth <= 650;
    const changeLanguage = (language: string) => {
        setLanguage(language)
    }
    console.log(language)
    return (
        <div>
            {showTop && <TopMenu onClose={() => setShowTop(false)}/>}
            {/*// @ts-ignore*/}
            {isMobile ? <NavigationMobile/> : <Navigator changeLanguage={changeLanguage} language={language}/>}
            {status === 'ok' ? <Banner language={language}/> :
                <div style={{
                    width: 500,
                    height: 500,
                    position: "absolute",
                    background: 'transparent',
                    left: '40%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <p style={{fontSize: 34, color: 'red'}}>Loading....</p>
                </div>
            }
        </div>
    );
};

export default Home;
