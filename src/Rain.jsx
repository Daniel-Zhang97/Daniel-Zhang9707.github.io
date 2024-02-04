import { useState } from 'react'
import useInterval from '@use-it/interval'

const validChars = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`

const mutationChance = 0.015

const streamSize = [50, 100]

const getRandomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const getRandomChar = () => {
  return validChars.charAt(Math.floor(Math.random() * validChars.length))
}

const getRandomStream = () => {
  return new Array(getRandomRange(streamSize[0], streamSize[1]))
    .fill()
    .map((_) => getRandomChar())
}

// const getMutatedStream = (stream) => {
//   const newStream = []
//   for (let i = 1; i < stream.length; i++) {
//     if (Math.random() < mutationChance) {
//       newStream.push(getRandomChar())
//     } else {
//       newStream.push(stream[i])
//     }
//   }
//   newStream.push(getRandomChar())
//   return newStream
// }

const Rain = (props) => {
  const [stream, setStream] = useState(getRandomStream())
  const [topMargin, setTopMargin] = useState(stream.length * -25)

  useInterval(() => {
    if (topMargin > window.innerHeight) {
      setTopMargin(stream.length * -25)
    } else {
      setTopMargin(topMargin + 20)
      setStream((stream) => [
        ...stream.slice(1, stream.length),
        getRandomChar(),
      ])
    }
  }, 50)

  return (
    <div
      id="letterRain"
      style={{
        marginTop: topMargin,
      }}
    >
      {stream.map((char, index) => (
        // eslint-disable-next-line
        <a
          style={{
            marginTop: -8,
            color: index === stream.length - 1 ? '#fff' : undefined,
            opacity: index < 6 ? 0.1 + index * 0.15 : 1,
            textShadow: index === stream.length - 1 ? '#fff' : undefined,
          }}
        >
          {char}
        </a>
      ))}
    </div>
  )
}

export default Rain
