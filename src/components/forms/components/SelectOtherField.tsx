import { Form, Select } from "antd";
import React from "react";

export type SelectOptions = Array<{ label: string; value: string }>;

type Props = {
  placeholder?: string,
  defaultValue?: string | string[];
  disabled?: boolean;
  id: string;
  label: string;
  options: SelectOptions;
  onChange?: (str: string) => void;
  required?: boolean;
  mode?: "multiple" | "tags" | undefined;
  loading?: boolean;
};

export default function SelectOtherField({
  defaultValue,
  placeholder,
  disabled,
  label,
  id,
  options,
  onChange,
  required,
  mode,
  loading,
}: Props) {
  return (
    <Form.Item
      key={id}
      label={label}
      name={id}
      rules={[{ required, message: "Required" }]}
    >
      <Select
        loading={loading}
        mode={mode}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={(value) => onChange && onChange(value as string)}
        disabled={disabled}
        className="!w-full"
        filterOption={(input, option) =>
          option?.children?.toLowerCase()?.indexOf(input?.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA?.children
            ?.toLowerCase()
            ?.localeCompare(optionB?.children?.toLowerCase())
        }
        allowClear
      >
        {options?.map((option, i) => (
          <Select.Option key={i} value={option?.value}>
            {option?.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
}
