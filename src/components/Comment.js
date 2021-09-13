import React from 'react';
import faker from 'faker';

const  Comment=(props)=> {
 return (
    <div className="comment">
    <a className="avatar">
      <img src={faker.image.avatar()}/>
    </a>
    <div className="content">
    <a className="author">{props.author}</a>
      <div className="metadata">
        <span className="date">{props.time}</span>
      </div>
      <div className="text">
        {props.text}
      </div>
    </div>
  </div>
 );
}
export default Comment;