import { anchorTagAttributes } from "../../utils/mock/routingPaths";
import { NavItemProps, ProfilePicProps } from "./types";

// Componente NavItem
const NavItem = ({ title, path }: NavItemProps) => {
  return (
    <a href={path} className="hover:text-gray-400">
      {title}
    </a>
  );
};


// Componente ProfilePic
const ProfilePic = ({ src, alt = "Profile" }: ProfilePicProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-10 h-10 rounded-full object-cover"
    />
  );
};

const randomizeFrom0to100 = () => Math.floor(Math.random() * 100);

// Componente NavBar
function NavBar() {
  return (
    <nav className="w-full h-16 bg-gray-800 shadow-md">
      <ul className="flex items-center justify-between px-4 h-full">
        <div className="flex items-center space-x-8 text-white text-xl">
          {Object.values(anchorTagAttributes).map(({ path, title }) => (
            <NavItem key={path} path={path} title={title} />
          ))}
        </div>
        <div className="flex items-center">
          <ProfilePic src={`https://rickandmortyapi.com/api/character/avatar/${randomizeFrom0to100()}.jpeg`} />
        </div>
      </ul>
    </nav>

  );
}

export { NavBar, NavItem, ProfilePic };
