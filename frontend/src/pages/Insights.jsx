import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../assets/insights.css'
import ReactApexChart from 'react-apexcharts'
import '../assets/reports.css'

function Insights() {
    const topCategoriesData = {
        series: [30, 20, 25, 15, 10],
        labels: ["Food", "Travel", "Entertainment", "Utilities", "Shopping"],
        options: {
            chart: {
                type: "donut",
            },
            title: {
                text: "Top Spending Categories",
                align: "center",
                style: {
                    fontSize: "18px",
                },
            },
        },
    };

    const weeklyTrendsData = {
        series: [{
            name: "Expenses",
            data: [200, 300, 400, 350, 450, 500, 600] // Example values
        }],
        options: {
            chart: {
                type: "line",
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
        },
    };

    const averageSpendingData = {
        series: [{
            name: "Average Monthly Expenses",
            data: [400, 600, 500, 450, 550, 700] // Example values
        }],
        options: {
            chart: {
                type: "bar",
            },
            xaxis: {
                categories: ["January", "February", "March", "April", "May", "June"],
            },
            title: {
                text: "Average Monthly Expenses",
                align: "center",
                style: {
                    fontSize: "18px",
                },
            },
        },
    };

    return (
        <div className="d-flex flex-column vh-100">
            <Navbar />

            {/* Main Content */}
            <div className="container mt-4 flex-grow-1 mb-3">
                <h2 className="mb-4 text-center fw-bold">Insights</h2>

                {/* Metrics Section */}
                <div className="row g-4 mb-4">
                    <div className="col-md-4 d-flex">
                        <div className="card shadow-lg w-100 p-3 d-flex flex-column justify-content-center">
                            <h5 className="text-center">Total Expenses</h5>
                            <h3 className="text-center text-danger">$2,500</h3>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="card shadow-lg w-100 p-3 d-flex flex-column justify-content-center">
                            <h5 className="text-center">Average Monthly Spending</h5>
                            <h3 className="text-center text-primary">$417</h3>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="card shadow-lg w-100 p-3 d-flex flex-column justify-content-center">
                            <h5 className="text-center">Top Spending Category</h5>
                            <h3 className="text-center text-success">Food</h3>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="row g-4">
                    <div className="col-md-6 d-flex">
                        <div className="card p-3 shadow-lg w-100">
                            <ReactApexChart
                                options={topCategoriesData.options}
                                series={topCategoriesData.series}
                                type="donut"
                                height={350}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="card p-3 shadow-lg w-100">
                            <ReactApexChart
                                options={weeklyTrendsData.options}
                                series={weeklyTrendsData.series}
                                type="line"
                                height={350}
                            />
                        </div>
                    </div>
                    <div className="col-md-12 d-flex">
                        <div className="card p-3 shadow-lg w-100">
                            <ReactApexChart
                                options={averageSpendingData.options}
                                series={averageSpendingData.series}
                                type="bar"
                                height={350}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Insights