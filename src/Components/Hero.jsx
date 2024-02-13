import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import layer4 from '../images/layer4.png'
import layer3 from '../images/layer3.png'
import layer2 from '../images/layer2.png'
import layer1 from '../images/layer1.png'
import layer5 from '../images/layer5.png'

const Hero = () => {
  return (
    <div>
      <div id="hero-container">
        {/* <Layers /> */}
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
            speed={0.7}
            style={{
              zIndex: '5',
              backgroundPosition: 'bottom',
              backgroundImage: `url(${layer2})`,
              backgroundSize: 'contain',
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            id="layer3"
            offset={0.05}
            speed={0.5}
            style={{
              zIndex: '4',
              backgroundPosition: 'bottom',
              backgroundImage: `url(${layer3})`,
              backgroundSize: 'contain',
            }}
          >
            <div id="greeting-container" className="">
              WHATS UPPPPP
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            id="layer4"
            offset={0.02}
            speed={0.35}
            style={{
              zIndex: '3',
              backgroundPosition: 'bottom',
              backgroundImage: `url(${layer4})`,
              backgroundSize: 'contain',
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            id="layer5"
            offset={0.01}
            speed={0.17}
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
          >
            hithere!
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  )
}

export default Hero
