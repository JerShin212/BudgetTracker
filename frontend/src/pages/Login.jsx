import api from '../api';
import { useState } from 'react';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { useNavigate } from 'react-router-dom';

import logoDark from '../assets/logo-dark.png';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const response = await api.post('/api/login/', { username, password });
            if (response.status !== 200) {
                throw new Error('Error! Please check your credentials.');
            } else {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
                navigate('/dashboard');
            }
        }
        catch (error) {
            setError('Invalid email or password. Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
        }
        console.log
    }

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
                        <h1 className="text-center mb-3 text-dark">Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <div className="col-lg">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control form-control-lg" id="username" onChange={(e) => setUsername(e.target.value)} required />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col-lg">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control form-control-lg" id="password" onChange={(e) => setPassword(e.target.value)} required />
                                    {error && <div className="text-danger mt-2">{error}</div>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg">
                                    <button type="submit" className="btn btn-dark w-100" disabled={loading}>
                                        {loading ? 'Logging in...' : 'Login'}
                                    </button>
                                    <p className='text-center mt-3'>Don't have an account? <a href="/register">Sign Up</a></p>
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
    )
}

export default Login;