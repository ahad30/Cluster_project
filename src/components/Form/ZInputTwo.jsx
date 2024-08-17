"use client"
import { Form, Input } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

const ZInputTwo = ({ name, type, label, defaultKey, value}) => {

  const { control, setValue, resetField } = useFormContext();
  // const { isEditModalOpen } = useAppSelector((state: RootState) => state.modal);

  useEffect(() => {
    if (value) {
      setValue(name, value);
    }
  }, [value, setValue, name]);
  
  // useEffect(() => {
  //   if (reset === true) {
  //     if (!isEditModalOpen) {
  //       resetField(name);
  //     }
  //   }
  // }, [reset, isEditModalOpen]);
  

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "The field is required",
      }}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={label}
          validateStatus={error ? "error" : ""}
          help={error?.message}
        >
          <Input
            className={defaultKey ? `${defaultKey}` : ``}
            {...field}
            type={type}
            placeholder={label}
          />
        </Form.Item>
      )}
    />
  );
};

export default ZInputTwo;
