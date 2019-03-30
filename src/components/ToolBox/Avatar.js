import React from 'react';
import logo40 from '../../images/jpg/1.jpg';
import logo24 from '../../images/jpg/2.jpg';

const Avatar = (props) => (
  <div className={`c-avatar ${props.modifierClasses}`}>
    <img
      src={(props.modifierClasses === 'c-avatar--as-author') ? logo24 : logo40}
      alt="www.sankha.lk"
    />
  </div>
)

export default Avatar;
