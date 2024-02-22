import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const AnimatedInViewLeft = ({
  children,
  width = 'fit-content',
  height = 'fit-content',
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.15 })
  const controls = useAnimation()
  const slideControl = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
      slideControl.start('visible')
    } else {
      controls.start('hidden')
      slideControl.start('hidden')
    }
  }, [inView])

  return (
    <div
      ref={ref}
      style={{
        width: width,
        position: 'relative',
        borderRadius: 40,
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: '-100%' },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.6 }}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { right: 0, x: '100%' },
          visible: { right: '100%', x: 0 },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          backgroundColor: '#b0235f',
        }}
      />
    </div>
  )
}

export default AnimatedInViewLeft
