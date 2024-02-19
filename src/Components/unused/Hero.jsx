import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { useInView } from '@react-spring/web'
import layer4 from '../images/layer4.png'
import layer3 from '../images/layer3.png'
import layer2 from '../images/layer2.png'
import layer1 from '../images/layer1.png'
import layer5 from '../images/layer5.png'
import layer6 from '../images/layer6.png'
import downArrow from '../images/down_arrow.svg'
import { useEffect, useState, useRef } from 'react'
import { RiJavascriptFill } from 'react-icons/ri'
import { FaReact, FaDocker, FaPhp, FaSymfony } from 'react-icons/fa'
import { SiMysql, SiMongodb } from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'
import { FaRegCircleLeft, FaRegCircleRight } from 'react-icons/fa6'

const Hero = ({ loading }) => {
  const messages = ['Hey!', "I'm Dan", "And I'm all about: "]
  const iLive = ['Challenges', 'Experiences', 'Growth', 'Life']
  const description = [
    'This was my final project for my level 5 certification, a redesign of the Metro website.\n The task was simple.',
  ]

  const projectCount = 3

  const [messageIndex, setMessageIndex] = useState(0)
  const [messageVisible, setMessageVisible] = useState(true)
  const [iLiveIndex, setIliveIndex] = useState(0)
  const [IliveVisible, setILiveVisible] = useState(false)
  const [arrowVisible, setArrowVisible] = useState(false)
  const [sampleIndex, setSampleIndex] = useState(2)
  const parallaxRef = useRef(null)
  const [titleRef, titleInView] = useInView(false)
  const [iconsRef, iconsInView] = useInView(false)
  const [skillsRef, skillsInView] = useInView(false)
  const [testref, settestref] = useState(false)

  const scroll = (to) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(to)
      console.log(parallaxRef.current)
    }
  }

  const changeProject = (sign) => {
    if (sampleIndex <= 1 && sign !== '+') {
      setSampleIndex((index) => (index = projectCount))
    } else if (sampleIndex >= projectCount && sign === '+') {
      setSampleIndex((index) => (index = 1))
    } else {
      setSampleIndex((index) => (sign === '+' ? index + 1 : index - 1))
    }
  }

  useEffect(() => {
    if (iLiveIndex === 3 && !arrowVisible) {
      setArrowVisible(true)
      parallaxRef.current.scrollTo(1)
    }
  }, [iLiveIndex, arrowVisible])

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      if (messageIndex < 2 && !loading) {
        if (messageIndex < 2 && messageVisible) {
          setMessageVisible((visible) => !visible)
        } else {
          setMessageIndex((prevIndex) => prevIndex + 1)
          setMessageVisible((visible) => !visible)
        }
      } else if (!loading) {
        setILiveVisible(true)
        const iLiveTimer = setInterval(() => {
          setIliveIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 0))
        }, 1500)

        return () => clearInterval(iLiveTimer)
      }
    }, 2000)

    return () => clearTimeout(messageTimer)
  }, [messageIndex, loading, messageVisible])

  return (
    <div>
      <div id="hero-container">
        <Parallax
          ref={parallaxRef}
          pages={4}
          style={{ bottom: '0', backgroundColor: 'rgb(0, 24, 41)' }}
          id="parallax-container"
        >
          <section>
            <ParallaxLayer
              id="layer1"
              offset={0.8}
              speed={0.85}
              style={{
                zIndex: '6',
                bottom: '0',
                backgroundPosition: 'bottom',
                backgroundImage: `url(${layer1})`,
                backgroundSize: 'contain',
              }}
            ></ParallaxLayer>

            <ParallaxLayer
              id="layer2"
              offset={0.25}
              speed={0.65}
              style={{
                zIndex: '5',
                backgroundPosition: 'bottom',
                backgroundImage: `url(${layer2})`,
                backgroundSize: 'contain',
              }}
            >
              <div id="arrows-container">
                <img
                  src={downArrow}
                  id="down-arrow"
                  alt="Scroll Down"
                  onClick={() => scroll(1)}
                  className={`hidden-up ${
                    arrowVisible ? 'visible-greeting' : ''
                  }`}
                ></img>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              id="layer3"
              offset={0.05}
              speed={0.4}
              style={{
                zIndex: '4',
                backgroundPosition: 'bottom',
                backgroundImage: `url(${layer3})`,
                backgroundSize: 'contain',
              }}
            >
              <div id="greeting-container" className="">
                <p
                  className={`hidden-up ${
                    messageVisible ? 'visible-greeting' : ''
                  }`}
                >
                  {messages[messageIndex]}
                </p>

                <p
                  id="i-live-div"
                  className={`hidden-up ${
                    IliveVisible ? 'visible-greeting' : ''
                  }`}
                >
                  {iLive[iLiveIndex]}
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              id="layer4"
              offset={0.02}
              speed={0.2}
              style={{
                zIndex: '3',
                backgroundPosition: 'bottom',
                backgroundImage: `url(${layer4})`,
                backgroundSize: 'contain',
              }}
            ></ParallaxLayer>

            <ParallaxLayer
              id="layer5"
              offset={-0.2}
              speed={0.0}
              style={{
                zIndex: '2',
                backgroundPosition: 'bottom',
                backgroundImage: `url(${layer5})`,
                backgroundSize: 'contain',
              }}
            ></ParallaxLayer>

            <ParallaxLayer
              id="layer-sky"
              offset={0}
              speed={0}
              style={{
                zIndex: '0',
                backgroundColor: '#297ea6',
                height: '35vw',
              }}
            ></ParallaxLayer>
          </section>

          <section>
            <ParallaxLayer id="skills-layer" offset={1} speed={0}>
              <div
                id="skills-title"
                ref={titleRef}
                className={testref ? 'visible-greeting' : 'hidden-up'}
              >
                SKILLS & STACK
              </div>
              <div
                id="icons-container"
                ref={iconsRef}
                className={iconsInView ? 'visible-greeting' : 'hidden-up'}
              >
                <RiJavascriptFill id="js-icon" />
                <FaReact id="react-icon" />
                <FaPhp id="php-icon" />
                <FaDocker id="docker-icon" />
                <SiMysql id="sql-icon" />
                <FaSymfony id="symfony-icon" />
                <DiNodejs id="nodejs-icon" />
                <SiMongodb id="mongodb-icon" />
              </div>
              <div
                id="skills-container"
                ref={skillsRef}
                className={skillsInView ? 'visible-greeting' : 'hidden-up'}
              >
                <div id="button-left">
                  <a onClick={() => changeProject('-')}>
                    <FaRegCircleLeft />
                  </a>
                </div>
                <div id="description-youtube-container">
                  <div id="description-box">
                    <div>{description}</div>
                    <div></div>
                  </div>
                  <div
                    id="youtube-box"
                    className={`${sampleIndex === 1 ? '' : 'hide'}`}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/TjH1Y-OLKrs?si=yr8ZPG8OaXsjnu-x"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div
                    id="youtube-box"
                    className={`${sampleIndex === 2 ? '' : 'hide'}`}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/BwaLCo_DX9U?si=9WeprpwK9CRsAdV7"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div
                    id="youtube-box"
                    className={`${sampleIndex === 3 ? '' : 'hide'}`}
                  ></div>
                </div>
                <div id="button-right">
                  <a onClick={() => changeProject('+')}>
                    <FaRegCircleRight />
                  </a>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              id="layer6"
              offset={1}
              speed={0.3}
              height="100%"
              style={{
                backgroundImage: `url(${layer6})`,
                backgroundSize: 'contain',

                zIndex: '9',
              }}
            ></ParallaxLayer>
          </section>
        </Parallax>
      </div>
    </div>
  )
}

export default Hero
