import React from 'react';
import {
    useAuthState,
    useSendEmailVerification,
} from 'react-firebase-hooks/auth';
import { InfinitySpin } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequiredAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const location = useLocation();

    console.log(user);

    if (loading) {
        return (
            <div className="loading">
                <InfinitySpin color="red" />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }}></Navigate>;
    }

    if (!user.emailVerified) {
        return (
            <div className="container">
                <h2>Please verify your email</h2>
                <button
                    onClick={async () => {
                        await sendEmailVerification();
                        alert('Sent email');
                    }}
                >
                    send verification link
                </button>
            </div>
        );
    }

    return children;
};

export default RequiredAuth;
