import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.postimg.cc/J4K31Wd3/3.jpg" className="d-block w-100 " alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2>Welcome to iCoder</h2>
        <p>Technology News, Development and Trends</p>
        <button className="btn btn-danger">Technology</button>
        <button className="btn btn-primary">Web Development</button>
        <button className="btn btn-success">Tech Fun</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.postimg.cc/mg2wMrF6/2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h2>The Best Coding Blog</h2>
        <p>Technology News, Development and Trends</p>
        <button className="btn btn-danger">Technology</button>
        <button className="btn btn-primary">Web Development</button>
        <button className="btn btn-success">Tech Fun</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.postimg.cc/rF5bgzsV/1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h2>Award winning Blog</h2>
        <p></p>
        <button className="btn btn-danger">Technology</button>
        <button className="btn btn-primary">Web Development</button>
        <button className="btn btn-success">Tech Fun</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
