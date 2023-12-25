import React, {FC} from "react";
import {icons} from "../helpers/data";
import callSmall from '../assets/images/callSmall.svg'
interface Props{
    onClose:()=>void
}
const TopMenu: FC<Props> = ({onClose}) => {
    return (
        <div className='top'>
            <div className='container'>
                <div className="row">
                    <div className='top__left'>
                        <div className='top__left__social'>
                            {icons.map((e) => (
                                <a key={e} href='https://www.instagram.com/' target='_blank'>
                                    <img src={e} alt="soc-icon" className='top__left__social-icon'/>
                                </a>
                            ))}
                        </div>
                        <div className='top__left__call'>
                            <a href="tel:+000-00-00-00">
                                <img src={callSmall} alt="soc-icon" className='top__left__social-icon'/>
                            </a>
                            <p className='top__left__call-number'>000-00-00-00</p>
                        </div>
                    </div>
                    <div className='top__rigth'>
                        <div className='top__rigth__order'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                 fill="none">
                                <g clip-path="url(#clip0_692_2444)">
                                    <path
                                        d="M17.5107 13.2102L14.9988 10.6982C14.1016 9.8011 12.5765 10.16 12.2177 11.3262C11.9485 12.1337 11.0514 12.5822 10.244 12.4028C8.44974 11.9542 6.0275 9.62168 5.57894 7.73771C5.3098 6.93027 5.84808 6.03314 6.65549 5.76404C7.82176 5.40519 8.18061 3.88007 7.28348 2.98294L4.77153 0.470991C4.05382 -0.156997 2.97727 -0.156997 2.34929 0.470991L0.644745 2.17553C-1.0598 3.96978 0.82417 8.72455 5.04066 12.941C9.25716 17.1575 14.0119 19.1313 15.8062 17.337L17.5107 15.6324C18.1387 14.9147 18.1387 13.8382 17.5107 13.2102Z"
                                        fill="#AF4B85"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_692_2444">
                                        <rect width="18" height="18" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='top__rigth__order__text'>Order a call</p>
                        </div>
                        <svg onClick={()=>onClose()} className='close-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 18L18 6M6 6L18 18" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopMenu
