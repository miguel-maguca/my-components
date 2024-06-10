import { FC } from "react";
import { SmartRatingProps } from "../SmartRating.types";
import SmartRating from "../SmartRating";

const Example: FC<SmartRatingProps> = ({
  testIdPrefix = "smart-rating",
  title = "Smart Rating",
  theme = "primary",
  disabled = false,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <SmartRating testIdPrefix={testIdPrefix} title={title} disabled={disabled} theme={theme} />
    </div>
  );
};

export default Example;
