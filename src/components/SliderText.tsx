import React , {FC} from "react";
interface Props{
    title:string
    desc:string
    btn:string
}
const SliderText:FC<Props> = ({title,desc,btn}) => {
    return (
        <>
            <h1 className='banner__title'>{title}</h1>
            <p className='banner__desc'>{desc}</p>
            <button className='banner__button'>{btn}</button>
        </>
    )
}
export default SliderText
