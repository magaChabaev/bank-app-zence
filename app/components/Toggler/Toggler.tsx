import cn from 'classnames';
import { useState } from 'react';
import styles from './Toggler.module.scss';

const Toggler: FC = () => {
  const [togglerActive, setTogglerActive] = useState<boolean>(false);
  return (
    <div>
      <div className={styles.toggler}>
        <input
          type='checkbox'
          name='toggle'
          id='toggle'
          onClick={() => setTogglerActive((prev) => !prev)}
          className={cn(styles['toggler-checkbox'], {
            [styles['toggler-checkbox-active']]: togglerActive,
          })}
        />
        <label htmlFor='toggle' className={styles['toggler-label']}></label>
      </div>
      <label htmlFor='toggle' className='text-xs text-gray-700'>
        Toggle me.
      </label>
    </div>
  );
};

export default Toggler;
