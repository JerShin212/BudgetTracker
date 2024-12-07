import api from '../api';
import { useState } from 'react';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { useNavigate } from 'react-router-dom';

import logoDark from '../assets/logo-dark.png';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const data = {
            first_name: firstName,
            last_name: lastName,
            username,
            email,
            password
        };

        api.post('/api/register/', data)
            .then((response) => {
                if (response.status !== 201) {
                    throw new Error('Error! Please check your credentials.');
                } else {
                    localStorage.setItem(ACCESS_TOKEN, response.data.access);
                    localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
                    navigate('/login');
                }
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    if (error.response.data.username) {
                        setUsernameError(error.response.data.username[0]);
                    } else {
                        setError('Invalid email or password. Please try again.');
                    }
                } else {
                    setError('Something went wrong. Please try again.');
                }
            });
    };

    return (
        <div className="container-fluid vh-100">
            <div className="row h-100">

                {/* Top-left "Back" Link */}
                <div className="position-absolute top-0 start-0 mt-3 ms-3">
                    <div
                        className="text-dark d-inline-flex align-items-center"
                        onClick={() => navigate('/')}
                        role="button"
                    >
                        <i className="bi bi-arrow-left me-2"></i>
                        Back
                    </div>
                </div>

                {/* Left Section */}
                <div className="col-md-6 d-flex justify-content-center align-items-center bg-light">
                    <div>
                        <h1 className="text-center mb-5 text-dark">Sign Up</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                {/* First Name */}
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="first_name" className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="first_name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </div>
                                {/* Last Name */}
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="last_name" className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="last_name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                {/* Username */}
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                                {usernameError && <div className="text-danger mt-2">{usernameError}</div>}
                            </div>
                            <div className="mb-3">
                                {/* Email */}
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                {/* Password */}
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                {/* Confirm Password */}
                                <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    id="confirm_password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                {error && <div className="text-danger mt-2">{error}</div>}
                            </div>
                            <div className="row">
                                <div className="col-lg">
                                    <button type="submit" className="btn btn-dark w-100">Sign Up</button>
                                    <p className='text-center mt-3'>Already have an account? <a href="/login">Login</a></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Right Section */}
                <div className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center bg-dark text-white">
                    <img src={logoDark} alt="logo" className="mb-4 w-50" />
                    <p className="text-center mt-3 px-4">
                        Manage your finances effortlessly with our personal budget tracker. Track expenses,
                        visualize spending trends, and make informed decisions with insightful analysis—all
                        in one place.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;