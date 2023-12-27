import React, {FC} from "react";

const MobileMenu: FC = () => {
    const handleClick = (event: { target: EventTarget; }) => {
        const element:any = event.target
        if (element.style.transform === 'rotate(90deg)'){
            element.style.transform = 'rotate(0deg)'
        }else {
            element.style.transform = 'rotate(90deg)'
        }
    }
    return (
        <div className='mobile__menu'>
            <ul className='mobile__menu__items'>
                <li className="mobile__menu__items__item">
                    <div className="mobile__menu__items__item">
                        <a href="" className="mobile__menu__items__item__link">Custom furniture production</a>
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="14" height="15"
                             viewBox="0 0 14 15" fill="none">
                            <path
                                d="M10 7.50002C10 7.67924 9.92797 7.85843 9.78422 7.99507L5.25832 12.2949C4.97041 12.5684 4.50363 12.5684 4.21584 12.2949C3.92805 12.0214 3.92805 11.5781 4.21584 11.3045L8.22061 7.50002L4.21598 3.69549C3.92819 3.42197 3.92819 2.97863 4.21598 2.70524C4.50377 2.43159 4.97055 2.43159 5.25846 2.70524L9.78436 7.00496C9.92813 7.14166 10 7.32086 10 7.50002Z"
                                fill="white"/>
                        </svg>
                    </div>
                </li>
                <li className="mobile__menu__items__item">
                    <div className='mobile__menu__items__item'>
                        <a href="" className="mobile__menu__items__item__link">Interior Design</a>
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                            <path
                                d="M10 7.50002C10 7.67924 9.92797 7.85843 9.78422 7.99507L5.25832 12.2949C4.97041 12.5684 4.50363 12.5684 4.21584 12.2949C3.92805 12.0214 3.92805 11.5781 4.21584 11.3045L8.22061 7.50002L4.21598 3.69549C3.92819 3.42197 3.92819 2.97863 4.21598 2.70524C4.50377 2.43159 4.97055 2.43159 5.25846 2.70524L9.78436 7.00496C9.92813 7.14166 10 7.32086 10 7.50002Z"
                                fill="white"/>
                        </svg>
                    </div>
                </li>
                <li className="mobile__menu__items__item">
                    <div className='mobile__menu__items__item'>
                        <a href="" className="mobile__menu__items__item__link">Shop</a>
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                            <path
                                d="M10 7.50002C10 7.67924 9.92797 7.85843 9.78422 7.99507L5.25832 12.2949C4.97041 12.5684 4.50363 12.5684 4.21584 12.2949C3.92805 12.0214 3.92805 11.5781 4.21584 11.3045L8.22061 7.50002L4.21598 3.69549C3.92819 3.42197 3.92819 2.97863 4.21598 2.70524C4.50377 2.43159 4.97055 2.43159 5.25846 2.70524L9.78436 7.00496C9.92813 7.14166 10 7.32086 10 7.50002Z"
                                fill="white"/>
                        </svg>
                    </div>
                </li>
                <li className="mobile__menu__items__item">
                    <div className='mobile__menu__items__item'>
                        <a href="" className="mobile__menu__items__item__link">Portfolio</a>
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                            <path
                                d="M10 7.50002C10 7.67924 9.92797 7.85843 9.78422 7.99507L5.25832 12.2949C4.97041 12.5684 4.50363 12.5684 4.21584 12.2949C3.92805 12.0214 3.92805 11.5781 4.21584 11.3045L8.22061 7.50002L4.21598 3.69549C3.92819 3.42197 3.92819 2.97863 4.21598 2.70524C4.50377 2.43159 4.97055 2.43159 5.25846 2.70524L9.78436 7.00496C9.92813 7.14166 10 7.32086 10 7.50002Z"
                                fill="white"/>
                        </svg>
                    </div>
                </li>
                <li className="mobile__menu__items__item">
                    <div className='mobile__menu__items__item'>
                        <a href="" className="mobile__menu__items__item__link">About Us</a>
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                            <path
                                d="M10 7.50002C10 7.67924 9.92797 7.85843 9.78422 7.99507L5.25832 12.2949C4.97041 12.5684 4.50363 12.5684 4.21584 12.2949C3.92805 12.0214 3.92805 11.5781 4.21584 11.3045L8.22061 7.50002L4.21598 3.69549C3.92819 3.42197 3.92819 2.97863 4.21598 2.70524C4.50377 2.43159 4.97055 2.43159 5.25846 2.70524L9.78436 7.00496C9.92813 7.14166 10 7.32086 10 7.50002Z"
                                fill="white"/>
                        </svg>
                    </div>
                </li>
                <li className="mobile__menu__items__item">
                    <div className='mobile__menu__items__item'>
                        <a href="" className="mobile__menu__items__item__link">Blog</a>
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                            <path
                                d="M10 7.50002C10 7.67924 9.92797 7.85843 9.78422 7.99507L5.25832 12.2949C4.97041 12.5684 4.50363 12.5684 4.21584 12.2949C3.92805 12.0214 3.92805 11.5781 4.21584 11.3045L8.22061 7.50002L4.21598 3.69549C3.92819 3.42197 3.92819 2.97863 4.21598 2.70524C4.50377 2.43159 4.97055 2.43159 5.25846 2.70524L9.78436 7.00496C9.92813 7.14166 10 7.32086 10 7.50002Z"
                                fill="white"/>
                        </svg>
                    </div>
                </li>
                <li className="mobile__menu__items__item">
                    <div className='mobile__menu__items__item'>
                        <a href="" className="mobile__menu__items__item__link">Contact Us</a>
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                            <path
                                d="M10 7.50002C10 7.67924 9.92797 7.85843 9.78422 7.99507L5.25832 12.2949C4.97041 12.5684 4.50363 12.5684 4.21584 12.2949C3.92805 12.0214 3.92805 11.5781 4.21584 11.3045L8.22061 7.50002L4.21598 3.69549C3.92819 3.42197 3.92819 2.97863 4.21598 2.70524C4.50377 2.43159 4.97055 2.43159 5.25846 2.70524L9.78436 7.00496C9.92813 7.14166 10 7.32086 10 7.50002Z"
                                fill="white"/>
                        </svg>
                    </div>
                </li>
            </ul>
            <button className='mobile__menu__items__locales'>
                <span className='mobile__menu__items__locales__language'>En</span>
                <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15"
                     fill="none">
                    <path
                        d="M10 7.50002C10 7.67924 9.92797 7.85843 9.78422 7.99507L5.25832 12.2949C4.97041 12.5684 4.50363 12.5684 4.21584 12.2949C3.92805 12.0214 3.92805 11.5781 4.21584 11.3045L8.22061 7.50002L4.21598 3.69549C3.92819 3.42197 3.92819 2.97863 4.21598 2.70524C4.50377 2.43159 4.97055 2.43159 5.25846 2.70524L9.78436 7.00496C9.92813 7.14166 10 7.32086 10 7.50002Z"
                        fill="white"/>
                </svg>
            </button>
        </div>
    )
}
export default MobileMenu
