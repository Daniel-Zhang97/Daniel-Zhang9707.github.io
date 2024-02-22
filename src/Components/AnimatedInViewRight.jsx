import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const AnimatedInViewRight = ({
  children,
  width = 'fit-content',
  height = 'fit-content',
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.15 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
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
          hidden: { opacity: 0, x: '100%' },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.6 }}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default AnimatedInViewRight
