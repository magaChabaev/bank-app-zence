import Button from '@/components/UI/Button/Button';
import Input from '@/components/UI/Input/Input';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AuthService } from 'services/auth/auth.service';

import styles from './Auth.module.scss';

const login = async (e) => {
  e.preventDefault();
  AuthService.login();
};

const Auth: FC = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Log in</title>
      </Head>
      <div className={styles['auth-wrapper']}>
        <div className={styles['auth-container']}>
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Button
            onClick={(e) => login(e).then(() => router.push('/dashboard'))}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Auth;
