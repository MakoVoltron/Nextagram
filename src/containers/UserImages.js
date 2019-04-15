import React from 'react';
import axios from 'axios';
// import { Image } from 'react-bootstrap';
import MDSpinner from 'react-md-spinner';
import 'react-image-lightbox/style.css';
// import GracefulImage from './react-graceful-image';
import LightboxExample from './react-image-lightbox';

class UserImages extends React.Component {


    state = {
        images: [],
        loading: true
    }
        
    componentDidMount(){
        console.log(this.props.userId)
        axios.get('https://insta.nextacademy.com/api/v1/images?userId=' + this.props.userId)
        .then(result => {
            this.setState( {images: result.data, loading: false} );
        })
        .catch(error => {
          console.log('Oops, looks like we have an error:', error)
        } )
      }
    
      render(){
        //Loading Spinner
        if (this.state.loading) {
            return <div className="spinner"><MDSpinner size={75} /></div>
        }

        if (!this.state.images.length) {
            return "No images for this user"
        }

        return (
            <LightboxExample images={this.state.images}></LightboxExample>
        )
      }
}

export default UserImages;