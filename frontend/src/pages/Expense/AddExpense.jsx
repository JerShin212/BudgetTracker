import React, { useState } from "react";
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import '../../assets/addexpense.css';

function AddExpensePage() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");
    const [errors, setErrors] = useState({});

    const categories = ["Food", "Travel", "Entertainment", "Utilities", "Others"]; // Example categories

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        const newErrors = {};
        if (!title.trim()) newErrors.title = "Title is required.";
        if (!category.trim()) newErrors.category = "Category is required.";
        if (!amount || amount <= 0) newErrors.amount = "Amount must be greater than 0.";
        if (!date) newErrors.date = "Date is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Submit logic here (e.g., API call)
        const expense = { title, category, amount, date, notes };
        console.log("Expense submitted:", expense);
        alert("Expense added successfully!");
    };

    return (
        <div className="d-flex flex-column vh-100">
            <Navbar />

            {/* Main Content */}
            <div className="container mt-4 flex-grow-1">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card p-4 shadow-lg">
                            <h3 className="text-center mb-4">Add New Expense</h3>
                            <form onSubmit={handleSubmit}>
                                {/* Title */}
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">
                                        Title <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.title ? "is-invalid" : ""}`}
                                        id="title"
                                        placeholder="Enter expense title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                                </div>

                                {/* Category */}
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">
                                        Category <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className={`form-select ${errors.category ? "is-invalid" : ""}`}
                                        id="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="">Select a category</option>
                                        {categories.map((cat, index) => (
                                            <option key={index} value={cat}>
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                                </div>

                                {/* Amount */}
                                <div className="mb-3">
                                    <label htmlFor="amount" className="form-label">
                                        Amount <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        className={`form-control ${errors.amount ? "is-invalid" : ""}`}
                                        id="amount"
                                        placeholder="Enter amount"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                    {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
                                </div>

                                {/* Date */}
                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">
                                        Date <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        className={`form-control ${errors.date ? "is-invalid" : ""}`}
                                        id="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                    {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                                </div>

                                {/* Notes */}
                                <div className="mb-3">
                                    <label htmlFor="notes" className="form-label">Notes</label>
                                    <textarea
                                        className="form-control"
                                        id="notes"
                                        rows="3"
                                        placeholder="Optional notes about this expense"
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="text-center">
                                    <button type="submit" className="btn btn-dark btn-lg">
                                        Add Expense
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default AddExpensePage;