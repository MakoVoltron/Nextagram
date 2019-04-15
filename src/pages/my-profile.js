import React from "react";
import axios from 'axios';
import { Button, Container, Row, Col } from 'reactstrap';
import '../App.css';

export default class MyProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myProfileImage: [],
            myUsername: [],
            myImages: []
        }
    }

    componentDidMount() {
        const jwt = localStorage.getItem('jwt')
        const myUsername = localStorage.getItem('myUsername')
        const myProfileImage = localStorage.getItem('myProfileImage')
        console.log(myProfileImage)

        axios({
            method: 'get',
            url: 'https://insta.nextacademy.com/api/v1/images/me',
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

            .then(result => {
                const myImages = result.data;
                this.setState({
                    myImages,
                    myUsername,
                    myProfileImage
                })
            }) 
            .catch(error => {
                console.log('ERROR:', error)

            })
            
    }
    
    render() {

        return (
            <div>
                <div className="profileContainer2">    
                    
                    <div >
                        <img className="profileImage" src={`http://next-curriculum-instagram.s3.amazonaws.com/${this.state.myProfileImage}`} />
                    </div>

                    <div className="section3">
                        <div className="section2">
                            <h2>{this.state.myUsername}</h2>
                            <Button color="primary">Follow</Button>
                        </div>
                        
                        <div>
                            <p>My name is this and that and I like chicken rice.</p>
                        </div>
                    </div>
                </div> 
         
                <div>
                    <div> <hr /> </div>
                        <div className="box">
                            <div className="image-container">
                            {this.state.myImages.map(myImage => 
                                <img key={myImage} src={myImage} />)
                            }
                            </div>
                        </div>
                </div>          
            </div>
        )
    }
}




