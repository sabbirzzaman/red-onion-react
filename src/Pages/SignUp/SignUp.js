import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo2.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { InfinitySpin } from 'react-loader-spinner';
import './SignUp.css';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPassRef = useRef('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password, {
            sendEmailVerification: true,
        });
    };

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    if (error) {
        console.log(error);
    }

    if (loading) {
        return (
            <div className="loading">
                <InfinitySpin color="red" />
            </div>
        );
    }

    return (
        <div className="form-container">
            <div className="container">
                <img width={250} src={logo} alt="site logo" />

                <form onSubmit={handleSignUp} className="form">
                    <input
                        ref={nameRef}
                        type="text"
                        placeholder="Name"
                        required
                    />
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <input
                        ref={confirmPassRef}
                        type="password"
                        placeholder="Confirm Password"
                        required
                    />
                    <input type="submit" value="Sign In" />
                </form>
                <Link to="/login">Already have an account?</Link>
            </div>
        </div>
    );
};

export default SignUp;
