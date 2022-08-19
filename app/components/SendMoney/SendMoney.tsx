import MarkIcon from '@/images/MarkIcon.svg'
import image1 from '@/images/sendImg1.jpeg'
import image2 from '@/images/sendImg2.jpeg'
import image3 from '@/images/sendImg3.jpeg'
import cn from 'classnames'
import { FC } from 'react'

import Image from 'next/image'
import styles from './SendMoney.module.scss'

const SendMoney: FC = () => {
  return (
    <>
      <div className={styles['send-money__head']}>
        <p className={styles['send-money__title']}>Send money to </p>
        <MarkIcon className={styles['send-money__mark-icon']} />
      </div>
      <hr />
      <div className={styles['send-money__main']}>
        <div
          className={cn(
            styles['send-money__img'],
            styles['send-money__img-new']
          )}
        >
          +
        </div>
        <Image
          src={image1}
          width='80'
          height='80'
          alt='send image'
          className={styles['send-money__img']}
        />
        <Image
          src={image2}
          width='80'
          height='80'
          alt='send image'
          className={styles['send-money__img']}
        />
        <Image
          src={image3}
          width='80'
          height='80'
          alt='send image'
          className={styles['send-money__img']}
        />
        <Image
          src={image3}
          width='80'
          height='80'
          alt='send image'
          className={styles['send-money__img']}
        />
        <Image
          src={image3}
          width='80'
          height='80'
          alt='send image'
          className={styles['send-money__img']}
        />
        <Image
          src={image3}
          width='80'
          height='80'
          alt='send image'
          className={styles['send-money__img']}
        />
        <Image
          src={image3}
          width='80'
          height='80'
          alt='send image'
          className={styles['send-money__img']}
        />
      </div>
    </>
  )
}

export default SendMoney
