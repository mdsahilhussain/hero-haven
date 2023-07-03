/* eslint-disable @typescript-eslint/no-explicit-any */
import "./button.modules.css";

interface buttonProps {
  title: string;
  style: any;
  icon?: any;
}
interface communityButtonProps {
  title: string;
}
export const Button = (props: buttonProps) => {
  const { title, style, icon } = props;
  return (
    <button className="primaryButton" style={{ ...style }}>
      <span style={icon ? { marginRight: "0.5em" } : { display: "none" }}>
        {icon}
      </span>{" "}
      {title}
    </button>
  );
};

export const CommunityButton = (props: communityButtonProps) => {
  const { title } = props;
  return (
    <button className="communityButton btn">
      {title}
      <span className="icon-right"></span>
      <span className="icon-right after"></span>
    </button>
  );
};
