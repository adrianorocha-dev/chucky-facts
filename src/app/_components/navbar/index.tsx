import NavBarLink from "./navbar-link";

export default function NavBar() {
  return (
    <div className="flex items-center">
      <NavBarLink href="/">Random joke</NavBarLink>
      <NavBarLink href="/search">Search jokes</NavBarLink>
    </div>
  );
}
