import React, {FC} from "react";
import arrow from '../assets/images/arrow.png'
const PortfolioImagesText: FC = () => {
    return (
        <div className="text__block">
            <div>
                <h4>Name of the work</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <img src={arrow} alt='arrow'/>
        </div>
    )
}
export default PortfolioImagesText
