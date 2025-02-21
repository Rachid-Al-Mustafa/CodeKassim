
import { DatePicker, Form } from "antd";
import React from "react";

// TODO: Why is this file run before index.tsx?


type Props = {
  id: string;
  label: string;
  format?: string;
  showTime?: boolean;
  required?: boolean;
  timePicker?: boolean;
};

export default function DateField({
  id,
  label,
  format = "MMM DD YYYY",
  showTime = false,
  required,
  timePicker = false,
}: Props) {
  return (
    <Form.Item
      key={id}
      label={label}
      name={id}
      rules={[{ required, message: "Required" }]}
    >
      <DatePicker
        picker={timePicker ? "time" : "date"}
        className="!w-full"
        showTime={showTime}
        format={format}
        data-cy={id}
      />
    </Form.Item>
  );
}
