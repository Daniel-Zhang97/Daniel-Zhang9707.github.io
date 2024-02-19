import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useAnimation,
} from 'framer-motion'
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

const HeroFramer = ({ loading }) => {
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

  const titleRef = useRef(null)
  const iconsRef = useRef(null)
  const containerRef = useRef(null)

  const titleInView = useInView(titleRef)
  const iconsInView = useInView(iconsRef)
  const containerInView = useInView(containerRef)

  const titleControls = useAnimation()
  const iconsControls = useAnimation()
  const containerControls = useAnimation()

  useEffect(() => {
    if (titleInView) {
      titleControls.start('visible')
    } else {
      titleControls.start('hidden')
    }
  }, [titleInView])

  useEffect(() => {
    if (iconsInView) {
      iconsControls.start('visible')
    } else {
      iconsControls.start('hidden')
    }
  }, [iconsInView])

  useEffect(() => {
    if (containerInView) {
      containerControls.start('visible')
    } else {
      containerControls.start('hidden')
    }
  }, [containerInView])

  return (
    <div>
      <div id="hero-container">
        <section>
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
              <div id="arrows-container" className="">
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
        <section>
          <div id="parallax-page-2" className="fs">
            <motion.div
              ref={titleRef}
              id="skills-title"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.25 }}
              initial="hidden"
              animate={titleControls}
            >
              SKILLS & STACK
            </motion.div>
            <motion.div
              ref={iconsRef}
              id="icons-container"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.25 }}
              initial="hidden"
              animate={iconsControls}
            >
              <RiJavascriptFill id="js-icon" />
              <FaReact id="react-icon" />
              <FaPhp id="php-icon" />
              <FaDocker id="docker-icon" />
              <SiMysql id="sql-icon" />
              <FaSymfony id="symfony-icon" />
              <DiNodejs id="nodejs-icon" />
              <SiMongodb id="mongodb-icon" />
            </motion.div>
            <motion.div
              ref={containerRef}
              id="skills-container"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.25 }}
              initial="hidden"
              animate={containerControls}
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
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HeroFramer
