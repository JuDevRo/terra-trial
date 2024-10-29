import {useState, useEffect} from 'react'
import './Hero.scss'

const Hero = ({content}) => {
    const [wasViewed, setWasViewed] = useState(false)

    useEffect(() => {
        const hasVisited = localStorage.getItem("hasVisited");
        
        if (hasVisited === "true") {
            setWasViewed(true);
        } else {
            localStorage.setItem("hasVisited", "true");
            setWasViewed(false);
        }
    }, []);


  return (
    <div className='hero' style={{ backgroundImage: `url(${content.bg_image})`}}>
        <div className='hero__shape'>
            <div className='hero__firstimage'>
                <img src={content.shapes.shape_2} alt="" />
            </div>
            <div className='hero__secondimage'>
                <img src={content.shapes.shape_1} alt="" />
            </div>
        </div>
        {
            wasViewed ? (
                <div className='hero__container'>
                    <h1 className='hero__title'>{content.title.second_time_accessing}</h1>
                    <h2 className='hero__subtitle'>{content.subtitle}</h2>
                    <a href={content.button_link}>
                        <button className='hero__button hero__button-new'>{content.button_label.second_time_accessing}</button>
                    </a>
                </div>
            ) : (
                <div className='hero__container'>
                    <h1 className='hero__title'>{content.title.first_time_accessing}</h1>
                    <h2 className='hero__subtitle'>{content.subtitle}</h2>
                    <a href={content.button_link}>
                        <button className='hero__button'>{content.button_label.first_time_accessing}</button>
                    </a>
                </div>
            )
        }
    </div>
  )
}

export default Hero