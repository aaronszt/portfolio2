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
            listNode.style.scrollBehavior = 'auto';
            imgNode.scrollIntoView({
                behavior: "auto",
                inline: "start"
            });
            setTimeout(() => {
                listNode.style.scrollBehavior = 'smooth';
            }, 500);
        }
    }, [currentIndex]);
    

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
                    <a href="https://the-fourth-element-client.vercel.app/" target="_blank" rel="noreferrer noopener" >&#8594;TheFourthElement&nbsp;&nbsp;
                        <a className={style.classSvg} href="https://github.com/orgs/The-fourth-elements/repositories"target="_blank" rel="noreferrer noopener">
                            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                            </svg>
                    </a><br></br>
                        </a>
                    Platform for Estanislao Brachrach. It is a course for high-performance athletes, featuring video visualization, payment gateways, user management, multimedia playback. Technologies used: Next js, React, Sass, Next UI, Node .js, MongoDB, Next-Auth, Express, Tailwind, SCRUM, GIT, MVC, POO, vista entidad relacion, Docker, Notion, AWS, Lucidchart, Swagger, Figma.
                </p>
            </div>
            <div className={style.arrowContainer}>
                <Link to="/" className={style.arrowLink}>&#x2190;</Link>
            </div>
        </div>
    )
};

export default TheFourthElement;