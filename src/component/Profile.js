import React , {useState , useEffect} from "react";
import {Tab ,Row , Col , Nav , Form , Button} from "react-bootstrap";
import { Navigate} from "react-router-dom"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactsIcon from '@material-ui/icons/Contacts';

function Profile() {
  const [email , setEmail] =useState()
  const [username , setUsername] = useState()
  const [token , setToken] =useState(sessionStorage.getItem("token"))

  const fetchuserdata = async() =>{
    const userUrl = "http://127.0.0.1:8000/auth/user"
    const data = JSON.stringify({
      token: token
    });
    const userdata = await fetch(userUrl, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: data,
    }).then(response => response.json())
    console.log(userdata)
    setUsername(userdata.username)
    setEmail(userdata.email)
  }

  const fetchaddressdata =async () =>{
    const addressUrl = "http://127.0.0.1:8000/auth/user"
    const data = JSON.stringify({
      token: token
    });
    const addressdata = fetch(addressUrl, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: data,
    }).then(response => response.json)
  }


  useEffect(() => {
    fetchuserdata()
    fetchaddressdata()
    
  }, [])
  if(token){
  return (
    <>
    <div className="my-4">
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">< ContactsIcon />Details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"><LocationOnIcon />Address</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <div className="container ">
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="email" value={username} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              {/* <Button variant="primary" type="submit">
                Submit
              </Button> */}
          </Form>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <p>Your Address. </p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>
    </>
  );
  }
  return ( <Navigate to = "/login" />)
}

export default Profile;
