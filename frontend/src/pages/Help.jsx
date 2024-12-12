import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import '../assets/help.css'

function Help() {
    const [faqOpen, setFaqOpen] = useState(null); // Track open FAQ item

    const toggleFaq = (index) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    const faqs = [
        { question: "How do I add an expense?", answer: "Navigate to the Expense page and click 'Add New Expense'." },
        { question: "How can I edit a category?", answer: "Go to the Manage Categories page and click the 'Edit' button next to a category." },
        { question: "How do I generate a report?", answer: "Navigate to the Reports page, apply your filters, and export the report in your desired format." },
        { question: "Can I change my password?", answer: "Yes, go to the Settings page under Password Settings and update your password." },
    ];

    return (
        <div className="d-flex flex-column vh-100">
            <Navbar />

            {/* Main Content */}
            <div className="container mt-4 flex-grow-1 mb-3">
                <h2 className="mb-4 text-center fw-bold">Help & Support</h2>

                {/* FAQ Section */}
                <div className="card shadow-lg p-4 mb-4">
                    <h5 className="mb-3">Frequently Asked Questions</h5>
                    <div className="accordion">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-2">
                                <button
                                    className="btn btn-outline-dark w-100 text-start"
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.question}
                                    <span className="float-end">{faqOpen === index ? "-" : "+"}</span>
                                </button>
                                {faqOpen === index && (
                                    <div className="mt-2 p-2 border rounded">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Support Section */}
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card shadow-lg p-4">
                            <h5 className="mb-3">Contact Support</h5>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-control" rows="4" placeholder="How can we help?"></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark w-100">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-6">
                        <div className="card shadow-lg p-4">
                            <h5 className="mb-3">Quick Links</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <a href="/user-guide" className="text-decoration-none">
                                        User Guide
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/terms" className="text-decoration-none">
                                        Terms & Conditions
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/privacy" className="text-decoration-none">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/settings" className="text-decoration-none">
                                        Manage Account
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Help