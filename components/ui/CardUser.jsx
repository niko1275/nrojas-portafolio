import React from 'react'
import { DevImg } from '../DevImg'

export const CardUser = () => {
    
  return (
<div class="card">
    <div class="img-container">
        <div class="img">
            <DevImg
            styles='bg-hero_shape w-[400px] h-[300px] bg-no-repeat relative bg-bottom '
            img='/hero/avatar.png'
            /> 
          
        </div>
        <div class="description card">
            <span className="title flex justify-center ">
                Nicolas Rojas
            </span>
        </div>
    </div>
</div>
  )
}
