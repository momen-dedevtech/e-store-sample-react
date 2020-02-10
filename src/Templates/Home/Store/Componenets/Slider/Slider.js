import React from 'react';

import img1 from './src/img1.jpg'
import img2 from './src/img2.jpg'
import img3 from './src/img3.jpg'
import img4 from './src/img4.jpg'
import img5 from './src/img5.jpg'
import img6 from './src/img6.jpg'

function Slider(){
  // const style = {

  //   position: 'relative',
  //   zIndex: '-1'

  // }
  
  return (
    <div id="mainSlider" className="carousel carousel-fade slide" data-ride="carousel">

      {/* <!-- Indicators --> */}
      {/* <ul class="carousel-indicators">
        <li data-target="#mainSlider" data-slide-to="0" class="active"></li>
        <li data-target="#mainSlider" data-slide-to="1"></li>
        <li data-target="#mainSlider" data-slide-to="2"></li>
        <li data-target="#mainSlider" data-slide-to="3"></li>
        <li data-target="#mainSlider" data-slide-to="4"></li>
        <li data-target="#mainSlider" data-slide-to="5"></li>
      </ul> */}

      {/* <!-- The slideshow --> */}
      <div className="carousel-inner">
        <div className="d-block w-100 carousel-item active">
          <img src={img1} alt="Los Angeles" width="100%" height="418px"/>
          {/* <div className="carousel-caption d-none d-md-block">
            <h5>Slide 1</h5>
            <p>Test Description 1</p>
          </div> */}
        </div>
        <div className="d-block w-100 carousel-item">
          <img src={img2} alt="Chicago" width="100%" height="418px"/>
          {/* <div className='carousal-caption'>
            <h5>Slide 2</h5>
            <p>Test Description 2</p>
          </div> */}
        </div>
        <div className="d-block w-100 carousel-item">
          <img src={img3} alt="New York" width="100%" height="418px"/>
          {/* <div className='carousal-caption'>
            <h5>Slide 3</h5>
            <p>Test Description 3</p>
          </div> */}
        </div>
        <div className="d-block w-100 carousel-item">
          <img src={img4} alt="New York" width="100%" height="418px"/>
          {/* <div className='carousal-caption'>
            <h5>Slide 4</h5>
            <p>Test Description 4</p>
          </div> */}
        </div>
        <div className="d-block w-100 carousel-item">
          <img src={img5} alt="New York" width="100%" height="418px"/>
          {/* <div className='carousal-caption'>
            <h5>Slide 5</h5>
            <p>Test Description 5</p>
          </div> */}
        </div>
        <div className="d-block w-100 carousel-item">
          <img src={img6} alt="New York" width="100%" height="418px"/>
          {/* <div className='carousal-caption'>
            <h5>Slide 6</h5>
            <p>Test Description 6</p>
          </div> */}
        </div>
      </div>
    </div>
  );

}

export default Slider;

