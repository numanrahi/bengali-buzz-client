import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { signIn, googleProvider, githubProvider, auth } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                toast('Login Successfully');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                toast('Login Successfully');
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                toast('Login Successfully');
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
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
                <Button variant="primary" className='w-100' type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have An Account ? <Link to="/register">Register</Link>
                </Form.Text>
            </Form>
            {/* google auth */}
            <Button onClick={handleGoogleSignIn} className='p-2 mt-4 w-100' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
            {/* github auth */}
            <Button onClick={handleGithubSignIn} className='p-2 mt-2 w-100' variant="outline-secondary"><FaGithub></FaGithub> Login With Github</Button>
        </Container>
    );
};

export default Login;