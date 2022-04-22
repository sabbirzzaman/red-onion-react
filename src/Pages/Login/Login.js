import React, { useEffect, useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { InfinitySpin } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo2.png';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
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

                <form onSubmit={handleLogin} className="form">
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
                    <input type="submit" value="Login" />
                </form>
                <Link to="/signup">Don't have an account?</Link>
            </div>
        </div>
    );
};

export default Login;
