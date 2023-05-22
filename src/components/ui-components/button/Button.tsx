import "./button.modules.css";
interface buttonProps {
  title: string;
}
const Button = ({ title }: buttonProps) => {
  return <button className="button">{title}</button>;
};

export default Button;
