import { PropsWithChildren } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
  return <header className={styles.header}></header>;
};

export default Header;
