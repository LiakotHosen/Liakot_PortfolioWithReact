//import React from 'react'
//import {Link} from 'react-router-dom'
import Pro from '../components/Allproject.json';
import  "../components/Myproject.css";
const Myprojects = () => {
  return (
    <div className='my-pro'>
         <h1> My Recent Project </h1>
       

        <div className='inner'>
        { Pro && Pro.map(p => {

            return (
                <div className='every-project' key={p.id}>


                <div className='every-project-with-btn'> 
                    <img src={p.projectimage} alt="Project-Photos"/>
                    <br/>

                    {
                     <a href={p.github} className='gbtn'>Github</a>
                    }

                     {
                     <a href={p.LiveDemo} className='demobtn'>Live Demo</a>
                      }
                 
                </div>
                </div>
            )
            } )
        }
       </div>

    </div>
  )
}

export default Myprojects;

   /**  
    * 
    * <Link to="{p.github}"> Github</Link> 
                    <Link to="{p.LiveDemo}">Live Demo</Link> 
 
 */