import { AnchorTag, NavItemProps } from "../../components/Navbar/types";

// Atributos das tags de navegação
const anchorTagAttributes: Record<keyof typeof AnchorTag, NavItemProps> = {
  [AnchorTag.Home]: {
    title: 'Home',
    path: '/'
  },
  [AnchorTag.About]: {
    title: 'About',
    path: '/about'
  },
  [AnchorTag.Contact]: {
    title: 'Contact',
    path: '/contact'
  }
} as const;

export { anchorTagAttributes };