import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './Button.module.scss'

const Button: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, ...rest }) => {
  return <button {...rest} className={styles.button}>{children}</button>;
};

export default Button;
