const users = [
    {id: 1, name: 'x'},
    {id: 2, name: 'y'},
    {id: 3, name: 'z'}
]
undefined
users
(3) [{…}, {…}, {…}]0: {id: 1, name: "x"}1: {id: 2, name: "y"}2: {id: 3, name: "z"}length: 3__proto__: Array(0)
const currentUser = 3
undefined
users.filter(user => user.id == currentUser)
[{…}]0: {id: 3, name: "z"}length: 1__proto__: Array(0)


users.find(user => user.id == currentUser)
{id: 3, name: "z"}


users.find(user => user.id == currentUser).name
"z"




<div className="section1">
                        <img className="profileImage" src={currentUser && currentUser.profileImage}/>
                    </div>

                    <div className="section2">
                        <h2>{currentUser && currentUser.username}</h2>
                        <Button color="primary">Follow</Button>
                        
                    </div>

                    <div>
                        <p>My name is this and that and I like chicken rice.</p>
                    </div>




 
                    
                    <Row>
                    <Col md="4">  <img className="profileImage" src={currentUser && currentUser.profileImage}/>     </Col>
                    <Col md="8">  <h2>{currentUser && currentUser.username}</h2>     </Col>
                
                </Row>