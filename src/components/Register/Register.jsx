import React, { useContext, useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        setError('');

        if (email == '') {
            setError('email and password must be fil up')
            return;
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters');
            return;
        }

        // console.log(name, url, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setSuccess('User Created Successfully')
                form.reset()
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='mx-auto w-25'>
            <h3 className='text-center my-2 py-2'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Text className="text-danger fs-5 my-5">
                    {error}
                </Form.Text>
                <Form.Text className="text-success mx-auto">
                    {success}
                </Form.Text>
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
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="accept" label="Accept Terms and Conditions" />
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