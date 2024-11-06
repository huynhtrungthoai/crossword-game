import { Typography } from 'antd';
import { Controller } from 'react-hook-form';
import SearchInput from '../Input/Search';

interface IProps {
  name: string;
  control: any;
  placeholder: string;
}

// Using in form tag

const SearchField: React.FC<IProps> = ({
  name,
  control,
  placeholder
}: IProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState }) => {
        const { errors } = formState;
        return (
          <>
            <SearchInput
              placeholder={placeholder}
              value={field.value}
              onChange={(data: any) => field.onChange(data)}
              error={!!errors[name]}
            />
            <Typography.Text type="danger">
              {errors[name]?.message as string}
            </Typography.Text>
          </>
        );
      }}
    />
  );
};
export default SearchField;
