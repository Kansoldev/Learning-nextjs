import Links from "./Links";

const NavBar = () => {
  return (
    <div className="h-[100px] flex items-center justify-between">
      <div className="text-3xl font-bold">Logo</div>
      <Links />
    </div>
  );
};

export default NavBar;
