import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <header
        className="flex justify-between border-[10px] rounded-2xl overflow-x-hidden md:hidden "
        style={{ border: "0.1px #01119652 solid" }}
      >
        <Link href={"/"}><div className="flex justify-between items-center w-fit bg-mediumblue-200 p-4 py-2">
          <img src="/logo.png" className="mr-2 w-[130px]" alt="" />
          
        </div></Link>

        <div className="bg-mediumblue-100 flex justify-center items-center px-4 ">
          <img src="/grid.svg" alt="" />
        </div>
      </header>

      <header className="rounded-2xl overflow-x-hidden md:flex hidden"
        style={{ border: "0.1px #01119652 solid" }}
      >
        <Link href={"/"}><div className="flex justify-between items-center w-fit bg-mediumblue-200 p-4 py-2">
          <img  src="/logo.png" className="mr-2 w-[130px] p-2 logo" alt="" />
        </div></Link>

        <div></div>

        <div className="flex ml-auto">
          <Comp>info@mavride.net</Comp>
          <Comp>281-985-9981</Comp>
          <Comp>440 Louisiana Str Ste 900, Houston Texas 77002</Comp>
        </div>
      </header>
    </>
  );
};

export default NavBar;

function Comp({ children }: any) {
  return (
    <div className="flex justify-center border-r border-solid items-center w-fit bg-mediumblue-200 p-4 py-2 text-[#011196] z-1"
    style={{ border: "0.1px #01119652 solid" }}
    >
      {children}
    </div>
  );
}
