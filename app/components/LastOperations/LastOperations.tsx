import IncomeIcon from '@/images/incomeIcon.svg';
import SpendingIcon from '@/images/spendingIcon.svg';
import cn from 'classnames';
import { FC, useState } from 'react';
import { converNumberToCurrencyString } from 'utils/convert.utils';
import OperationHistory from '../OperationsHistory/OperationHistory';

import styles from './LastOperations.module.scss';

const LastOperations: FC = () => {
  const [operationType, setOperationType] = useState<'income' | 'spendings'>(
    'spendings'
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles['last-operation']}>
        <div
          className={cn(styles['last-operation__type'], {
            [styles.active]: operationType === 'income',
          })}
          onClick={() => setOperationType('income')}
        >
          <IncomeIcon className={styles['last-operation__icon']} />
          <div className={styles['last-operation__description']}>
            <p className={styles['last-operation__title']}>Income</p>
            <p className={styles['last-operation__amount']}>
              {converNumberToCurrencyString(5700)}
            </p>
          </div>
        </div>
        <div
          className={cn(styles['last-operation__type'], {
            [styles.active]: operationType === 'spendings',
          })}
          onClick={() => setOperationType('spendings')}
        >
          <SpendingIcon className={styles['last-operation__icon']} />
          <div className={styles['last-operation__description']}>
            <p className={styles['last-operation__title']}>Spendings</p>
            <p className={styles['last-operation__amount']}>
              {converNumberToCurrencyString(2254)}
            </p>
          </div>
        </div>
      </div>

      <div className={styles['last-spending']}>
        <p className={styles['last-spending__title']}>
          {operationType === 'spendings' ? 'Last spendings' : 'Last income'}
        </p>
        <p className={styles['last-spending__all']}>View all</p>
      </div>
      <hr />
      <OperationHistory />
    </div>
  );
};

export default LastOperations;
