import { useState } from 'react';
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [form, setForm] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login(form);
            localStorage.setItem('token', res.data.token); // lưu token
            navigate('/');
        } catch (err) {
            alert('Sai tài khoản hoặc mật khẩu');
        }
    };

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
            <form className="bg-white p-4 rounded shadow" onSubmit={handleSubmit} style={{ width: 300 }}>
                <h2 className="text-center mb-4">Đăng nhập</h2>
                <input className="form-control mb-3" placeholder="Username"
                    onChange={e => setForm({ ...form, username: e.target.value })} />
                <input type="password" className="form-control mb-3" placeholder="Password"
                    onChange={e => setForm({ ...form, password: e.target.value })} />
                <button className="btn btn-primary w-100">Đăng nhập</button>
                <div className="mt-3">
                    <p>Bạn chưa có tài khoản? <a href="/register">Đăng ký</a></p>
                </div>
            </form>
        </div>
    );
}
