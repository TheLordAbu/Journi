import { useState } from "react";
import Form from "../../UI/Form";
import FormRow from "../../UI/FormRow";
import Input from "../../UI/Input";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("abdul@example.com");
  const [password, setPassword] = useState("boobies");
  return (
    <Form>
      <FormRow label="Email address">
        <Input
          type="email"
          id="email"
          placeholder="Your name"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>
      <FormRow>
        <button type="submit">
          <Link to="/app" className="px-3.5 py-4.5">
            Login
          </Link>
        </button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
