import React from "react";
import { Row } from "antd";
import { clsx } from "clsx";

type TFullScreenLoader = {
  full?: boolean;
};

function FullScreenLoader({ full }: TFullScreenLoader) {
  return (
    <Row
      className={clsx(
        "w-[98vw] h-[94vh] bg-[rgb(250,250,250)] justify-center items-center flex flex-row",
        {
          "w-screen h-[100vh]": full,
        }
      )}
    >
      {/* image gif to be added */}
    </Row>
  );
}

export default FullScreenLoader;
