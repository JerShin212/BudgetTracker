import { useNavigate } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import '../assets/home.css';
import logoDark from '../assets/logo-dark.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
    const navigate = useNavigate();

    // Example data for charts
    const spendingTrendsData = {
        series: [{
            name: "Expenses",
            data: [400, 700, 300, 900, 500, 800, 400] // Example values
        }],
        options: {
            chart: {
                type: "area",
                toolbar: {
                    show: false
                }
            },
            xaxis: {
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
            title: {
                text: "Weekly Spending Trends",
                align: "center",
                style: {
                    fontSize: "18px",
                },
            },
        }
    };

    const categoryBreakdownData = {
        series: [40, 30, 20, 10], // Example percentages
        labels: ["Food", "Travel", "Entertainment", "Utilities"],
        options: {
            chart: {
                type: "donut",
            },
            title: {
                text: "Category Breakdown",
                align: "center",
                style: {
                    fontSize: "18px",
                },
            },
        }
    };

    return (
        <div className="d-flex flex-column vh-100">
            <Navbar />

            {/* Main Content */}
            <div className="container mt-4 flex-grow-1">
                <div className="row g-4">
                    {/* Metrics Cards */}
                    <div className="col-md-4">
                        <div className="card p-3 shadow-lg text-center">
                            <h5>Total Expenses This Month</h5>
                            <h3>$1,200</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 shadow-lg text-center">
                            <h5>Remaining Budget</h5>
                            <h3>$800</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 shadow-lg text-center">
                            <h5>Top Spending Category</h5>
                            <h3>Food</h3>
                        </div>
                    </div>

                    {/* Charts */}
                    <div className="col-md-6 d-flex">
                        <div className="card p-3 shadow-lg w-100">
                            <ReactApexChart options={spendingTrendsData.options} series={spendingTrendsData.series} type="area" height="300" />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="card p-3 shadow-lg w-100">
                            <ReactApexChart options={categoryBreakdownData.options} series={categoryBreakdownData.series} type="donut" height="300" />
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="col-12">
                        <div className="card p-4 shadow-lg mb-3">
                            <h5 className="mb-3 text-center">Quick Actions</h5>
                            <div className="d-flex flex-wrap justify-content-center gap-4">
                                <div
                                    className="action-card text-center p-3"
                                    onClick={() => navigate('/expense/add')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <i className="bi bi-plus-circle display-6"></i>
                                    <h6 className="mt-2">Add Expense</h6>
                                </div>
                                <div
                                    className="action-card text-center p-3"
                                    onClick={() => navigate('/view-insights')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <i className="bi bi-bar-chart display-6"></i>
                                    <h6 className="mt-2">View Insights</h6>
                                </div>
                                <div
                                    className="action-card text-center p-3"
                                    onClick={() => navigate('/export-report')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <i className="bi bi-clipboard-data display-6"></i>
                                    <h6 className="mt-2">Export Report</h6>
                                </div>
                                <div
                                    className="action-card text-center p-3"
                                    onClick={() => navigate('/set-budget')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <i className="bi bi-cash-stack display-6"></i>
                                    <h6 className="mt-2">Set Budget</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />

        </div>
    );
}

export default Home;