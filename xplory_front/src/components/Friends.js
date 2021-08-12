import React from 'react';
import david from '../pics/david.jpg'
import bruce from '../pics/bruce.jpg'
import arnold from '../pics/arnold.jpg'
import bobby from '../pics/bobby.jpg'

const Friends = () => {
    return(
        <div className="friends">
            <p>This is your freinds page! Please click on your freinds to find out where they visitted.</p>
            <p>
                <ul>
                  <li>David Attenborough</li>
                    <img src={david} alt="david" />
                  <li>Bruce Lee</li>
                    <img src={bruce} alt="bruce" />
                  <li>Arnold Swarzenegger</li>
                    <img src={arnold} alt="arnold" />
                  <li>Bobby Brown</li>
                    <img src={bobby} alt="bobby" />
                 </ul>
            </p>
        </div>
    )
}

export default Friends