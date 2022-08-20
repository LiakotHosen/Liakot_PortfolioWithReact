import React from 'react'

import Cert from '../components/Recorde_certificate.json';
const Certificates = () => {
  return (
    <div className='my-certi'>

        <br />
        <div className='m2'>
            <strong>
                Certificates
            </strong>
        </div>
        <br/>

        <div className='inner'>
    

        { Cert && Cert.map(c => {

            return (
                
                  <div className='every-certifi' key={c.id} >
                    <div className='certifi-with-caption'>
                   
                <img src={c.certiimage} alt="cetificatePhotos"/>
                </div>

                 </div>
                    
        
            )
            } )
        }

        </div>

       



    </div>
  )
}


export default Certificates;