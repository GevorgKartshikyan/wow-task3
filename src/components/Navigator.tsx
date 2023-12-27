import React, {FC} from "react";
import logo from '../assets/images/logo.svg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


// @ts-ignore
const Navigator: FC = ({changeLanguage,language}) => {
    return (
        <nav className='navv'>
            <div className='nav'>
                <figure className='nav__figure'>
                    <a href="" className='nav__logo__link'>
                        <img src={logo} alt="logo" className='nav__logo'/>
                    </a>
                </figure>
                <ul className='nav__block'>
                    <div className='nav__blockk'>
                        <li className="nav__list"><a href="#" className="nav__link">Custom furniture
                            production</a>
                        </li>
                        <li className="nav__list"><a href="" className="nav__link">Interior Design</a></li>
                        <Popup trigger={<div className="nav__list__open">
                            <a href="#" className="nav__link">Shop</a>
                            <svg
                                className='arrow'
                                xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                fill="none">
                                <path d="M3.75 6.75L9 11.25L14.25 6.75" stroke="white" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>} position="bottom center">
                            <div className='popupMenu'>
                                <div>list1</div>
                                <div>list2</div>
                                <Popup
                                    trigger={
                                        <div>list3</div>
                                    } position='right top'>
                                    <div className='popupMenu'>
                                        <div>list3-1</div>
                                        <div>list3-2</div>
                                        <div>list3-3</div>
                                    </div>
                                </Popup>
                                <div>list4</div>
                                <div>list5</div>
                                <div>list6</div>
                            </div>
                        </Popup>
                        <li className="nav__list"><a href="#" className="nav__link">Portfolio</a></li>
                        <li className="nav__list"><a href="#" className="nav__link">About Us</a></li>
                        <li className="nav__list"><a href="#" className="nav__link">Blog</a></li>
                        <li className="nav__list"><a href="#" className="nav__link">Contact Us</a></li>
                    </div>
                    <div className='nav__block__btns'>
                        <button className='nav__register__block__buttons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
                                 fill="none">
                                <path
                                    d="M14.9359 31.518L15.4002 30.929L14.9359 31.518ZM19.9997 9.16763L19.4593 9.68773C19.6007 9.83463 19.7958 9.91763 19.9997 9.91763C20.2036 9.91763 20.3987 9.83463 20.54 9.68773L19.9997 9.16763ZM25.0635 31.518L25.5278 32.107L25.0635 31.518ZM15.4002 30.929C12.9038 28.9611 10.0862 26.9758 7.85629 24.4649C5.65213 21.9829 4.08301 19.0468 4.08301 15.2284H2.58301C2.58301 19.5149 4.36341 22.7907 6.73473 25.4609C9.08033 28.1021 12.0642 30.2092 14.4716 32.107L15.4002 30.929ZM4.08301 15.2284C4.08301 11.4566 6.21507 8.26758 9.16574 6.91882C12.0691 5.59167 15.9014 5.99118 19.4593 9.68773L20.54 8.64753C16.5982 4.55213 12.0972 3.92958 8.54214 5.55459C5.03441 7.15798 2.58301 10.8954 2.58301 15.2284H4.08301ZM14.4716 32.107C15.3299 32.7837 16.2195 33.4791 17.1133 34.0014C18.0069 34.5236 18.9759 34.9166 19.9997 34.9166V33.4166C19.3567 33.4166 18.6591 33.1674 17.8701 32.7063C17.0813 32.2454 16.2723 31.6166 15.4002 30.929L14.4716 32.107ZM25.5278 32.107C27.9352 30.2092 30.919 28.1021 33.2646 25.4609C35.6359 22.7907 37.4163 19.5149 37.4163 15.2284H35.9163C35.9163 19.0468 34.3472 21.9829 32.1431 24.4649C29.9132 26.9758 27.0956 28.9611 24.5991 30.929L25.5278 32.107ZM37.4163 15.2284C37.4163 10.8954 34.9649 7.15798 31.4572 5.55459C27.9022 3.92958 23.4011 4.55213 19.4593 8.64753L20.54 9.68773C24.098 5.99118 27.9302 5.59167 30.8336 6.91882C33.7843 8.26758 35.9163 11.4566 35.9163 15.2284H37.4163ZM24.5991 30.929C23.727 31.6166 22.9181 32.2454 22.1293 32.7063C21.3402 33.1674 20.6426 33.4166 19.9997 33.4166V34.9166C21.0234 34.9166 21.9925 34.5236 22.886 34.0014C23.7798 33.4791 24.6694 32.7837 25.5278 32.107L24.5991 30.929Z"
                                    fill="white"/>
                            </svg>
                        </button>
                        <button className='nav__register__block__buttons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M19.5242 6.23256C17.6746 6.23256 16.1753 7.73188 16.1753 9.5814V9.96819C17.0044 9.95347 17.9142 9.95348 18.9126 9.95349H20.1357C21.1341 9.95348 22.0439 9.95347 22.873 9.96819V9.5814C22.873 7.73188 21.3737 6.23256 19.5242 6.23256ZM25.1056 10.0695V9.5814C25.1056 6.49888 22.6067 4 19.5242 4C16.4416 4 13.9428 6.49888 13.9428 9.5814V10.0695C13.7303 10.0878 13.525 10.1089 13.3267 10.1334C11.8235 10.3192 10.5842 10.7093 9.5315 11.583C8.47879 12.4567 7.86693 13.6028 7.40736 15.046C6.96198 16.4447 6.62485 18.2428 6.20105 20.5032L6.17027 20.6674C5.57225 23.8567 5.10097 26.3701 5.01448 28.3516C4.92583 30.3826 5.22799 32.0647 6.3737 33.4452C7.51941 34.8257 9.11706 35.4327 11.1296 35.7199C13.0931 36 15.6503 36 18.8951 36H20.1531C23.398 36 25.9552 36 27.9187 35.7199C29.9313 35.4327 31.5289 34.8257 32.6746 33.4452C33.8203 32.0647 34.1225 30.3826 34.0338 28.3516C33.9473 26.3701 33.4761 23.8567 32.878 20.6674L32.8473 20.5032C32.4235 18.2429 32.0863 16.4447 31.641 15.046C31.1814 13.6028 30.5695 12.4567 29.5168 11.583C28.4641 10.7093 27.2248 10.3192 25.7216 10.1334C25.5233 10.1089 25.318 10.0878 25.1056 10.0695ZM13.6004 12.3491C12.3271 12.5065 11.558 12.8024 10.9573 13.301C10.3566 13.7995 9.92397 14.5009 9.53467 15.7234C9.13599 16.9754 8.82232 18.6376 8.38159 20.9881C7.76284 24.2881 7.32364 26.6451 7.24491 28.4489C7.16753 30.2219 7.4519 31.2486 8.09168 32.0195C8.73145 32.7903 9.68809 33.259 11.445 33.5097C13.2324 33.7647 15.63 33.7674 18.9875 33.7674H20.0609C23.4183 33.7674 25.8159 33.7647 27.6033 33.5097C29.3602 33.259 30.3169 32.7903 30.9566 32.0194C31.5964 31.2486 31.8808 30.2219 31.8034 28.4489C31.7247 26.6451 31.2855 24.2881 30.6667 20.9881C30.226 18.6376 29.9123 16.9754 29.5136 15.7234C29.1243 14.5009 28.6917 13.7995 28.091 13.301C27.4903 12.8024 26.7212 12.5065 25.4479 12.3491C24.1438 12.188 22.4524 12.186 20.0608 12.186H18.9875C16.596 12.186 14.9045 12.188 13.6004 12.3491Z"
                                      fill="white"/>
                            </svg>
                        </button>
                        <button className='nav__register__block__register__singup'>
                            Sign in
                        </button>
                        <button className='nav__register__block__register'>
                            Register
                        </button>
                        <Popup contentStyle={{width: 80}}
                               trigger={<button className='nav__register__block__locales'>
                                   {language.toUpperCase()}
                                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                        viewBox="0 0 18 18"
                                        fill="none">
                                       <path d="M3.75 6.75L9 11.25L14.25 6.75" stroke="white" stroke-width="1.5"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"/>
                                   </svg>
                               </button>} position="bottom center">
                            <div className='languages'>
                                <div onClick={()=>changeLanguage('ru')}>Ru</div>
                                <div onClick={()=>changeLanguage('en')}>En</div>
                                <div onClick={()=>changeLanguage('am')}>Am</div>
                            </div>
                        </Popup>
                    </div>
                </ul>
            </div>
        </nav>
    )
}
export default Navigator
