function PageNav() {
  return (
    <nav className="flex items-center justify-between w-full py-3 px-4">
      <h1>Journi 🗺</h1>
      <ul className="flex items-center justify-between gap-4">
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
