import React,{useState} from 'react'
import { Container, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import ButtonOne from './../components/button/index'
import './style.css'
import MainNav from './../components/navBar/mainNav'
import Footer from './../components/footer/footer'
import ModalApp from './../components/modal/index'

function StudentsPage(){
  const [entryObjectE, setEntryObjectE]= useState({});
  const [modal, setModal] = useState(false);

  const getEntryDataE = event =>{
    let property = event.target.name
    let value = event.target.value
    setEntryObjectE({...entryObjectE, [property]:value})
  }
  const saveDataEntryE =()=>{
    fetch('https://neo-app-55ad5-default-rtdb.firebaseio.com/students/.json',{
      method: "POST",
      body: JSON.stringify(entryObjectE)
    }).then(response=>response.json())
      .then(json=>{
        console.log(json)
        setModal(!modal)
        setEntryObjectE({})
      })
  }

  const toggle = () => setModal(!modal);
    return(
        <>
        <div>
          <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Aviso</ModalHeader>
            <ModalBody>
              El alumno ha sido creado con exito!
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Cerrar</Button>
            </ModalFooter>
          </Modal>
        </div>
        <MainNav/>
        <Container>
            <Form className='formData'>
            <FormGroup>
              <Label for="name">User</Label>
              <Input type="name" name="name" id="schoolName" placeholder="Neo educate" onChange={getEntryDataE} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="example@neoeducate.com.mx" onChange={getEntryDataE} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="*********" onChange={getEntryDataE} />
            </FormGroup>
            <FormGroup>
              <Label for="country">School</Label>
              <Input type="select" name="country" id="schoolCountry" onChange={getEntryDataE}>
                <option>Escuela 1</option>
                <option>Escuela 2</option>
                <option>Escuela 3</option>
                <option>Escuela 4</option>
                <option>Escuela 5</option>
              </Input>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" onChange={getEntryDataE} name="active"/>{' '}
                Active
              </Label>
            </FormGroup>
            <FormGroup className='studentButtons'>       
              <ButtonOne  text='Submit' to="/students" onClick={saveDataEntryE}/>
            </FormGroup> 
          </Form>
          </Container>
          <Footer/>
        </>
    )
}

export default StudentsPage