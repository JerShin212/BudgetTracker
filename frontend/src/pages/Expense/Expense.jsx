import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ReactApexChart from "react-apexcharts";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../assets/expense.css";
import api from '../../api';

export default function Expense() {
    const [expenses, setExpenses] = useState([
        { id: 1, date: "2024-12-01", category: "Food", amount: 50 },
        { id: 2, date: "2024-12-02", category: "Travel", amount: 100 },
        { id: 3, date: "2024-12-03", category: "Entertainment", amount: 30 },
    ]);

    const chartData = {
        series: [50, 100, 30],
        options: {
            chart: {
                type: "donut",
            },
            labels: ["Food", "Travel", "Entertainment"],
            title: {
                text: "Expenses by Category",
                align: "center",
                style: {
                    fontSize: "18px",
                },
            },
        },
    };

    const [showModal, setShowModal] = useState(false);
    const [selectedExpense, setSelectedExpense] = useState(null);
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/expense/edit/${id}`);
    };

    const handleDelete = async (id) => {
        try {
            // Make the DELETE API call
            await api.delete(`/expenses/${id}/delete/`);
            // Update the state to reflect the deletion
            setExpenses(expenses.filter((expense) => expense.id !== id));
            console.log(`Expense with ID ${id} deleted successfully`);
        } catch (error) {
            console.error("Error deleting expense:", error);
            alert("Failed to delete the expense. Please try again.");
        }

    }

    const openModal = (expense) => {
        setSelectedExpense(expense);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedExpense(null);
    };

    return (
        <div className="d-flex flex-column vh-100">
            <Navbar /> {/* Top Navbar */}

            {/* Main Content */}
            <div className={`container mt-4 flex-grow-1 ${showModal ? "blur-background" : ""}`}>
                {/* Header Section */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Expenses</h2>
                    <button className="btn btn-dark" onClick={() => navigate("/expense/add")}>
                        Add New Expense
                    </button>
                </div>

                {/* Summary Section */}
                <div className="row g-4 mb-4">
                    <div className="col-md-4">
                        <div className="card p-3 shadow-lg text-center">
                            <h6>Total Expenses</h6>
                            <h3>$180</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 shadow-lg text-center">
                            <h6>Average Expense</h6>
                            <h3>$60</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 shadow-lg text-center">
                            <h6>Top Category</h6>
                            <h3>Travel</h3>
                        </div>
                    </div>
                </div>

                {/* Expense Table */}
                <div className="table-responsive mb-4">
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense) => (
                                <tr key={expense.id}>
                                    <td>{expense.date}</td>
                                    <td>{expense.category}</td>
                                    <td>${expense.amount}</td>
                                    <td>
                                        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(expense.id)}>Edit</button>
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => openModal(expense)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                {/* Chart Section */}
                <div className="card p-4 shadow-lg mb-3">
                    <ReactApexChart
                        options={chartData.options}
                        series={chartData.series}
                        type="donut"
                        height={350}
                    />
                </div>
            </div>

            <Footer /> {/* Bottom Footer */}
            {/* Delete Confirmation Modal */}
            {showModal && selectedExpense && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Deletion</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={closeModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete the following expense?</p>
                                <ul>
                                    <li><strong>Date:</strong> {selectedExpense.date}</li>
                                    <li><strong>Category:</strong> {selectedExpense.category}</li>
                                    <li><strong>Amount:</strong> ${selectedExpense.amount}</li>
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={closeModal}>
                                    Cancel
                                </button>
                                <button className="btn btn-danger" onClick={handleDelete}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
