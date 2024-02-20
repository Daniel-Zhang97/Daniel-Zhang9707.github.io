import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { FaLeftLong } from 'react-icons/fa6'

const AnimatedInView = ({
  children,
  width = 'fit-content',
  height = 'fit-content',
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.8 })
  const controls = useAnimation()
  const slideControl = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
      slideControl.start('visible')
    } else {
      controls.start('hidden')
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
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0, y: 100 },
          visible: { left: '100%', y: 0 },
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
          borderRadius: 40,
        }}
      />
    </div>
  )
}

export default AnimatedInView
