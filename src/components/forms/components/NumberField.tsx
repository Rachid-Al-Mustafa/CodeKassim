import React from "react";
import { Form, InputNumber } from "antd";

type Props = {
  disabled?: boolean;
  id: string;
  label: string;
  required?: boolean;
  dataCy?: string;
  style?: any;
};

export default function TextField({
  disabled,
  id,
  label,
  dataCy,
  required = false,
  style,
}: Props) {
  return (
    <Form.Item
      style={style}
      key={id}
      label={label}
      name={id}
      rules={[{ required, message: "Required" }]}
    >
      <InputNumber disabled={disabled} className="!w-full" data-cy={dataCy} />
    </Form.Item>
  );
}
