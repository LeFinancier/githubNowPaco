import React, { Component } from 'react';

import { Carousel } from 'antd';


var sectionTokyo = {
  width: "100%",
  height: "500px",
  backgroundImage: "url(https://media.jtdwjcwq6f4wp4ce.com/nh/TOKYO-BANNER.jpg)",
};

var sectionKyoto = {
  width: "100%",
  height: "500px",
  backgroundImage: "url(https://i1.wp.com/japonismo.com/wp-content/uploads/2012/09/El-templo-Kinkakuji-de-Kioto.jpg?fit=1400%2C700&ssl=1)"
};

var sectionNara = {
  width: "100%",
  height: "500px",
  backgroundImage: "url(https://cdn-images-1.medium.com/max/2000/1*qi7b2rY6eGJ-y8kOLHIYSA.jpeg)"
};

var sectionKanazawa = {
  width: "100%",
  height: "500px",
  backgroundImage: "url(http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/2l/s7/p02ls7ym.jpg)"
};

class carousel extends Component {
  state = {
    size: 'large'
  }
  render() {
    return (
      <Carousel autoplay>
        <div>
          <h1  style={sectionTokyo}>
            <a className="span" href="#climaTokyo">
              Tokyo
            </a>
          </h1>
        </div>
        <div>
          <h1 style={sectionKyoto}>
            <a className="span" href="#climaKyoto">
              Kyoto
            </a>
          </h1>
        </div>
        <div>
          <h1 style={sectionNara}>
            <a className="span" href="#climaNara">
              Nara
            </a>
          </h1>
        </div>
        <div>
          <h1 style={sectionKanazawa}>
            <a className="span" href="#climaKanazawa">
              Kanazawa
            </a>            
          </h1>
        </div>
      </Carousel>
    )
  }
}

export default carousel;