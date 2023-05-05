import React, { useContext, useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (email == '') {
            toast.error('email and password must be fil up')
            return;
        }
        else if (password.length < 6) {
            toast.error('Password must be 6 characters')
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                toast('User Created Successfully')
                form.reset()
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <Container className='mx-auto w-25'>
            <h3 className='text-center my-2 py-2'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" className='w-100' type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have An Account ? <Link to="/login">Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;