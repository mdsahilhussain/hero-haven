import "./button.modules.css";
interface buttonProps {
  title: string;
}
interface communityButtonProps {
  title: string;
}
export const Button = (props: buttonProps) => {
  const { title } = props;
  return <button className="primaryButton">{title}</button>;
};

export const CommunityButton = (props: communityButtonProps) => {
  const { title } = props;
  return (
    <button className="communityButton  btn">
      {title}
      <span className="icon-right"></span>
      <span className="icon-right after"></span>
    </button>
  );
};
