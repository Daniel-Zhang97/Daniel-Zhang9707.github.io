import { motion, useScroll, useTransform } from 'framer-motion'
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
import AnimatedInView from './AnimatedInView'

const HeroFramer = ({ loading }) => {
  const messages = ['Hey!', "I'm Dan", "And I'm all about: "]
  const iLive = ['Challenges', 'Experiences', 'Growth', 'Life']
  const description = [
    'This was my final project for my level 5 certification, a redesign of the Metro website.\n The task was simple.',
    'Selma Widget',
  ]

  const projectCount = 3

  const [messageIndex, setMessageIndex] = useState(0)
  const [messageVisible, setMessageVisible] = useState(true)
  const [iLiveIndex, setIliveIndex] = useState(0)
  const [IliveVisible, setILiveVisible] = useState(false)
  const [arrowVisible, setArrowVisible] = useState(false)
  const [sampleIndex, setSampleIndex] = useState(1)
  const [projectButtonClicked, setProjectButtonClicked] = useState(false)

  const changeProject = (sign) => {
    if (sampleIndex <= 1 && sign !== '+') {
      setSampleIndex(projectCount)
      setProjectButtonClicked(true)
    } else if (sampleIndex >= projectCount && sign === '+') {
      setSampleIndex(1)
      setProjectButtonClicked(true)
    } else {
      setSampleIndex(sign === '+' ? sampleIndex + 1 : sampleIndex - 1)
      setProjectButtonClicked(true)
    }

    setTimeout(() => {
      setProjectButtonClicked(false)
    }, 200)
  }

  const changePage = (targetSelector) => {
    const targetElement = document.querySelector(targetSelector)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      })
    }
  }

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

  useEffect(() => {
    if (iLiveIndex === 3 && !arrowVisible) {
      setArrowVisible(true)
    }
  }, [iLiveIndex, arrowVisible])

  const { scrollYProgress } = useScroll()

  const translateY1 = useTransform(scrollYProgress, [0, 1], [0, -2000])
  const translateY2 = useTransform(scrollYProgress, [0, 1], [0, -1500])
  const translateY3 = useTransform(scrollYProgress, [0, 1], [0, -800])
  const translateY4 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const translateY5 = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div>
      <div id="hero-container">
        <section id="page-1">
          <div id="parallax-page-1" className="fs">
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
            <motion.div
              id="layer1"
              className="parallax-layer"
              style={{
                backgroundImage: `url(${layer1})`,
                zIndex: '9',
                y: translateY1,
                top: '88vh',
              }}
            ></motion.div>
            <motion.div
              id="layer2"
              className="parallax-layer"
              style={{
                backgroundImage: `url(${layer2})`,
                zIndex: '8',
                y: translateY2,
                top: '35vh',
              }}
            >
              <div id="arrows-container" onClick={() => changePage('#page-2')}>
                <img
                  src={downArrow}
                  id="down-arrow"
                  alt="Scroll Down"
                  className={`${
                    arrowVisible ? 'visible-greeting' : 'hidden-up'
                  }`}
                ></img>
              </div>
            </motion.div>
            <motion.div
              id="mountain-hider"
              className="parallax-layer"
              style={{
                backgroundColor: '#001829',
                zIndex: '7',
                y: translateY2,
                top: '150vh',
              }}
            ></motion.div>
            <motion.div
              id="layer3"
              className="parallax-layer"
              style={{
                backgroundImage: `url(${layer3})`,
                zIndex: '7',
                y: translateY3,
                top: '15vh',
              }}
            ></motion.div>
            <motion.div
              id="layer4"
              className="parallax-layer"
              style={{
                backgroundImage: `url(${layer4})`,
                zIndex: '6',
                y: translateY4,
                top: '13vh',
              }}
            ></motion.div>
            <motion.div
              id="layer5"
              className="parallax-layer"
              style={{
                backgroundImage: `url(${layer5})`,
                zIndex: '5',
                y: translateY5,
                top: '-6vh',
              }}
            ></motion.div>
          </div>
        </section>

        <div id="spacer"></div>

        <section className="background-db" id="page-2">
          <div id="parallax-page-2" className="fs df-center">
            <AnimatedInView>
              <div id="skills-title" className="df-center">
                SKILLS & STACK
              </div>
            </AnimatedInView>
            <AnimatedInView>
              <div id="icons-container">
                <RiJavascriptFill
                  id="js-icon"
                  className={`${
                    sampleIndex === 1 || sampleIndex === 3
                      ? 'color-highlight'
                      : ''
                  }`}
                />
                <FaReact
                  id="react-icon"
                  className={`${
                    sampleIndex === 1 || sampleIndex === 3
                      ? 'color-highlight'
                      : ''
                  }`}
                />
                <FaPhp
                  id="php-icon"
                  className={`${sampleIndex === 2 ? 'color-highlight' : ''}`}
                />
                <FaDocker
                  id="docker-icon"
                  className={`${
                    sampleIndex === 1 || sampleIndex === 3
                      ? 'color-highlight'
                      : ''
                  }`}
                />
                <SiMysql
                  id="sql-icon"
                  className={`${sampleIndex === 2 ? 'color-highlight' : ''}`}
                />
                <FaSymfony
                  id="symfony-icon"
                  className={`${sampleIndex === 2 ? 'color-highlight' : ''}`}
                />
                <DiNodejs
                  id="nodejs-icon"
                  className={`${sampleIndex === 1 ? 'color-highlight' : ''}`}
                />
                <SiMongodb
                  id="mongodb-icon"
                  className={`${sampleIndex === 1 ? 'color-highlight' : ''}`}
                />
              </div>
            </AnimatedInView>

            <div id="skills-container">
              <div id="button-left">
                <a onClick={() => changeProject('-')}>
                  <FaRegCircleLeft />
                </a>
              </div>
              <AnimatedInView>
                <div id="description-youtube-container">
                  <div
                    className={`project-slider ${
                      projectButtonClicked ? 'project-next' : ''
                    }`}
                  >
                    {' '}
                  </div>
                  <div id="description-box">
                    <div>{description[sampleIndex - 1]}</div>
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
              </AnimatedInView>
              <div id="button-right">
                <a onClick={() => changeProject('+')}>
                  <FaRegCircleRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <AnimatedInView>
            <div id="testing">testingggggg</div>
          </AnimatedInView>
        </section>
      </div>
    </div>
  )
}

export default HeroFramer
