import LoginForm from "../features/auth/LoginForm";

function Homepage() {
  return (
    <main className="min-h-screen grid grid-cols-[48rem] content-center justify-center gap-[3.2rem] text-center">
      <div>
        <h1 className="font-black">Welcome to Journi</h1>
        <p className="mb-4 italic meow text-xl">Your very own travel journal</p>
        <p>
          You travel the world, <br />
          we keep track of everything
        </p>
      </div>
      <LoginForm />
    </main>
  );
}

export default Homepage;
