import ProgressBar from '@ramonak/react-progress-bar';
import { FC } from 'react';

import styles from './ProgressbarLimit.module.scss';

type ProgressBarLimitType = {
  limitTitle: string;
  maxLimitNumber: number;
  currentLimitNumber: number;
};

const ProgressBarLimit: FC<ProgressBarLimitType> = ({
  limitTitle,
  maxLimitNumber,
  currentLimitNumber,
}) => {
  return (
    <>
      <div className={styles['progress-bar__header']}>
        <p className={styles['progress-bar__header-title']}>{limitTitle}</p>
        <p>
          $ {currentLimitNumber.toLocaleString()} /{' '}
          {maxLimitNumber.toLocaleString()}
        </p>
      </div>
      <ProgressBar
        completed={currentLimitNumber}
        maxCompleted={maxLimitNumber}
        height='10px'
        isLabelVisible={false}
        bgColor='black'
        animateOnRender
      />
    </>
  );
};

export default ProgressBarLimit;
