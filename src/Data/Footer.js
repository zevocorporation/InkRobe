import Logo from '../img/Logo.svg'
const Data = {
    logo: Logo,
    connections : [
        {
            linkedin: 'https://www.linkedin.com/company/inkrobe',
            facebook: 'https://www.facebook.com/inkrobe/',
            twitter: 'Technicolor',
            indiamart : 'https://indiamart.com/inkrobe',
        }
    ],
    addresses: [
        {
            id: 1,
            name: 'Our Store',
            address: 'No. 1, 2nd Cross Street, 6th Main Road Kurinji Nagar Chennai - 600063'
        },
        {
            id: 2,
            name: 'Our Office',
            address: '1st Floor, 95/302, West, Mudichur Road, Tambaram, Chennai - 600045'
        }
    ],
    links: [
        {
            id: 1,
            footerlinks: [
                {
                    id: 1,
                    name: 'Privacy Policy',
                    href: './policy'
                },
                {
                    id: 2,
                    name: 'Terms of Use',
                    href: './terms'
                }
            ]
        },
    ]
}


export default Data