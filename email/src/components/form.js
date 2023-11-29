import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import axios from "axios";
import OneSignal from "react-onesignal";

const Form1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mob: "",
    address: "",
    feedback:"",
  });

  // const [initialized, setInitialized] = useState(true);
  // const  runOneSignal = async () => {
  //   await OneSignal.init({ appId: '16c4cb71-f882-4b8b-87a2-b47fdf104988', allowLocalhostAsSecureOrigin: true});
  //   OneSignal.Slidedown.promptPush({force:true});
  // }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // useEffect(() => {
  //   runOneSignal();
  // });


  const addApi = () => {
    axios
      .post("http://localhost:3001/addContact", formData)

      .then(function (response) {
        console.log("resp-", response);

         if (response.status === 200) {
          alert("feedback form submitted")
          //  navigate("/Accountlist");
         }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleSubmit  = async (e) => {
    e.preventDefault();
    // Handle form submission here, you can access form data in `formData` state
    console.log("Form data:", formData);
    // You can perform any further actions here, like making API calls, etc.
    // addApi();
    // await OneSignal.init({ appId: '16c4cb71-f882-4b8b-87a2-b47fdf104988', allowLocalhostAsSecureOrigin: true});
    OneSignal.Slidedown.promptPush({force:true});

    console.log("tagging");
    // OneSignal.sendTag('tech',tag).then
    // OneSignal.Slidedown.promptPush();
    // var tag = "test";
    // OneSignal.sendTag('test',tag).then(()=>{
    //   console.log("tagged")
    // })
  };

  
  return (
    <Form onSubmit={handleSubmit}>
      <Container>

        <Col md="7">
        <h2>Feedback Form</h2>

          <Row className="mb-3">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              
              />
            </Form.Group>

            <Form.Group controlId="formmob">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact number"
                name="mob"
                value={formData.mob}
                onChange={handleChange}
              
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              
              />
            </Form.Group>

            <Form.Group controlId="formFeedback">
              <Form.Label>Feedback</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                
              />
            </Form.Group>
            
            


            <Button variant="primary" type="submit" className="mt-3 btn btn-sm btn-primary">
              Submit
            </Button>
          </Row>
        </Col>
      </Container>
    </Form>
  );
};

export default Form1;
