import { Controller } from 'react-hook-form';
import SelectInput from '../Input/Select';

type TypeData = {
  id: string;
  name: string;
};

interface IProps {
  name: string;
  control: any;
  placeholder: string;
  data: Array<TypeData>;
  onSearch: (name: string, value: string) => void;
  onChange: (value: string) => void;
  fieldNames: {
    label: string;
    value: string;
  };
  loading: boolean;
}

const SelectField: React.FC<IProps> = ({
  name,
  control,
  placeholder,
  data,
  onSearch,
  loading,
  onChange,
}: IProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState }) => {
        return (
          <SelectInput
            placeholder={placeholder}
            data={data}
            onChange={onChange}
            onSearch={(value: string) => {
              return onSearch(name, value);
            }}
            loading={loading}
            value={field.value}
            defaultValue={formState?.defaultValues?.[name]}
          />
        );
      }}
    />
  );
};

export default SelectField;
