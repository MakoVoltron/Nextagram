import React from "react";
import UserImages from "../containers/UserImages";
// import user from './HomePage';
import { Button, Container, Row, Col } from 'reactstrap';
import '../App.css';

class UserProfilePage extends React.Component {
    render() {

        const { id } = this.props.match.params
        const currentUser = this.props.allUsers.find
            (user => user.id == id)

        return (
            <div>
                <div className="profileContainer2">
                    <div>
                        <img className="profileImage" src={currentUser && currentUser.profileImage} />
                    </div>

                    <div className="section3">
                        <div className="section2">
                            <h2>{currentUser && currentUser.username}</h2>
                            <Button color="primary">Follow</Button>
                        </div>

                        <div>
                            <p>My name is this and that and I like chicken rice.</p>
                        </div>
                    </div>

                </div>


                <div>
                    <div> <hr /> </div>
                    <UserImages userId={this.props.match.params.id} />
                </div>


            </div>
        )
    }
}

export default UserProfilePage