import DashboardIcon from '@/images/dashboardIcon.svg';
import InvestmentsIcon from '@/images/investmentsIcon.svg';
import ProfileImage from '@/images/profileIcon.jpeg';
import SignoutIcon from '@/images/signoutIcon.svg';
import TransactionsIcon from '@/images/transactionsIcon.svg';
import WalletIcon from '@/images/WalletIcon.svg';
import ZenceIcon from '@/images/zenceIcon.svg';
import Image from 'next/image';

import styles from './Sidebar.module.scss';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <ZenceIcon className={styles.icon} />
        <h1 className={styles.title}>Zence</h1>
      </div>
      <div className={styles.profile}>
        <Image
          src={ProfileImage}
          className={styles['profile-image']}
          height='80'
          width='80'
          alt='profile image'
        />
        <div className={styles['profile-info']}>
          <p className={styles.greeting}>Wellcome back,</p>
          <p className={styles.fullname}>Taylor Simora</p>
        </div>
      </div>
      <div className={styles.budget}>
        <p className={styles.balance}>$34,321</p>
        <p className={styles['budget-time']}>Monthly budget</p>
      </div>
      <nav>
        <ul className={styles['nav-wrapper']}>
          <li className={styles['nav-item']}>
            <DashboardIcon className={styles['nav-icon']} />
            <p>Dashboard</p>
          </li>
          <li className={styles['nav-item']}>
            <InvestmentsIcon className={styles['nav-icon']} />
            <p>Investments</p>
          </li>
          <li className={styles['nav-item']}>
            <TransactionsIcon className={styles['nav-icon']} />
            <p>Transactions</p>
          </li>
          <li className={styles['nav-item']}>
            <WalletIcon className={styles['nav-icon']} />
            <p>Wallet</p>
          </li>
        </ul>
      </nav>
      <div className={styles['nav-item']}>
        <SignoutIcon className={styles['nav-icon']} />
        <p>Sign-out</p>
      </div>
    </div>
  );
};

export default Sidebar;
