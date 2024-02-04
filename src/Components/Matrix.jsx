import Introduction from './Introduction'
import './Matrix.css'
import Rain from './Rain'

const Matrix = () => {
  const streamCount = Math.floor(window.innerWidth / 25)

  return (
    <div id="matrixContainer">
      {new Array(streamCount).fill().map((_) => (
        <Rain />
      ))}
      <Introduction />
    </div>
  )
}

export default Matrix
