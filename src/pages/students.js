import React from 'react'
import { Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import ButtonOne from './../components/button/index'
import './style.css'
import MainNav from './../components/navBar/mainNav'
import Footer from './../components/footer/footer'
import ModalApp from './../components/modal/index'

function StudentsPage(){
    return(
        <>
        <ModalApp/>
        <MainNav/>
        <Container>
            <Form className='formData'>
            <FormGroup>
              <Label for="name">User</Label>
              <Input type="name" name="name" id="schoolName" placeholder="Neo educate" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="example@neoeducate.com.mx" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="*********" />
            </FormGroup>
            <FormGroup>
              <Label for="country">School</Label>
              <Input type="select" name="country" id="schoolCountry">
                <option>Escuela 1</option>
                <option>Escuela 2</option>
                <option>Escuela 3</option>
                <option>Escuela 4</option>
                <option>Escuela 5</option>
              </Input>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Active
              </Label>
            </FormGroup>
            <FormGroup className='studentButtons'>       
              <ButtonOne  text='Submit' to="/students"/>
            </FormGroup> 
          </Form>
          </Container>
          <Footer/>
        </>
    )
}

export default StudentsPage