import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description,Imageurl,newsURL } = this.props;

    return (
      <>
        <div className="container my-3">
          <div className="card" style={{ width: "18rem;" }}>
            <img
              src={Imageurl}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p class="card-text"><small>By  {this.props.author? this.props.author:"Unknown"} on {new Date(this.props.date).toGMTString()} </small></p>

              <a href={newsURL} target="_blank"className="btn btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
