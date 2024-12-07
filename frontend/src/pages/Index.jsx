import logoDark from '../assets/logo-dark.png';
import { useNavigate } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';

function Index() {

    const navigate = useNavigate();

    const chartData = {
        series: [{
            name: 'Expenses',
            data: [500, 700, 600, 800, 400] // Example data
        }],
        options: {
            chart: {
                type: 'line'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] // Example months
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: 'Monthly Expense Trends',
                align: 'center',
                style: {
                    fontSize: '18px',
                },
            },
        }
    };

    return (
        <div className="container-fluid vh-100">
            <div className="d-flex justify-content-center align-item-center mt-3">
                <nav className="navbar navbar-dark bg-dark rounded w-50">
                    <span className="navbar-brand mb-0 ms-1" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                        <img src={logoDark} alt="logo" className="img-fluid" style={{ maxWidth: '100px' }} />
                    </span>
                    <div className="justify-content-end d-flex align-items-center">
                        <ul className="nav">
                            <li className="nav-item">
                                <span className="nav-link text-light hover-animated" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>Login</span>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <div className="vertical-line"></div> {/* Vertical Line */}
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-light hover-animated" onClick={() => navigate('/register')} style={{ cursor: 'pointer' }}>Register</span>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>

            {/* Main Content */}
            {/* Features Section */}
            <div className="container mt-5">
                <h2 className="text-center mb-4">Features</h2>
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="card p-3 shadow-lg hover-animated">
                            <i className="bi bi-person-check display-4 text-dark"></i>
                            <h5 className="mt-3">User Authentication</h5>
                            <p>Securely manage your account with our robust authentication system.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 shadow-lg hover-animated">
                            <i className="bi bi-wallet2 display-4 text-dark"></i>
                            <h5 className="mt-3">Expense Tracking</h5>
                            <p>Easily add, edit, or delete your daily expenses and stay in control.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 shadow-lg hover-animated">
                            <i className="bi bi-bar-chart-line display-4 text-dark"></i>
                            <h5 className="mt-3">Insights</h5>
                            <p>Visualize your spending trends with interactive charts and reports.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="container mt-5">
                <h2 className="text-center">What Our Users Say</h2>
                <div className="row text-center mt-4">
                    <div className="col-md-4">
                        <blockquote className="blockquote">
                            <p>"InsightOS has completely transformed how I manage my budget. Highly recommend!"</p>
                            <footer className="blockquote-footer">Jane Doe</footer>
                        </blockquote>
                    </div>
                    <div className="col-md-4">
                        <blockquote className="blockquote">
                            <p>"The charts and reports are exactly what I needed to plan my finances."</p>
                            <footer className="blockquote-footer">John Smith</footer>
                        </blockquote>
                    </div>
                    <div className="col-md-4">
                        <blockquote className="blockquote">
                            <p>"A user-friendly and powerful app for anyone who cares about their money."</p>
                            <footer className="blockquote-footer">Emily Davis</footer>
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Interactive Chart */}
            <div className="container mt-5">
                <h2 className="text-center">Track Your Expenses Over Time</h2>
                <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
            </div>

            {/* Footer */}
            <footer className="mt-auto bg-dark text-white py-3">
                <div className="text-center">
                    &copy; {new Date().getFullYear()} InsightOS. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Index;