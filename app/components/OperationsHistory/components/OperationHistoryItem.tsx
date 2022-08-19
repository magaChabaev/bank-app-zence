import MarkIcon from '@/images/markIcon.svg';
import ShoppingCardIcon from '@/images/shoppingCardIcon.svg';
import { FC } from 'react';
import { converNumberToCurrencyString } from 'utils/convert.utils';

import styles from './OperationHistoryItem.module.scss';

const OperationHistoryItem: FC = () => {
  return (
    <div className={styles['history-item']}>
      <div className={styles['history-item__group']}>
        <div className={styles['history-item__icon-wrapper']}>
          <ShoppingCardIcon className={styles['history-item__icon']} />
        </div>
        <div className={styles['history-item__details']}>
          <p className={styles['history-item__title']}>Market</p>
          <p className={styles['history-item__date']}>
            June 15, 2022 at 12:30 AM
          </p>
        </div>
      </div>
      <div className={styles['history-item__group']}>
        <p>{converNumberToCurrencyString(-32)}</p>
        <MarkIcon className={styles['history-item__icon-sm']} />
      </div>
    </div>
  );
};

export default OperationHistoryItem;
