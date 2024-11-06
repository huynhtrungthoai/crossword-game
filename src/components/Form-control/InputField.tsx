import { Input, Typography } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

interface IProps {
  placeholder: string;
  name: string;
  control: any;
}

const InputField: React.FC<IProps> = ({
  name,
  placeholder,
  control,
}: IProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState }) => {
        const { errors } = formState;
        const status = !!errors[name];

        return (
          <>
            <Input
              {...field}
              placeholder={placeholder}
              style={{ height: "44px" }}
              value={field.value}
              onChange={(data: any) => field.onChange(data)}
              status={status ? "error" : ""}
            />
            {status && (
              <Typography.Text
                type="danger"
                key={name}
                style={{ height: "22px" }}
              >
                {errors[name]?.message as string}
              </Typography.Text>
            )}
          </>
        );
      }}
    />
  );
};

export default InputField;
