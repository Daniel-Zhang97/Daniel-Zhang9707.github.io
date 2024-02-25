import { motion, useScroll, useTransform } from 'framer-motion'
import layer4 from '../images/layer4.png'
import layer3 from '../images/layer3.png'
import layer2 from '../images/layer2.png'
import layer1 from '../images/layer1.png'
import layer5 from '../images/layer5.png'
import layer6 from '../images/layer6.png'
import downArrow from '../images/down_arrow.svg'
import { useEffect, useState } from 'react'
import { RiJavascriptFill } from 'react-icons/ri'
import { FaReact, FaDocker, FaPhp, FaSymfony } from 'react-icons/fa'
import { SiMysql, SiMongodb } from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'
import { FaRegCircleLeft, FaRegCircleRight } from 'react-icons/fa6'
import AnimatedInView from './AnimatedInView'
import AnimatedInViewLeft from './AnimatedInViewLeft'
import AnimatedInViewUp from './AnimatedInViewUp'
import AnimatedInViewRight from './AnimatedInViewRight'

const HeroFramer = ({ loading }) => {
  const messages = ['Hey!', "I'm Dan"]
  const iLive = ['Challenges', 'Experiences', 'Growth', 'Life']
  const description = [
    `<div class='description-title'>Metro Re-imagined</div>
    This was my final project for my level 5 certification, a revamp of the Metro website. \n
    I worked together with the UX team who provided the design and overall desired feeling for the website. \n
    I added my own touches with some details like spacing and animations. It is after all, the little touches that make a <del>house</del> page feel like a home.`,

    `<div class='description-title'>Selma Revenue Widget</div> 
      As part of my internship at Selma, I was tasked with creating a full-stack revenue widget for their platform. \n
      I had no previous experience with PHP nor Symfony/Composer and was only given the instruction of 'Make a revenue widget'. \n
      So, with full creative freedom and a new language to learn, of course, I loved the challenge. \n
      (integrated with a MySQL relational DB backend)`,

    `<div class='description-title'>My Portfolio Page</div>
        Standard CVs are soooo 2018, having an online hub page is all the rage these days. \n
        So of course, I had to jump in, if only to show a bit more of my own brand of design and feel. \n
        The main goal of the page was to provide a more consumable, aesthetically pleasing way to show a CV. And I hope you enjoy it :)
      `,
  ]

  const links = [
    'https://github.com/Daniel-Zhang97/M5MD',
    'https://github.com/Daniel-Zhang97/Selma_Widgets_Frontend',
    'https://github.com/Daniel-Zhang97/Portfolio',
  ]
  const youtubeLinks = [
    'https://www.youtube.com/embed/TjH1Y-OLKrs?si=yr8ZPG8OaXsjnu-x',
    'https://www.youtube.com/embed/BwaLCo_DX9U?si=9WeprpwK9CRsAdV7',
    'https://www.youtube.com/embed/TTB2__ga68c?si=Ho3uVWVTGqxZLCFA',
  ]

  const projectCount = 3

  const [messageIndex, setMessageIndex] = useState(0)
  const [messageVisible, setMessageVisible] = useState(true)
  const [allAboutVisible, setAllAboutVisible] = useState(false)
  const [iLiveIndex, setIliveIndex] = useState(0)
  const [IliveVisible, setILiveVisible] = useState(false)
  const [arrowVisible, setArrowVisible] = useState(false)
  const [sampleIndex, setSampleIndex] = useState(1)
  const [projectButtonClicked, setProjectButtonClicked] = useState(false)

  const changeProject = (sign) => {
    let newIndex = 0
    if (sampleIndex <= 1 && sign !== '+') {
      newIndex = projectCount
    } else if (sampleIndex >= projectCount && sign === '+') {
      newIndex = 1
    } else {
      newIndex = sign === '+' ? sampleIndex + 1 : sampleIndex - 1
    }

    setSampleIndex(-1)
    setProjectButtonClicked(true)

    setTimeout(() => {
      setSampleIndex(newIndex)
    }, 50)

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
      if (messageIndex < 2 && !loading && !allAboutVisible) {
        if (messageIndex < 1 && messageVisible) {
          setMessageVisible((visible) => !visible)
        } else if (messageIndex === 1) {
          setAllAboutVisible((allAboutVisible) => (allAboutVisible = true))
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
  }, [messageIndex, loading, messageVisible, allAboutVisible])

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
                className={`hidden-up ${
                  allAboutVisible ? 'visible-greeting' : ''
                }`}
              >
                And I'm all about:
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
                top: '70vh',
              }}
            ></motion.div>
            <motion.div
              id="layer2"
              className="parallax-layer"
              style={{
                backgroundImage: `url(${layer2})`,
                zIndex: '8',
                y: translateY2,
                top: '25vh',
              }}
            ></motion.div>
            <motion.div
              id="layer2"
              className="parallax-layer"
              style={{
                zIndex: '10',
                y: translateY2,
                top: '25vh',
              }}
            >
              <div id="arrows-container">
                <img
                  onClick={() => changePage('#page-2')}
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
                top: '96vh',
              }}
            ></motion.div>
            <motion.div
              id="layer3"
              className="parallax-layer"
              style={{
                backgroundImage: `url(${layer3})`,
                zIndex: '7',
                y: translateY3,
                top: '5vh',
              }}
            ></motion.div>
            <motion.div
              id="layer4"
              className="parallax-layer"
              style={{
                backgroundImage: `url(${layer4})`,
                zIndex: '6',
                y: translateY4,
                top: '7vh',
              }}
            ></motion.div>
            <motion.div
              id="layer5"
              className="parallax-layer"
              style={{
                backgroundImage: `url(${layer5})`,
                zIndex: '5',
                y: translateY5,
                top: '-10vh',
              }}
            ></motion.div>
          </div>
        </section>

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
                  className={`${sampleIndex === 1 ? 'color-highlight' : ''}`}
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
                  className={`${
                    sampleIndex === 1 || sampleIndex === 2
                      ? 'color-highlight'
                      : ''
                  }`}
                />
                <SiMongodb
                  id="mongodb-icon"
                  className={`${sampleIndex === 1 ? 'color-highlight' : ''}`}
                />
              </div>
            </AnimatedInView>

            <div id="skills-container">
              <AnimatedInView>
                <div id="button-left">
                  <a onClick={() => changeProject('-')}>
                    <FaRegCircleLeft />
                  </a>
                </div>
              </AnimatedInView>
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
                    <div
                      id="description"
                      dangerouslySetInnerHTML={{
                        __html: description[sampleIndex - 1],
                      }}
                    ></div>
                    <div id="links">
                      <a
                        href={links[sampleIndex - 1]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Source Code
                      </a>
                    </div>
                  </div>

                  <div id="youtube-box">
                    <iframe
                      width="100%"
                      height="100%"
                      src={youtubeLinks[sampleIndex - 1]}
                      title=" "
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; "
                      allowFullScreen
                      color="blue"
                      rel="0"
                      style={{ borderColor: '#3fc2ff' }}
                    ></iframe>
                  </div>
                </div>
              </AnimatedInView>
              <AnimatedInView>
                <div id="button-right">
                  <a onClick={() => changeProject('+')}>
                    <FaRegCircleRight />
                  </a>
                </div>
              </AnimatedInView>
            </div>
            <motion.div
              id="layer6"
              className="parallax-layer"
              style={{
                backgroundImage: `url(${layer6})`,
                zIndex: -1,
                y: translateY1,
                top: '50vh',
                position: 'absolute',
              }}
            ></motion.div>
          </div>
          <div
            id="arrows-container2"
            className="df-center"
            onClick={() => changePage('#page-3')}
          >
            <img
              src={downArrow}
              id="down-arrow2"
              alt="Scroll Down"
              className={`${arrowVisible ? 'visible-greeting' : 'hidden-up'}`}
            ></img>
          </div>
        </section>
        <div id="spacer2"></div>

        <section id="page-3">
          <AnimatedInViewLeft>
            <div id="about-me-left">
              <div id="about-about">About</div>
              <AnimatedInViewUp>
                <div className="about-me-text-box-left">
                  <p className="about-me-inner-text">
                    Efficiency matters. <br /> Which is why I've spent so much
                    time both in the real world, as well as in my own mind,
                    searching for ways to improve my learning rate. <br />
                    To gain understanding on how I function and how I absorb,
                    process, and integrate new information. <br />
                  </p>
                </div>
              </AnimatedInViewUp>
              <AnimatedInViewUp>
                <div className="about-me-subtitle-left">Embracing Change</div>
              </AnimatedInViewUp>
              <AnimatedInViewUp>
                <div className="about-me-text-box-left">
                  <p className="about-me-inner-text">
                    But let's not forget that at the end of the day, everything
                    comes back to PEOPLE. <br />
                    Shown in my previous work history, I love working with both
                    systems, as well as people, to understand their perspectives
                    and connect with them, so that we may all benefit.
                  </p>
                </div>
              </AnimatedInViewUp>
            </div>
          </AnimatedInViewLeft>
          <div id="about-me-right">
            <AnimatedInViewRight>
              <div id="about-me-me">Me</div>
            </AnimatedInViewRight>
            <AnimatedInViewRight>
              <div className="about-me-subtitle-right">Learning to Learn</div>
            </AnimatedInViewRight>
            <AnimatedInViewRight>
              <div className="about-me-text-box-right">
                <p className="about-me-inner-text">
                  In a landscape as rapidly developing as the world of
                  computers, it's adapt or become obsolete. <br />
                  Luckily, I wholeheartedly embrace change in all aspects of my
                  life. <br />
                  After all, what is more exciting and captivating than the new
                  and unknown?
                </p>
              </div>
            </AnimatedInViewRight>
            <AnimatedInViewRight>
              <div className="about-me-subtitle-right">Systems & People</div>
            </AnimatedInViewRight>
          </div>
        </section>

        <section id="page-4" className="fs df-center">
          <AnimatedInView>
            <div id="page-4-text">
              Let's get started.
              <br /> Shall we?
            </div>
          </AnimatedInView>
        </section>
      </div>
    </div>
  )
}

export default HeroFramer
