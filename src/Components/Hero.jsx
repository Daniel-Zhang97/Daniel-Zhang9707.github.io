import layer1 from '../images/layer1.png'
import layer2 from '../images/layer2.png'
import layer3 from '../images/layer3.png'
import layer4 from '../images/layer4.png'
import layer5 from '../images/layer5.png'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Hero = () => {
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
            offset={0.65}
            speed={0.8}
            style={{
              backgroundImage: `url(${layer1})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              zIndex: '6',
              bottom: '0',
              backgroundPosition: 'bottom',
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            id="layer2"
            offset={0.4}
            speed={0.5}
            style={{
              backgroundImage: `url(${layer2})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              zIndex: '5',
              backgroundPosition: 'bottom',
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            id="layer3"
            offset={0}
            speed={0.3}
            style={{
              backgroundImage: `url(${layer3})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              zIndex: '4',
              backgroundPosition: 'bottom',
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            id="layer4"
            offset={0}
            speed={0.2}
            style={{
              backgroundImage: `url(${layer4})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              zIndex: '3',
              backgroundPosition: 'bottom',
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            id="layer5"
            offset={0}
            speed={0.1}
            style={{
              backgroundImage: `url(${layer5})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              zIndex: '2',
              backgroundPosition: 'bottom',
              backgroundColor: 'rgb(41, 126, 166)',
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            id="layer6"
            offset={1}
            speed={0}
            style={{
              zIndex: '10',
              backgroundColor: 'rgb(0, 24, 41)',
              height: '100%',
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
