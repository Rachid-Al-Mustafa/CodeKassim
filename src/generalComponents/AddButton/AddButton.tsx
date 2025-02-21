import React, { CSSProperties } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

type Props = {
  label: string;
  onClick: () => void;
  style?: CSSProperties;
};

export default function AddButton({ label, onClick, style }: Props) {
  return (
    <Button
      style={style}
      type="primary"
      className="bg-red-600"
      icon={<PlusOutlined />}
      onClick={() => onClick()}
    >
      {label}
    </Button>
  );
}
