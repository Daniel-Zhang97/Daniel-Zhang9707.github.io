import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import layer4 from '../images/layer4.png'
import layer3 from '../images/layer3.png'
import layer2 from '../images/layer2.png'
import layer1 from '../images/layer1.png'
import layer5 from '../images/layer5.png'
import downArrow from '../images/down_arrow.svg'
import { useEffect, useState } from 'react'
import { RiJavascriptFill } from 'react-icons/ri'
import { FaReact, FaDocker, FaPhp, FaSymfony } from 'react-icons/fa'
import { SiMysql, SiMongodb } from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'

const Hero = ({ loading }) => {
  const messages = ['Hey!', "I'm Dan", "And I'm all about: "]
  const iLive = ['Challenges', 'Experiences', 'Growth', 'Life']

  const [messageIndex, setMessageIndex] = useState(0)
  const [messageVisible, setMessageVisible] = useState(true)
  const [iLiveIndex, setIliveIndex] = useState(0)
  const [IliveVisible, setILiveVisible] = useState(false)
  const [arrowVisible, setArrowVisible] = useState(false)

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

  if (iLiveIndex === 3 && !arrowVisible) {
    setArrowVisible(true)
  }

  return (
    <div>
      <div id="hero-container">
        <Parallax
          pages={2}
          style={{ bottom: '0', backgroundColor: 'rgb(0, 24, 41)' }}
          className="parallax-container"
        >
          <ParallaxLayer
            id="layer1"
            offset={0.8}
            speed={0.9}
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
            id="layer6"
            offset={0}
            speed={0}
            style={{
              zIndex: '0',
              backgroundColor: '#297ea6',
              height: '35%',
            }}
          ></ParallaxLayer>

          <ParallaxLayer id="skills-layer" offset={1} speed={0}>
            <div id="skills-title">SKILLS & STACK</div>
            <div id="icons-container">
              <RiJavascriptFill id="js-icon" />
              <FaReact id="react-icon" />
              <FaPhp id="php-icon" />
              <FaDocker id="docker-icon" />
              <SiMysql id="sql-icon" />
              <FaSymfony id="symfony-icon" />
              <DiNodejs id="nodejs-icon" />
              <SiMongodb id="mongodb-icon" />
            </div>
            <div id="skills-container">
              <div></div>
              <div></div>
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/TjH1Y-OLKrs?si=yr8ZPG8OaXsjnu-x"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div></div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  )
}

export default Hero
