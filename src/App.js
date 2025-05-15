import { Button, Navbar, Container, Nav, Row, Col, Card, Modal } from 'react-bootstrap';
import './App.css';
import { createContext, useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import About from './routes/About.js';
import Detail from './routes/Detail.js';
import Event from './routes/Event.js';
import axios from 'axios'
import Cart from './routes/Cart.js'

export let Context1 = createContext()


function App() {

  let [shoes, setShoes] = useState(data)
  let [재고] = useState([10, 11, 12])

  let navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App text-center">




      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Nike</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/About') }}>about</Nav.Link>
            <Nav.Link onClick={() => { navigate('/Detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            <div className="container text-center mt-5">
              <div className="row">
                { shoes.map((a, i)=>{
                  return <Mard shoes={shoes[i]} i={i} key={i}></Mard>
                })}
                
              </div>
            </div>
            <button onClick={()=>{
             axios.get('https://codingapple1.github.io/shop/data3.json')
             .then((결과)=>{
              console.log(결과.data)
              let copy = [...shoes, ...결과.data];
              setShoes(copy);
             })
            //  .catch(()=>{
            //   console.log('실패함') 서버요청시실패
            //  })
            }}>버튼</button>
          </>
        } />
        <Route path="/about/:id" element={
        <Context1.Provider value={{ 재고, shoes }}>
        <About shoes={shoes} />
        </Context1.Provider>
        } />
        

        
        <Route path="/about" element={<About shoes={shoes} />} >
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />

        </Route>
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<div>없는페이지시봉새야</div>} />

        <Route path="/Event" element={<Event />} >
        <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
        <Route path="two" element={<div>생일기념 쿠폰받기</div>} />

      </Route>

      <Route path="/Cart" element={<Cart/>}/>

      </Routes>
      
    </div>
  );
}

function Mard(props) {
  return (
    <div className="col-md-4">
      <img className="nk01" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
