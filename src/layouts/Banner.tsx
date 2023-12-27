import React, {FC, useState} from "react";
// import SliderItem from "../components/SliderItem";
import arrow from '../assets/images/arrow.png'
import {useSelector} from "react-redux";
import SliderText from "../components/SliderText";

const {REACT_APP_API_URL} = process.env;

interface Props {
    language: string
}

const Banner: FC<Props> = ({language}) => {
    const [slide, setSlide] = useState(0)
    const handleNextSlide = (method: string) => {
        if (method === '+') {
            setSlide((prevState) => {
                let newValue = prevState + 1
                if (newValue > 1) {
                    newValue = 0
                }
                return newValue
            })
        } else {
            setSlide((prevState) => {
                let newValue = prevState - 1
                if (newValue < 0) {
                    newValue = 1
                }
                return newValue
            })
        }
    }
    // @ts-ignore
    const homeSlides = useSelector(state => state.homePageRequests.homeSlides)
    // @ts-ignore
    const goShopping = useSelector(state => state.homePageRequests.goShopping)
    return (
        <div className='banner'>
            <div className='banner__row'>
                <div style={{backgroundImage: `url(${REACT_APP_API_URL + homeSlides[slide]?.image})`}}
                     className='banner__big'>
                    <div className='slider__item'>
                        <div className='slider__item__buttons'>
                            <div onClick={() => handleNextSlide('-')} className="slider__item__button">
                                <div className='slider__item__button__circle'>
                                    <svg className='button_next' xmlns="http://www.w3.org/2000/svg" width="28"
                                         height="28"
                                         viewBox="0 0 28 28" fill="none">
                                        <path d="M16.3327 6.22223L9.66602 14L16.3327 21.7778" stroke="white"
                                              stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div onClick={() => handleNextSlide('+')} className="slider__item__button">
                                <div className='slider__item__button__circle'>
                                    <svg className='button_next' xmlns="http://www.w3.org/2000/svg" width="28"
                                         height="28"
                                         viewBox="0 0 28 28" fill="none">
                                        <path d="M11.6673 6.22223L18.334 14L11.6673 21.7778" stroke="white"
                                              stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {
                            homeSlides.length > 0 ? <SliderText
                                title={homeSlides[slide][`heading_${language}`]}
                                desc={homeSlides[slide][`description_${language}`]}
                                btn={homeSlides[slide][`link_title_${language}`]}/> : null
                        }
                    </div>
                </div>
                <div className='banner__small'>
                    <div style={{position: 'relative', backgroundImage: `url(${REACT_APP_API_URL + goShopping.image})`}}
                         className='banner__small__image'>
                        <div className='banner__small__text__block'>
                            <div>
                                <h2 className='small__banner__title'>{goShopping[`heading_${language}`]}</h2>
                                <p className='small__banner__desc' dangerouslySetInnerHTML={{__html:goShopping[`description_${language}`]}}/>
                            </div>
                            <a href={'https://' + goShopping.link} target='_blank' style={{cursor: 'pointer'}}>
                                <img src={arrow} alt="arrow" className='bannersmall__arrow'/>
                            </a>
                        </div>
                    </div>
                    <form className='banner__small__form'>
                        <p className='banner__small__text'>Search for any product</p>
                        <div style={{width: '100%', position: 'relative', height: 48}}>
                            <input
                                placeholder='Search'
                                className='banner__small__form__input'
                                type="text"
                            />
                            <svg className='search__icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                 viewBox="0 0 20 20"
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Banner
