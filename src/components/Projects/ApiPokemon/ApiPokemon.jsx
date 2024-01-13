import style from './ApiPokemon.module.css';
import { useRef, useState, useEffect } from 'react';
import { dataApiPoke } from '../../../assets/dataApiPoke';
import { Link } from 'react-router-dom';

const ApiPokemon = () => {
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
            const isLastSlide = currentIndex === dataApiPoke.length -1
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
                                dataApiPoke.map((item) => {
                                    return <li key={item.id}>
                                                <img src={item.imgUrl} width={500} height={280}/>
                                            </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={style.dotsCointainer}>
                        {
                            dataApiPoke.map((_, idx) => (
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
                <p>REST APis. Pagina con contenido "Pokemon", CRUD completo, administracion de usuario. Tecnología utilizadas: Node.js, Express.js, PostgreSQL, Sequelize, React, React Redux, HTML, CSS, Docker.</p>
            </div>
            <div className={style.arrowContainer}>
                <Link to="/" className={style.arrowLink}>&#x2190;</Link>
            </div>
        </div>
    )
};

export default ApiPokemon;