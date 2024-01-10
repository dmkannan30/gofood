import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';


export default function Navbars() {
    const [cartView, setCartView] = useState(false)
    let data = useCart();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login")
    }

    return (
        <div>
            <div className='shadow-lg p-1 mb-5 bg-body rounded'>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand className="fs-1" href="/">GOFOOD</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Link className="nav-link active fs-5" to="/">Home</Link>
                                {(localStorage.getItem("authToken")) ?
                                    <Link className="nav-link active fs-5" to="/myOrder">My Orders</Link>
                                    : ""}
                            </Nav>
                            {(!localStorage.getItem("authToken")) ?
                                <div className='d-flex'>
                                    <Link className="btn bg-danger text-white fs-5 mx-1" to="/login">Login</Link>
                                    <Link className="btn bg-danger text-white fs-5 mx-1" to="/creatuser">Signup</Link>
                                </div>
                                :
                                <div>
                                    <div className='btn bg-danger text-white mx-2' onClick={() => { setCartView(true) }}>
                                        My Cart{""}
                                        <Badge pill bg="primary" className='mx-1'>{data.length}</Badge>
                                    </div>
                                    {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}
                                    <div className='btn bg-danger text-white mx-2' onClick={handleLogout}>
                                        Logout
                                    </div>
                                </div>
                            }
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </div>
        </div>
    )
}
