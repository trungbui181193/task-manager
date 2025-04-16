import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [form, setForm] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await axios.post('http://localhost:8080/api/auth/register', form);
            alert('Đăng ký thành công!');
            navigate('/login'); // ✅ chuyển hướng sau khi đăng ký thành công
        } catch (err) {
            console.error(err);
            setError('Đăng ký thất bại. Vui lòng thử lại.');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Đăng ký</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Tên đăng nhập</label>
                    <input type="text" className="form-control" name="username" value={form.username} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Mật khẩu</label>
                    <input type="password" className="form-control" name="password" value={form.password} onChange={handleChange} required />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary">Đăng ký</button>
            </form>
        </div>
    );
}

export default Register;
