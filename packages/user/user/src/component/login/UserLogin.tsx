import React from 'react';
import LoginForm from '../../components/LoginForm';
import styles from './UserLogin.module.scss';
import loginImage from '../../images/login-illustration2.png';

const UserLogin: React.FC = () => {
  return (
    <main>
      <div className={styles.loginImage}>
        <img
          src={loginImage}
          alt="shopping illustration"
        />
      </div>
      <LoginForm />
    </main>
  );
};

export default UserLogin;
