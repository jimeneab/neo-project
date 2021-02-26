import React, {useState, useEffect} from 'react';
import {Form, FormGroup, Label, Input, Container,
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Card, CardImg, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function TestPage(params) {
    return(
        <>
        <Card className="schoolCard m-2">
                    <CardImg top width="100%" src={'urlimg'} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">{'name'}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{'country'}</CardSubtitle>
                    <Button>Ir</Button>
                    </CardBody>
                </Card>
                <Card className="schoolCard m-2">
                <CardImg top width="100%" src={'urlimg'} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{'name'}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{'country'}</CardSubtitle>
                <Button>Ir</Button>
                </CardBody>
            </Card>
            <Card className="schoolCard m-2">
            <CardImg top width="100%" src={'urlimg'} alt="Card image cap" />
            <CardBody>
            <CardTitle tag="h5">{'name'}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{'country'}</CardSubtitle>
            <Button>Ir</Button>
            </CardBody>
        </Card>
    </>
    )
}

export default TestPage