import React, { useEffect, useRef } from 'react'
import credentials from '../../credentials';
import './Map.css'

export default function Map({ options, onMount, className }) {
  const props = { ref: useRef(), className }
  const onLoad = () => {
    const map = new window.google.maps.Map(props.ref.current, options)
    onMount && onMount(map)
  }

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement(`script`)
      script.type = `text/javascript`
      script.src =
        `https://maps.google.com/maps/api/js?key=` +
        credentials.apikey
      const headScript = document.getElementsByTagName(`script`)[0]
      headScript.parentNode.insertBefore(script, headScript)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  })
  

  return (
    <div className='map-box'>
        <div {...props} className ='map'  />
    </div>
  )
}

Map.defaultProps = {
  options: {
    center: { lat: 38.7071, lng: -9.13549 },
    zoom: 10,
  },
}
