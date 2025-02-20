import LoginForm from "../features/auth/LoginForm";
import Logo from "../UI/Logo";

function Login() {
  return (
    <main className="min-h-screen grid grid-cols-[38rem] content-center justify-center gap-[3.2rem] text-center">
      <Logo />
      <LoginForm />
    </main>
  );
}

export default Login;
