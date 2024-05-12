export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
        <img
          className="w-full h-full object-cover"
          src="/public/codingMan.svg"
          width={688}
          height={953}
          alt="Background"
        />
      </div>
    </div>
  );
};
