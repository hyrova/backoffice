export interface NavigationDropdown {
  name: string;
  icon: string;
  subNavigation: Array<NavigationDropdown | NavigationLink>;
}

export interface NavigationLink {
  name: string;
  href: string;
}

export interface NavigationButton {
  name: string;
  action: string;
}

const navigation: Array<
  NavigationDropdown | NavigationLink | NavigationButton
> = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "Utilisateurs",
    href: "/users",
  },
  {
    name: "Autre",
    icon: "ac_unit",
    subNavigation: [
      {
        name: "test",
        href: "test",
      },
      {
        name: "Autre2",
        icon: "ac_unit",
        subNavigation: [
          {
            name: "test2",
            href: "test",
          },
        ],
      },
    ],
  },
  {
    name: "Se déconnecter",
    action: "_logout",
  },
];

export default navigation;
