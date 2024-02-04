import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Introduction() {
  const [text] = useTypewriter({
    words: [
      'Hi',
      "I'm Dan!",
      'And I love to code',
      'Click here to enter the matrix!',
    ],
  })

  return (
    <div id="Introduction">
      <a>
        {text} <Cursor />
      </a>
    </div>
  )
}

export default Introduction
