import React from 'react'
import { useNavigate } from 'react-router-dom';
import logoDark from '../assets/logo-dark.png';

export default function Navbar() {

    const navigate = useNavigate();
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* Logo */}
                    <span className="navbar-brand me-3" style={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
                        <img src={logoDark} alt="logo" className="img-fluid" style={{ maxWidth: '100px' }} />
                    </span>

                    {/* Left-side Navigation */}
                    <div className="collapse navbar-collapse justify-content-start">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
                                    Home
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/expense')}>
                                    Expense
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/manage-categories')}>
                                    Manage Categories
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/reports')}>
                                    Reports
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/insights')}>
                                    Insights
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Right-side Navigation */}
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/settings')}>
                                    Settings
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/help')}>
                                    Help
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/profile')}>
                                    View Profile
                                </span>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <div className="vertical-line"></div> {/* Vertical Line */}
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/logout')}>
                                    Logout
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
