import "./EmailPrompt.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";

const EmailPrompt = () => {
  return (
    <div className="EmailPrompt">
      <AiOutlineCheckCircle size={40} />
      <p>Your Email Has Been Sent</p>
    </div>
  );
};
export default EmailPrompt;
