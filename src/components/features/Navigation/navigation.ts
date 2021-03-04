export interface NavigationDropdown {
    name: string
    icon: string
    subNavigation: Array<NavigationDropdown|NavigationLink>
}

export interface NavigationLink {
    name: string
    href: string
}

const navigation: Array<NavigationDropdown|NavigationLink> = [
    {
        name: 'Accueil',
        href: '/'
    },
    {
        name: 'Utilisateurs',
        href: '/users'
    },
    {
        name: 'Autre',
        icon: 'ac_unit',
        subNavigation: [
            {
                name: 'test',
                href: 'test'
            }
        ]
    }
]

export default navigation
