import cn from 'classnames';
import type { FC, InputHTMLAttributes } from 'react';
import { useState } from 'react';

import styles from './Input.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
};

const Input: FC<InputProps> = ({ placeholder, ...rest }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const onFocusOut = (e: FocusEvent<HTMLInputElement>) =>
    e.target.value ? setIsActive(true) : setIsActive(false);
  const onFocus = () => setIsActive(true);

  return (
    <div
      className={cn(styles['input-wrapper'], {
        [styles['input-wrapper-active']]: isActive,
      })}
    >
      <input
        {...rest}
        className={styles.input}
        onFocus={onFocus}
        onBlur={onFocusOut}
      />
      {placeholder && (
        <label htmlFor={placeholder} className={styles.placeholder}>
          {placeholder}
        </label>
      )}
    </div>
  );
};

export default Input;
