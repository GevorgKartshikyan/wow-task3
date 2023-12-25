import React, {FC} from "react";
import Carousel from "nuka-carousel";

const Reviews: FC = () => {
    return (
        <div className='review'>
            <div className='container'>
                <div className='text__block'>
                    <h3 className='review__title'>Reviews</h3>
                    <p className='review__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
                <div style={{width:'100%'}}>
                    <Carousel>
                        <div className='card'>

                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default Reviews
