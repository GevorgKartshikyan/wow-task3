import React, {FC} from "react";
import about from '../assets/images/about.png'

const About: FC = () => {
    return (
        <div style={{width: '85%', margin: '0 auto', marginTop: 100}}>
            <div className='about'>
                <div className='about__text'>
                    <h3 className='about__text__title'>about our company</h3>
                    <p className='about__text__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.</p>
                    <button className='about__text__button'>Read more</button>
                </div>
                <div style={{backgroundImage: `url(${about})`}} className='about__image'>

                </div>
            </div>
        </div>
    )
}
export default About
