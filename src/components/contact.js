
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Contact() {
    return (
      <div className="cardBg p-3">
        <Form className="mt-5">
          <Form.Group
            className="mb-3 bg-transparent"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="text-light bg-transparent">
              Email address
            </Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group
            className="mb-3 bg-transparent"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="text-light bg-transparent">Comment</Form.Label>
            <Form.Control as="textarea" rows={10} />
          </Form.Group>
          <Button variant="secondary">Submit</Button>{" "}
        </Form>
      </div>
    );
  }

  export default Contact;