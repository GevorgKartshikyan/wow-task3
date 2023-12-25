import React, {FC} from "react";
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'
import image5 from '../assets/images/image5.jpg'
import PortfolioImagesText from "../components/PortfolioImagesText";
const Portfolio: FC = () => {
    return (
        <div className='portfolio'>
            <div className="container">
                <div className='portfolio__text__block'>
                    <div>
                        <h3 className='portfolio__title'>Our portfolio</h3>
                        <p className='portfolio__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <button className='portfolio__button'>
                        View more
                    </button>
                </div>
                <div className="portfolio__images__block">
                    <div className="portfolio__images__container">
                        <div style={{backgroundImage:`url(${image1})`}} className="portfolio__image__small">
                            <PortfolioImagesText/>
                        </div>
                        <div style={{backgroundImage:`url(${image2})`}} className="portfolio__image__small">
                            <PortfolioImagesText/>
                        </div>
                    </div>
                    <div className="portfolio__images__container">
                        <div style={{backgroundImage:`url(${image3})`}}  className="portfolio__image__big">
                            <PortfolioImagesText/>
                        </div>
                    </div>
                    <div className="portfolio__images__container">
                        <div style={{backgroundImage:`url(${image4})`}}  className="portfolio__image__small">
                            <PortfolioImagesText/>
                        </div>
                        <div style={{backgroundImage:`url(${image5})`}}  className="portfolio__image__small">
                            <PortfolioImagesText/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
