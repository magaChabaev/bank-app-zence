import AuthProvider from '@/providers/AuthProvider';
import type { TypeComponentsAuthFields } from '@/providers/privateRoute.type';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

type TypeAppProps = AppProps & TypeComponentsAuthFields;

function MyApp({ Component, pageProps }: TypeAppProps) {
  return (
    <AuthProvider Component={Component}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
