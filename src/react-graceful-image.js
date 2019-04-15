import React, { Component } from "react";
import Image from "react-graceful-image";

class GracefulImage extends Component {
  render() {
    return (
      <Image 
        src= {this.props.url}
        width="100%"
        height="100%"
        style={{ objectFit: 'cover' }}
        alt="My awesome image"
      />
    );
  }
}

export default GracefulImage;