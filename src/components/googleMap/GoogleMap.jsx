import React from 'react'
import './googleMap.css'

const GoogleMap = () => {
  return (
    <>
 <div style={{ width: '100%', height: '323px'}}>
      <iframe className='map-fluid' width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1021.7157467252316!2d-65.2068663953605!3d-26.836601080919728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1712000100735!5m2!1ses-419!2sar"
        allowFullScreen="" loading="lazy"/>
    </div>
    </>
  )
}

export default GoogleMap


