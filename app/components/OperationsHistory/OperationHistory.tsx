import { FC } from 'react';
import OperationHistoryItem from './components/OperationHistoryItem';

import styles from './OperationHistory.module.scss';

const OperationHistory: FC = () => {
  return (
    <div className={styles['history-wrapper']}>
      {[...new Array(100)].map((item, index) => (
        <OperationHistoryItem key={index} />
      ))}
    </div>
  );
};

export default OperationHistory;
