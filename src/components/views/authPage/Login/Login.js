import Button from "../../../reuseables/Button";
import Input from "../../../reuseables/Input";

const Login = () => {
  return (
    <div className="login-btn">
      <form>
        <label htmlFor="email">Email</label>
        <Input type="email" id="email" placeholder="Enter your email" />
      </form>
      <Button name="sign in" />
    </div>
  );
};
export default Login;
