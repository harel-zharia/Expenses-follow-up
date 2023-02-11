import React from 'react';
// import '../Css/Card.css';
import './Card.css';

export default function Card(props) {
    const classes = 'card ' + props.className;//props.className brings any className that is passed as a parameter inside
    //the component rendering(as of ExpenseItem component) and I can use the style of that className as it is
  return (
    <div className={classes}>
        {props.children}
        {/* With props.children, this specific component will impement it's css attribute to all the elements it's wrapping */}
    </div>
  )
}