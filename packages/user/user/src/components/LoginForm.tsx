import React, { useState, useContext } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { loginUser, type LoginPayload } from '../api/UserApi';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import styles from '../gate/UserLogin.module.scss';

interface LoginFormData {
  loginId: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormData>({
    loginId: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const payload: LoginPayload = { ...formData };

    try {
      const result = await loginUser(payload);
      setUser(result.user);
      navigate('/main');
    } catch (error) {
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className={styles.LoginForm}>
      <h2>로그인</h2>
      <p>Enter your details below</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="loginId"
          placeholder="loginid"
          value={formData.loginId}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">
          로그인
        </button>
      </form>

      <div className="forgot-area">
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  );
};

export default LoginForm;
