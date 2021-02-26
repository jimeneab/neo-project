import React,{useState, useEffect} from 'react'
import {
  Container, 
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import ButtonOne from './../components/button/index'
import './style.css'
import MainNav from './../components/navBar/mainNav'
import Footer from './../components/footer/footer'

function StudentsPage(){
  const [entryObjectE, setEntryObjectE]= useState({});
  const [modal, setModal] = useState(false);
  const [studentsCollection, setStudentsCollection]= useState({})

  const getEntryDataE = event =>{
    let property = event.target.name
    let value = event.target.value
    setEntryObjectE({...entryObjectE, [property]:value})
  }
  useEffect(()=>{
    fetch("https://neo-app-55ad5-default-rtdb.firebaseio.com/students/.json",[])
    .then(response=>response.json())
    .then(json=>{
      setStudentsCollection(json)
    })
  },[])

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
        <Container fluid>
            <Row>
              <div className="col-4 bg-dark text-white p-3">
                <Form>
                <FormGroup>
              <Label for="urlimg">URL image</Label>
              <Input type="urlimg" name="urlimg" id="urlimg" placeholder="Image" onChange={getEntryDataE}/>
            </FormGroup>
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
              </div>
              <div className="col-8 bg-light d-flex justify-content-center cardContent flex-wrap">
                {
                  Object.keys(studentsCollection).map(key=>{
                    let {urlimg, name, country} = studentsCollection[key]
                    return(
                      <Card className="schoolCard m-2">
                        <CardImg top width="100%" src={urlimg} alt="Card image cap" />
                        <CardBody>
                          <CardTitle tag="h5">{name}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">{country}</CardSubtitle>
                          <Button>Ir</Button>
                        </CardBody>
                      </Card>
                    )
                  })
                }
              </div>
            </Row>
        </Container>
        <Footer/>
        </>
    )
}

export default StudentsPage