import dynamic from 'next/dynamic';
import { FC, PropsWithChildren } from 'react';
import { TypeComponentsAuthFields } from './privateRoute.type';

const CheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<PropsWithChildren<TypeComponentsAuthFields>> = ({
  Component: { isOnlyUser },
  children,
}) => {
  return isOnlyUser ? (
    <CheckRole Component={{ isOnlyUser }}>{children}</CheckRole>
  ) : (
    children
  );
};

export default AuthProvider;
