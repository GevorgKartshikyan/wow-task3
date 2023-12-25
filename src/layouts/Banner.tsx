import React, {FC} from "react";
import bannerBig from '../assets/images/banner-big.png'
import bannerSmall from '../assets/images/smallBanner.png'
import SliderItem from "../components/SliderItem";
import arrow from '../assets/images/arrow.png'
const Banner: FC = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='banner__row'>
                    <div style={{backgroundImage:`url(${bannerBig})`}} className='banner__big'>
                        {/*<img src={bannerBig} className='banner__big__img' alt="banner__big"/>*/}
                        <SliderItem/>
                    </div>
                    <div className='banner__small'>
                        <div style={{position:'relative'}} className='banner__small__image'>
                            <img src={'https://picsum.photos/200/300'} alt="banner_small"
                                 className='banner__small__image'/>
                            <div className='banner__small__text__block'>
                                <div>
                                    <h2>Go Shopping</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div>
                                    <img src={arrow} alt="arrow" className='arrow'/>
                                </div>
                            </div>
                        </div>
                        <form className='banner__small__form'>
                            <p className='banner__small__text'>Search for any product</p>
                            <input className='banner__small__form__input' type="text"/>
                            <svg className='banner__small__form__input__icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                 fill="none">
                                <g clip-path="url(#clip0_316_2015)">
                                    <path
                                        d="M19.3613 18.2168L14.6012 13.2662C15.8255 11.8136 16.4966 9.97473 16.4957 8.07499C16.4957 3.62251 12.8732 0 8.4207 0C3.96821 0 0.345703 3.62251 0.345703 8.07499C0.345703 12.5275 3.96821 16.15 8.4207 16.15C10.0922 16.15 11.6851 15.6458 13.047 14.6888L17.8432 19.677C18.0436 19.8852 18.3133 20 18.6022 20C18.8757 20 19.1352 19.8957 19.3321 19.7061C19.5331 19.5123 19.6491 19.2467 19.6546 18.9675C19.66 18.6883 19.5546 18.4184 19.3613 18.2168ZM8.4207 2.10652C11.7118 2.10652 14.3892 4.78391 14.3892 8.07499C14.3892 11.3661 11.7118 14.0435 8.4207 14.0435C5.12961 14.0435 2.45222 11.3661 2.45222 8.07499C2.45222 4.78391 5.12961 2.10652 8.4207 2.10652Z"
                                        fill="#AF4B85"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_316_2015">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner