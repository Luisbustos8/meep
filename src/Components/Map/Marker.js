import React, {useState, useEffect} from 'react';
import './Map.css';
const Marker = (props) => {
    const { color, name, id } = props;

 
    return (
      <div>
       
        <div
          className={props.className}
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
        />
        <div className="pulse" />

      </div>
    );
  };

  export default Marker;