import Links from "./Links";

const NavBar = () => {
  return (
    <div className="relative h-[100px] flex items-center justify-between px-4">
      <div className="text-3xl font-bold">Logo</div>
      <Links />
    </div>
  );
};

export default NavBar;
