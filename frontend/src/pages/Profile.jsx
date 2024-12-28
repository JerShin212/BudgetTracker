import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    username: "johndoe123",
    email: "john.doe@example.com",
    joined: "January 2023",
    profilePicture: "https://via.placeholder.com/150", // Replace with actual URL
  });

  const [isEditing, setIsEditing] = useState(false); // Track editing state
  const [editedUser, setEditedUser] = useState({ ...user }); // Store editable user data

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setEditedUser(user); // Revert changes
    setIsEditing(false);
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />

      {/* Main Content */}
      <div className="container mt-4 flex-grow-1">
        <h2 className="text-center fw-bold mb-4">My Profile</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg p-4">
              {/* Profile Picture */}
              <div className="text-center mb-4">
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className="rounded-circle shadow"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* User Details */}
              <div className="mb-4">
                {isEditing ? (
                  <>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={editedUser.name}
                        onChange={(e) =>
                          setEditedUser({ ...editedUser, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        value={editedUser.username}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            username: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={editedUser.email}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>Name: </strong> {user.name}
                    </p>
                    <p>
                      <strong>Username: </strong> @{user.username}
                    </p>
                    <p>
                      <strong>Email: </strong> {user.email}
                    </p>
                    <p>
                      <strong>Joined: </strong> {user.joined}
                    </p>
                  </>
                )}
              </div>

              {/* Buttons */}
              <div className="text-center">
                {isEditing ? (
                  <>
                    <button
                      className="btn btn-success me-2"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-dark"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
