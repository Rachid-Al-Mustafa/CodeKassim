import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

type Props = {
  onClick: () => void;
};

export default function EditButton({ onClick }: Props) {
  return (
    <Button
      style={{ border: "1px solid black" }}
      onClick={onClick}
      icon={
        <EditOutlined
          style={{
            color: "black",

            cursor: "pointer",
          }}
        />
      }
    ></Button>
  );
}
