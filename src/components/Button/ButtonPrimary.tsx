import { typeofData } from '@/utilities/Helpers';
import { mainColor } from '@/utilities/constants';
import React from 'react';
import styles from './style.module.scss';

interface IProps {
  text: string;
  backgroundColor?: boolean | string;
  onClick: (e?: any) => void;
}

const ButtonPrimary: React.FC<IProps> = ({
  text,
  onClick,
  backgroundColor
}: IProps) => {
  let color: string = mainColor;
  if (backgroundColor) {
    if (typeofData(backgroundColor) === 'string') {
      color = backgroundColor as string;
    }
  }
  return (
    <button
      onClick={onClick}
      className={`${styles.buttonPrimary} buttonPrimary`}
      style={{
        backgroundColor: backgroundColor ? color : 'transparent',
        color: backgroundColor ? 'white' : color
      }}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
