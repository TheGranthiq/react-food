import React from "react";
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

class InvoiceForm extends React.Component {
  state = {
    invoices: [{ id: 1, products: [], expanded: true, date: new Date() }],
  };

  handleAddInvoice = () => {
    const newInvoice = {
      id: this.state.invoices.length + 1,
      products: [],
      expanded: false,
      date: new Date(),
    };
    this.setState((prevState) => ({
      invoices: [...prevState.invoices, newInvoice],
    }));
  };

  handleAddProduct = (invoiceId) => {
    this.setState((prevState) => ({
      invoices: prevState.invoices.map((invoice) =>
        invoice.id === invoiceId
          ? {
              ...invoice,
              products: [
                ...invoice.products,
                { id: invoice.products.length + 1, name: "", quantity: 1 },
              ],
            }
          : invoice
      ),
    }));
  };

  handleProductChange = (invoiceId, productId, field, value) => {
    this.setState((prevState) => ({
      invoices: prevState.invoices.map((invoice) =>
        invoice.id === invoiceId
          ? {
              ...invoice,
              products: invoice.products.map((product) =>
                product.id === productId
                  ? { ...product, [field]: value }
                  : product
              ),
            }
          : invoice
      ),
    }));
  };

  handleInvoiceExpand = (invoiceId) => {
    this.setState((prevState) => ({
      invoices: prevState.invoices.map((invoice) =>
        invoice.id === invoiceId
          ? { ...invoice, expanded: !invoice.expanded }
          : invoice
      ),
    }));
  };

  getTotalQuantities = () => {
    const totalQuantities = {};
    this.state.invoices.forEach((invoice) => {
      invoice.products.forEach((product) => {
        const { name, quantity } = product;
        if (totalQuantities[name]) {
          totalQuantities[name] += parseInt(quantity, 10);
        } else {
          totalQuantities[name] = parseInt(quantity, 10);
        }
      });
    });
    return totalQuantities;
  };

  render() {
    const { invoices } = this.state;
    const totalQuantities = this.getTotalQuantities();
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Cart</h3>
              </CardHeader>
              <CardBody>
                <div className="d-flex justify-content-between mt-4 mb-4">
                    <Input 
                        type="text"
                        value="Transaction ID"
                        readOnly
                        className="text-center"
                        style={{ width: "30%" }}
                        >
                    </Input>
                    <Input 
                        type="text"
                        value="Customer Name"
                        readOnly
                        className="text-center"
                        style={{ width: "30%" }}
                        >
                    </Input>
                </div>
              <Row className="mb-4">
                <Col md="12 text-center">
                    <h3>Overall Summary</h3>
                </Col>
                  {Object.entries(totalQuantities).map(([name, quantity]) => (
                    <Col md="12" key={name} className="mb-3">
                      <Row className="align-items-center justify-content-center">
                        <Col md="6">
                          <Input
                            type="text"
                            value={name}
                            readOnly
                            className="text-center"
                          />
                        </Col>
                        <Col md="4">
                          <Input
                            type="number"
                            value={quantity}
                            readOnly
                            placeholder="Total Quantity"
                            className="text-center"
                          />
                        </Col>
                      </Row>
                    </Col>
                  ))}
                </Row>

                {invoices.map((invoice) => (
                  <Card key={invoice.id} className="mb-4">
                    <CardHeader className="d-flex justify-content-between align-items-center">
                      <span>{invoice.date.toLocaleDateString()}</span>
                      <h4 className="mb-0 cursor-pointer" onClick={() => this.handleInvoiceExpand(invoice.id)}>
                        Invoice {invoice.id}
                      </h4>
                    </CardHeader>
                    {invoice.expanded && (
                      <CardBody>
                        {invoice.products.map((product) => (
                          <Row key={product.id} className="mb-2">
                            <Col md="8">
                              <FormGroup>
                              <Input
                                type="select"
                                value={product.name}
                                onChange={(e) =>
                                  this.handleProductChange(
                                    invoice.id,
                                    product.id,
                                    "name",
                                    e.target.value
                                  )
                                }
                              >
                                <option value="">Select Product</option>
                                <option value="Product 1">Product 1</option>
                                <option value="Product 2">Product 2</option>
                                <option value="Combo 1">Combo 1</option>
                                <option value="Combo 2">Combo 2</option>

                              </Input>
                              </FormGroup>
                            </Col>
                            <Col md="4">
                              <FormGroup>
                                <Input
                                  type="number"
                                  placeholder="Quantity"
                                  value={product.quantity}
                                  onChange={(e) =>
                                    this.handleProductChange(
                                      invoice.id,
                                      product.id,
                                      "quantity",
                                      e.target.value
                                    )
                                  }
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        ))}
                        <div className="d-flex justify-content-center mt-3">
                            <Button
                            color="success"
                            onClick={() => this.handleAddProduct(invoice.id)}
                            className="mb-2 w-50"
                            >
                            Add Product
                            </Button>
                        </div>
                      </CardBody>
                    )}
                  </Card>
                ))}
                <div className="d-flex justify-content-center mt-4">
                    <Button
                    color="primary"
                    onClick={this.handleAddInvoice}
                    className="mb-4 w-50"
                    >
                    Add New Invoice
                    </Button>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <Button color="success">Save Transaction</Button>
                  <Button color="primary">Complete/Roopan Transaction</Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </Container>
      </>
    );
  }
}

export default InvoiceForm;