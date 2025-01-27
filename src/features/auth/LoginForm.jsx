import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../UI/Form";
import FormRow from "../../UI/FormRow";
import Input from "../../UI/Input";

function LoginForm() {
  const [email, setEmail] = useState("abdul@example.com");
  const [password, setPassword] = useState("JSRJS");
  return (
    <Form>
      <FormRow label="Email address">
        <Input
          type="email"
          id="email"
          placeholder="Your email"
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
      <FormRow type="row">
        <button type="submit">
          <Link
            to="/app"
            className="px-3.5 py-2.5 border font-bold border-cyan-600 rounded-md text-cyan-600 hover:border-cyan-700 hover:text-cyan-700"
          >
            Login
          </Link>
        </button>
        <button type="submit">
          <Link
            to="/app"
            className="px-3.5 py-2.5 rounded-md font-bold text-gray-50 bg-cyan-600 hover:bg-cyan-700"
          >
            Create an account
          </Link>
        </button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
