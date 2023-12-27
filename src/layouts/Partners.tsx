import React, {FC} from "react";
import {partners} from "../helpers/data";
import Carousel from "nuka-carousel";
const Partners: FC = () => {
    console.log(partners[0].photo)
    return (
        <div className='partners'>
            <div className="container">
                <div>
                    <h3 className='partners__title'>
                        Our partners
                    </h3>
                    <Carousel
                        style={{marginTop:60}}
                        wrapAround={true}
                        renderBottomCenterControls={() => null}
                        slidesToShow={7}
                        renderCenterRightControls={(props) => <div
                            className="slider__item__button"
                            onClick={() => props.nextSlide()}
                        >
                            <svg className='buuton_next' xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                 viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.1"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.1"/>
                            </svg>
                            <svg className='button_next' xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                 viewBox="0 0 28 28" fill="none">
                                <path d="M11.6673 6.22223L18.334 14L11.6673 21.7778" stroke="white" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>}
                        renderCenterLeftControls={(props) => <div onClick={() => props.previousSlide()}
                                                                  className="slider__item__button">
                            <svg className='buutbutton_nexton_next' xmlns="http://www.w3.org/2000/svg" width="40"
                                 height="40"
                                 viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.1"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.1"/>
                            </svg>

                            <svg className='button_next' xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                 viewBox="0 0 28 28" fill="none">
                                <path d="M16.3327 6.22223L9.66602 14L16.3327 21.7778" stroke="white" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>}
                    >
                        {partners.map((e) => (
                            <a target='_blank' href="https://logoipsum.com/">
                                <div key={e.id} className='partners__block'>
                                    <img src={e.photo} alt={e.name} className='partners__image'/>
                                    <p className='partners__name'>{e.name}</p>
                                </div>
                            </a>
                            ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default Partners
