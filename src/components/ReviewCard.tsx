import React,{FC} from "react";
interface Props {
    id: number
    photo:string
    name: string
    surname: string
    comment: string
    stars: number
}
const ReviewCard:FC<Props> = ({id,name,stars,surname,comment,photo})=>{
    return (
        <div className='card'>
            <div className='card__user'>
                <img src={photo} alt="user" className='card__image'/>
                <div className='card__info'>
                    <p className='card__user__info'>
                        {name +  " "  + surname}
                    </p>
                    <div className='card__stars'>
                        {Array.from({length: 5}, (_, index) => (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"
                                 viewBox="0 0 16 15"
                                 fill="none">
                                <path
                                    d="M8 0L10.5392 4.50505L15.6085 5.52786L12.1086 9.33495L12.7023 14.4721L8 12.32L3.29772 14.4721L3.89144 9.33495L0.391548 5.52786L5.46077 4.50505L8 0Z"
                                    fill={index < stars ? "#F0B90B" : '#3C3C3C' }
                                />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
            <div className='card__review'>
                <p className='card__review__text'>
                    {comment}
                </p>
            </div>
        </div>

    )
}
export default ReviewCard
