import React, {FC} from "react";
import Carousel from "nuka-carousel";
import ReviewCard from "../components/ReviewCard";
import {reviews} from "../helpers/data";

const Reviews: FC = () => {
    return (
        <div className='review'>
            <div className='container'>
                <div className='text__block'>
                    <h3 className='review__title'>Reviews</h3>
                    <p className='review__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
                <div style={{width: '100%', marginTop: 60}}>
                    <Carousel
                        wrapAround={true}
                        autoplay
                        slidesToShow={3}
                        renderBottomCenterControls={()=>null}
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
                        {reviews.map((e) => (
                            <ReviewCard
                                key={e.id}
                                id={e.id}
                                comment={e.comment}
                                name={e.name}
                                photo={e.photo}
                                stars={e.stars}
                                surname={e.surname}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default Reviews
