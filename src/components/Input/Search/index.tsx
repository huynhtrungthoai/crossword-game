import { Input } from 'antd';
import React from 'react';
import * as Icons from 'react-feather';
import styles from './style.module.scss';

interface IProps {
  placeholder: string;
  value: string;
  onChange: (e?: any) => void;
  error: boolean;
}

const SearchInput: React.FC<IProps> = ({
  placeholder,
  value,
  onChange,
  error
}: IProps) => {
  return (
    <Input
      prefix={<Icons.Search />}
      placeholder={placeholder}
      className={styles.searchInput}
      value={value}
      onChange={onChange}
      status={error ? 'error' : ''}
    />
  );
};

export default SearchInput;
