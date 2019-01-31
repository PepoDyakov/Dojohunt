import React, { Component } from 'react';

const styles = {
  color: 'white', 
  background: 'grey',
  padding: '15px 10px',
  display: 'inline-flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)'
}
const TestMarker = (props) => {
  return (
    <div style={styles}> 
      {props.text}
    </div>
  )
}

export default TestMarker;