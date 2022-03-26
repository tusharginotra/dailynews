//import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'
import './Stylesheet.css'
export class NewsItem extends Component {
   
  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div className='newscard my-4 p-3 mb-5 bg-body  rounded' > 
      <div className='card' >
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
          
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
