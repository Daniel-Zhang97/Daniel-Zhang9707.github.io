import React, { useState, useEffect } from 'react'

const LoadingScreen = ({ loading }) => {
  return (
    <div id="loading-screen" className={loading ? 'loading' : 'loaded'}>
      <h1 id="loading-text" className="w100">
        Preparing Excellence
      </h1>
    </div>
  )
}

export default LoadingScreen
