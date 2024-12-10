import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import '../../assets/managecategory.css'

export default function ManageCategories() {
    const [categories, setCategories] = useState([
        { id: 1, name: "Food" },
        { id: 2, name: "Travel" },
        { id: 3, name: "Entertainment" },
    ]);
    const [newCategory, setNewCategory] = useState("");
    const [editingCategory, setEditingCategory] = useState(null);
    const [editedName, setEditedName] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const handleAddCategory = () => {
        if (!newCategory.trim()) {
            alert("Category name cannot be empty.");
            return;
        }
        setCategories([...categories, { id: Date.now(), name: newCategory }]);
        setNewCategory("");
    };

    const handleEditCategory = (id) => {
        setCategories(
            categories.map((category) =>
                category.id === id ? { ...category, name: editedName } : category
            )
        );
        setEditingCategory(null);
        setEditedName("");
    };

    const handleDeleteCategory = () => {
        setCategories(categories.filter((category) => category.id !== selectedCategoryId));
        setShowDeleteModal(false);
        setSelectedCategoryId(null);
    };

    return (
        <div className="d-flex flex-column vh-100">
            <Navbar />

            {/* Main Content */}
            <div className="container mt-4 flex-grow-1">
                <h2 className="mb-4 text-center fw-bold">Manage Categories</h2>

                {/* Add New Category */}
                <div className="d-flex justify-content-center align-items-center mb-4">
                    <div className="input-group" style={{ maxWidth: "600px" }}>
                        <input
                            type="text"
                            className="form-control rounded-start"
                            placeholder="Enter a new category"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                        <button
                            className="btn btn-dark rounded-end"
                            style={{ whiteSpace: "nowrap" }}
                            onClick={handleAddCategory}
                        >
                            Add Category
                        </button>
                    </div>
                </div>

                {/* Categories List */}
                <div className="row g-4">
                    {categories.map((category) => (
                        <div key={category.id} className="col-md-4">
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    {editingCategory === category.id ? (
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="text"
                                                className="form-control me-2"
                                                value={editedName}
                                                onChange={(e) => setEditedName(e.target.value)}
                                            />
                                            <button
                                                className="btn btn-sm btn-success me-2"
                                                onClick={() => handleEditCategory(category.id)}
                                            >
                                                Save
                                            </button>
                                            <button
                                                className="btn btn-sm btn-secondary"
                                                onClick={() => setEditingCategory(null)}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fs-5">{category.name}</span>
                                            <div>
                                                <button
                                                    className="btn btn-sm btn-outline-primary me-2"
                                                    onClick={() => {
                                                        setEditingCategory(category.id);
                                                        setEditedName(category.name);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => {
                                                        setSelectedCategoryId(category.id);
                                                        setShowDeleteModal(true);
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Deletion</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={() => setShowDeleteModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this category?</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setShowDeleteModal(false)}
                                >
                                    Cancel
                                </button>
                                <button className="btn btn-danger" onClick={handleDeleteCategory}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
