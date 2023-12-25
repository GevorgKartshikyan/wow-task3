import React, {FC, useState} from "react";
import SliderText from "./SliderText";
const SliderItem:FC = () => {
    const [slide,setSlide] = useState(1)
    console.log(slide)
    const handleNextSlide = (method:string)=>{
        if (method === '+'){
            setSlide((prevState)=>{
                let newValue = prevState+1
                if (newValue > 3 ){
                    newValue = 1
                }
                return newValue
            })
        }else {
            setSlide((prevState)=>{
                let newValue = prevState-1
                if (newValue < 1 ){
                    newValue = 3
                }
                return newValue
            })
        }
    }
  return (
      <div className='slider__item'>
          <div className='slider__item__buttons'>
              <div onClick={()=>handleNextSlide('-')} className="slider__item__button">
                  <svg className='buutbutton_nexton_next' xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                       viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.3"/>
                      <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.2"/>
                  </svg>
                  <svg className='button_next' xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                       viewBox="0 0 28 28" fill="none">
                      <path d="M16.3327 6.22223L9.66602 14L16.3327 21.7778" stroke="white" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </div>
              <div onClick={()=>handleNextSlide('+')} className="slider__item__button">
                  <svg className='buuton_next' xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                       viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.3"/>
                      <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.2"/>
                  </svg>
                  <svg className='button_next' xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                       viewBox="0 0 28 28" fill="none">
                      <path d="M11.6673 6.22223L18.334 14L11.6673 21.7778" stroke="white" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </div>
          </div>
          {slide === 1 && <SliderText title='House design & furnishing-1' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.-1' btn='Apply-1'/>}
          {slide === 2 && <SliderText title='House design & furnishing-2' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.-2' btn='Apply-2'/> }
          {slide === 3 && <SliderText title='House design & furnishing-3' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.-3' btn='Apply-3'/>}
      </div>
  )
}
export default SliderItem
