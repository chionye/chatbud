type navbarOptionsProps = {
    label: string,
    path: string,
    child: boolean,
    children?: {
        label: string,
        path: string,
        child: boolean
    }[]
}[]

const NavbarOptions: navbarOptionsProps = [
    {
        label: 'Our Products',
        path: '#',
        child: true,
        children: [
            {
                label:'All Products',
                path: "/our-products",
                child:false
            },
            {
                label:'ChatBud',
                path: "/our-products/:productId",
                child:false
            }
        ]
    },
    {
        label: 'Pricing',
        path: '/pricing',
        child: false,
    },
    {
        label: 'Help Center',
        path: '/help-center',
        child: false,
    },
    {
        label: 'About',
        path: '/about',
        child: false,
    }
]

export { NavbarOptions };