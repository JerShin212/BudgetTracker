import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../assets/settings.css'

function Settings() {
    const [profile, setProfile] = useState({
        name: "John Doe",
        username: "johndoe123",
        email: "john.doe@example.com",
    });
    const [passwords, setPasswords] = useState({ current: "", new: "", confirm: "" });
    const [theme, setTheme] = useState("light");
    const [currency, setCurrency] = useState("USD");
    const [notifications, setNotifications] = useState({
        reminders: true,
        spendingAlerts: true,
    });

    const handleProfileUpdate = () => {
        alert("Profile updated successfully!");
        // Add API logic here to save changes
    };

    const handlePasswordUpdate = () => {
        if (passwords.new !== passwords.confirm) {
            alert("Passwords do not match!");
            return;
        }
        alert("Password updated successfully!");
        // Add API logic here to save changes
    };

    const handleAccountAction = (action) => {
        alert(`Account ${action} successfully!`);
        // Add API logic for account management
    };

    return (
        <div className="d-flex flex-column vh-100">
            <Navbar />

            {/* Main Content */}
            <div className="container mt-4 flex-grow-1">
                <h2 className="mb-4 text-center fw-bold">Settings</h2>

                <div className="row g-4 mb-3">
                    {/* Profile Settings */}
                    <div className="col-md-6 d-flex">
                        <div className="card shadow-lg p-4 w-100 d-flex flex-column">
                            <h5 className="mb-3">Profile Settings</h5>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={profile.name}
                                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={profile.username}
                                    onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={profile.email}
                                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                />
                            </div>
                            <button className="btn btn-dark w-100 mt-auto" onClick={handleProfileUpdate}>
                                Save Changes
                            </button>
                        </div>
                    </div>

                    {/* Password Settings */}
                    <div className="col-md-6 d-flex">
                        <div className="card shadow-lg p-4 w-100 d-flex flex-column">
                            <h5 className="mb-3">Password Settings</h5>
                            <div className="mb-3">
                                <label className="form-label">Current Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={passwords.current}
                                    onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">New Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={passwords.new}
                                    onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={passwords.confirm}
                                    onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                                />
                            </div>
                            <button className="btn btn-dark w-100 mt-auto" onClick={handlePasswordUpdate}>
                                Update Password
                            </button>
                        </div>
                    </div>

                    {/* Preferences */}
                    <div className="col-md-6 d-flex">
                        <div className="card shadow-lg p-4 w-100 d-flex flex-column">
                            <h5 className="mb-3">Preferences</h5>
                            <div className="mb-3">
                                <label className="form-label">Theme</label>
                                <select
                                    className="form-select"
                                    value={theme}
                                    onChange={(e) => setTheme(e.target.value)}
                                >
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Default Currency</label>
                                <select
                                    className="form-select"
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                >
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="MYR">MYR</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="col-md-6 d-flex">
                        <div className="card shadow-lg p-4 w-100 d-flex flex-column">
                            <h5 className="mb-3">Notifications</h5>
                            <div className="form-check mb-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="reminders"
                                    checked={notifications.reminders}
                                    onChange={(e) =>
                                        setNotifications({ ...notifications, reminders: e.target.checked })
                                    }
                                />
                                <label className="form-check-label" htmlFor="reminders">
                                    Enable Reminders
                                </label>
                            </div>
                            <div className="form-check mb-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="spendingAlerts"
                                    checked={notifications.spendingAlerts}
                                    onChange={(e) =>
                                        setNotifications({ ...notifications, spendingAlerts: e.target.checked })
                                    }
                                />
                                <label className="form-check-label" htmlFor="spendingAlerts">
                                    Enable Spending Alerts
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Account Management */}
                    <div className="col-md-12 d-flex">
                        <div className="card shadow-lg p-4 w-100">
                            <h5 className="mb-3">Account Management</h5>
                            <button
                                className="btn btn-outline-danger me-3 mb-3"
                                onClick={() => handleAccountAction("deactivated")}
                            >
                                Deactivate Account
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleAccountAction("deleted")}
                            >
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Settings