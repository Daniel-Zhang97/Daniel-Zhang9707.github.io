import './Matrix.css'
import Rain from './Rain'

const Matrix = () => {
  const streamCount = Math.floor(window.innerWidth / 25)

  return (
    <div id="matrixContainer">
      {new Array(streamCount).fill().map((_) => (
        <Rain />
      ))}
    </div>
  )
}

export default Matrix
