import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import { TypeComponentsAuthFields } from './privateRoute.type';

const CheckRole: FC<PropsWithChildren<TypeComponentsAuthFields>> = ({
  Component: { isOnlyUser },
  children,
}) => {
  const token = useAuth();
  const { replace, pathname } = useRouter();

  console.log(children);
  console.log(isOnlyUser);

  const Children = () => <>{children}</>;

  if (token) return <Children />;

  if (isOnlyUser) pathname !== '/' && replace('/');

  return null;
};

export default CheckRole;
