import Logo from "../UI/Logo";
import CreateUserForm from "../features/auth/CreateUserForm";

function CreateUser() {
  return (
    <main className="min-h-screen grid grid-cols-[38rem] content-center justify-center gap-[3.2rem] text-center">
      <Logo />
      <CreateUserForm />
    </main>
  );
}

export default CreateUser;
