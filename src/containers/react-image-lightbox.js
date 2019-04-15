import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import GracefulImage from '../react-graceful-image';


import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
 

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  openLightbox = (imageIndex) => {
    this.setState({ isOpen: true, photoIndex: imageIndex })
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
    const images=this.props.images;
 
    return (
      <div className="box">
      {this.props.images.map((url, index) =>
            <div
                className="img-container imgMargin d-inline-block"
                onClick={() => this.openLightbox(index)}
            >
                <GracefulImage url={url}></GracefulImage>
            </div>
        )}
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
