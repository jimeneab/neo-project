import React from 'react';
import {
    Card,
    Button, 
    CardImg, 
    CardTitle, 
    CardText,
    CardSubtitle, 
    CardBody
} from 'reactstrap';
const Example = (props) => {
  return (
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
  );
};

export default Example;