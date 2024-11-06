import { Select } from 'antd';
import React, { memo } from 'react';

type TypeData = {
  id: string;
  name: string;
};

interface IProps {
  data: Array<TypeData>;
  placeholder: string;
  onChange: (id: string) => void;
  onSearch: (value: string) => void;
  loading: boolean;
  value: string;
  defaultValue?: any;
}

const SelectInput: React.FC<IProps> = ({
  data,
  placeholder,
  onSearch,
  onChange,
  loading,
  value,
  defaultValue,
}: IProps) => {
  return (
    <Select
      loading={loading}
      showSearch
      data-placeholder={placeholder}
      onChange={onChange}
      onSearch={onSearch}
      filterOption={() => true}
      value={value}
      defaultValue={defaultValue}
    >
      {data?.map(({ id, name }) => (
        <Select.Option value={id} key={id}>
          {name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default memo(SelectInput);
