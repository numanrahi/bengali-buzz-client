import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { signInWithPopup } from 'firebase/auth';

const Login = () => {

    const { signIn, googleProvider ,auth} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        console.log(auth);
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log( 'error', error.message);
        })
    }
 
    return (
        <Container className='mx-auto w-25'>
            <h3 className='text-center my-2 py-2'>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" className='w-100' type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have An Account ? <Link to="/register">Register</Link>
                </Form.Text>
            </Form>
            {/* <Button variant="dark" className='w-100 mt-2' type="submit">
                Login With Google
            </Button> */}
            <Button onClick={handleGoogleSignIn} className='my-4 w-100' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
        </Container>
    );
};

export default Login;