import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReactApexChart from 'react-apexcharts'
import '../assets/reports.css'

function Reports() {
    const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categories] = useState(["Food", "Travel", "Entertainment", "Utilities", "Others"]); // Example categories

    // Example data for charts
    const monthlySpendingData = {
        series: [{
            name: "Expenses",
            data: [400, 700, 500, 800, 1000, 600] // Example values
        }],
        options: {
            chart: {
                type: "bar",
            },
            xaxis: {
                categories: ["January", "February", "March", "April", "May", "June"],
            },
            title: {
                text: "Monthly Spending",
                align: "center",
                style: {
                    fontSize: "18px",
                },
            },
        },
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
        },
    };

    const handleExport = (format) => {
        alert(`Exporting report as ${format.toUpperCase()}`);
        // Add export logic here (e.g., API call)
    };

    return (
        <div className="d-flex flex-column vh-100">
            <Navbar />

            {/* Main Content */}
            <div className="container mt-4 flex-grow-1">
                <h2 className="mb-4 text-center fw-bold">Reports</h2>

                {/* Filters Section */}
                <div className="card p-4 shadow-lg mb-4">
                    <h5 className="mb-3">Filter Reports</h5>
                    <div className="row g-3">
                        <div className="col-md-4">
                            <label className="form-label">Start Date</label>
                            <input
                                type="date"
                                className="form-control"
                                value={dateRange.startDate}
                                onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">End Date</label>
                            <input
                                type="date"
                                className="form-control"
                                value={dateRange.endDate}
                                onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Category</label>
                            <select
                                className="form-select"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">All Categories</option>
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="row g-4">
                    <div className="col-md-6 d-flex">
                        <div className="card p-3 shadow-lg w-100">
                            <ReactApexChart
                                options={monthlySpendingData.options}
                                series={monthlySpendingData.series}
                                type="bar"
                                height={350}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="card p-3 shadow-lg w-100">
                            <ReactApexChart
                                options={categoryBreakdownData.options}
                                series={categoryBreakdownData.series}
                                type="donut"
                                height={350}
                            />
                        </div>
                    </div>
                </div>

                {/* Export Section */}
                <div className="text-center mt-4">
                    <button
                        className="btn btn-dark me-3"
                        onClick={() => handleExport("pdf")}
                    >
                        Export as PDF
                    </button>
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => handleExport("csv")}
                    >
                        Export as CSV
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Reports