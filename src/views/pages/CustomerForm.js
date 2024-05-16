import React from "react";


// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Container,
  Card,
  CardHeader,
  CardBody,
  Button
} from "reactstrap";

import Header from "components/Headers/Header.js";

class Forms extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Container className="mt--7" fluid>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Customer</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="exampleFormControlInput1"
                          placeholder="Enter Customer Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          placeholder="Additional Detail"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="exampleFormControlInput1"
                          placeholder="Enter Mobile No"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          placeholder="Address"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Button color="success" type="button">
                          Submit
                        </Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </div>
      </Container>
      </>
    );
  }
}

export default Forms;