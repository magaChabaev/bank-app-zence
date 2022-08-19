import Toggler from '@/components/Toggler/Toggler';
import MastercardIcon from '@/images/mastercardIcon.svg';
import cn from 'classnames';
import { converNumberToCurrencyString } from 'utils/convert.utils';

import styles from './Card.module.scss';

const Card: FC = (props) => {
  return (
    <div className={styles.card}>
      <div className={cn(styles['card__header'], styles['card__item'])}>
        <p>Availiable balance</p>
        <Toggler />
      </div>
      <div className={cn(styles['card__balance'], styles['card__item'])}>
        <p>{converNumberToCurrencyString(12345)}</p>
      </div>
      <div className={cn(styles['card__number'], styles['card__item'])}>
        <p>**** 4532</p>
        <MastercardIcon />
      </div>
    </div>
  );
};

export default Card;
