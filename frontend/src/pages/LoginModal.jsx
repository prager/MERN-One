import React, { useState } from "react";

const LoginModal = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Login failed");
      alert("Login successful. Token: " + data.token);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <a
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
        className="text-decoration-none text-white"
      >
        Login
      </a>

      <div className="modal fade" id="loginModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                {error && <div className="alert alert-danger">{error}</div>}
                <input
                  type="text"
                  name="username"
                  className="form-control my-2"
                  placeholder="Username"
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  className="form-control my-2"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-success">
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
