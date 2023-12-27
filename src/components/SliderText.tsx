import React , {FC} from "react";
interface Props{
    title:string
    desc:string
    btn:string
}
const SliderText:FC<Props> = ({title,desc,btn}) => {
    return (
        <>
            <h1 className='banner__title' dangerouslySetInnerHTML={{__html: title}}/>
            <p className='banner__desc' dangerouslySetInnerHTML={{__html: desc}}/>
            <button className='banner__button'>{btn}</button>
        </>
    )
}
export default SliderText
