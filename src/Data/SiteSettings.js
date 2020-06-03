import Logo from '../img/Logo.svg'

const fb = "./"
const li = "./"
const im = "./"
const ig = "./"

const Data = { 
    logo : Logo,
    navLinks : [
        {
            id: 1,
            name: 'Home',
            href: './'
        },
        {
            id: 2,
            name: 'Services',
            href: '#services'
        },
        {
            id: 3,
            name: 'Clients',
            href: '#clients'
        },
        {
            id: 4,
            name: 'Showcase',
            href: '#showcase'
        },
        {
            id: 5,
            name: 'Team',
            href: '#team'
        },
        {
            id: 6,
            name: 'Journey',
            href: '#journey'
        },
        {
            id: 5,
            name: 'Get Connected',
            dropdowns : [fb,li,ig,im]
        }
    ],
    button : {
        name: 'Get quote',
        href: './'
    }
}

export default Data