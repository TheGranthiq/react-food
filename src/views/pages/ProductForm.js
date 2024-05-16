import React, { useState } from "react";
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
  Button,
} from "reactstrap";
import Header from "components/Headers/Header.js";

const Forms = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    type: "single",
  });
  const [productList, setProductList] = useState([]);
  const [bundleProducts, setBundleProducts] = useState([]);

  const handleTypeChange = (e) => {
    const { value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, type: value }));
    // Call API to fetch product list based on selected type (value)
    // For now, we'll just simulate fetching product list based on selected type
    if (value === "bundle") {
      setProductList(["Product 1", "Product 2", "Product 3"]);
    } else {
      setProductList([]);
      setBundleProducts([]);
    }
  };

  const handleAddBundleProduct = () => {
    setBundleProducts([...bundleProducts, { product: "", quantity: 1 }]);
  };

  const handleBundleProductChange = (index, field, value) => {
    const updatedBundleProducts = [...bundleProducts];
    updatedBundleProducts[index][field] = value;
    setBundleProducts(updatedBundleProducts);
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="bg-transparent">
              <h3 className="mb-0">Product</h3>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Input
                        className="form-control-alternative"
                        id="exampleFormControlInput1"
                        placeholder="Enter Product Name"
                        type="text"
                        value={product.name}
                        onChange={(e) =>
                          setProduct((prevProduct) => ({
                            ...prevProduct,
                            name: e.target.value,
                          }))
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Input
                        className="form-control-alternative"
                        placeholder="Enter Description"
                        type="textarea"
                        value={product.description}
                        onChange={(e) =>
                          setProduct((prevProduct) => ({
                            ...prevProduct,
                            description: e.target.value,
                          }))
                        }
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
                        placeholder="Upload Image"
                        type="file"
                        onChange={(e) =>
                          setProduct((prevProduct) => ({
                            ...prevProduct,
                            image: e.target.files[0],
                          }))
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <select
                        name="type"
                        value={product.type}
                        onChange={handleTypeChange}
                        className="border border-gray-300 p-2 w-100 rounded"
                      >
                        <option value="single">Single</option>
                        <option value="bundle">Bundle</option>
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
                {product.type === "bundle" && (
                  <>
                  <div className="d-flex justify-content-center">
                    <Button className="w-50" color="primary" onClick={handleAddBundleProduct}>
                      Add Bundle Product
                    </Button>
                  </div>
                    {bundleProducts.map((bundleProduct, index) => (
                      <Row key={index} className="mt-3 justify-content-center">
                        <Col md="6">
                          <FormGroup>
                            <select
                              value={bundleProduct.product}
                              onChange={(e) =>
                                handleBundleProductChange(
                                  index,
                                  "product",
                                  e.target.value
                                )
                              }
                              className="border border-gray-300 p-2 w-100 rounded"
                            >
                              <option value="">Select Product</option>
                              {productList.map((product) => (
                                <option key={product} value={product}>
                                  {product}
                                </option>
                              ))}
                            </select>
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Input
                              type="number"
                              value={bundleProduct.quantity}
                              onChange={(e) =>
                                handleBundleProductChange(
                                  index,
                                  "quantity",
                                  e.target.value
                                )
                              }
                              placeholder="Enter Quantity"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    ))}
                  </>
                )}
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
};

export default Forms;