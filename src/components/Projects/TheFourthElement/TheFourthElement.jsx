import style from './TheFourthElement.module.css';
import { useRef, useState, useEffect } from 'react';
import { dataTheFourthElement } from '../../../assets/dataTheFourthElement';
import { Link } from 'react-router-dom';

const TheFourthElement = () => {
    const listRef = useRef();
    const [ currentIndex, setCurrentIndex ] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
        if(imgNode){
            imgNode.scrollIntoView({
                behavior: "smooth",
                inline: "start"
            })
        }
    }, [currentIndex])

    const scrollToImage = (direction) => {
        if (direction === 'prev'){
            setCurrentIndex(curr => {
                const isFirtsSlide = currentIndex === 0;
                return isFirtsSlide ? 0 : curr -1
            })
        } else {
            const isLastSlide = currentIndex === dataTheFourthElement.length -1
            if (!isLastSlide) {
                setCurrentIndex( curr => curr +1);
            }
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    
    return (
        <div className={style.container}>
            <div className={style.Slider}>
                <div className={style.sliderContainer}>
                    <div className={style.leftArrow} onClick={() => scrollToImage('prev')}>&#10092;</div>
                    <div className={style.rigthArrow} onClick={() => scrollToImage('next')}>&#10093;</div>
                    <div className={style.containerImg}>
                        <ul ref={listRef}>
                            {
                                dataTheFourthElement.map((item) => {
                                    return <li key={item.id}>
                                                <img src={item.imgUrl} width={500} height={280}/>
                                            </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={style.dotsCointainer}>
                        {
                            dataTheFourthElement.map((_, idx) => (
                                <div 
                                    key={idx} 
                                    className={`${style.dotsCointainerItem} ${idx === currentIndex ? style.active : ''}`} 
                                    onClick={() => goToSlide(idx)}
                                >
                                    &#9865;
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={style.classP}>
                <p>
                    <a href="https://the-fourth-element-client.vercel.app/" target="_blank" rel="noreferrer noopener" >TheFourthElement</a><br></br>
                    Plataforma para Estanislao Brachrach. El cual es un curso para deportistas de alto rendimiento, con	visualización de videos, pasarelas de pago, administración de usuarios, reproduccion multimedia. Tecnología utilizadas: Next js, React, Sass, Next UI, Node .js, MongoDB, Next-Auth, Express, Tailwind, SCRUM, GIT, MVC, POO, vista entidad relacion, Docker, Notion, AWS, Lucidchart, Swagger, Figma.
                </p>
            </div>
            <div className={style.arrowContainer}>
                <Link to="/" className={style.arrowLink}>&#x2190;</Link>
            </div>
        </div>
    )
};

export default TheFourthElement;