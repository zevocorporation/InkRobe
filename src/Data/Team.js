import YBar from '../img/YBar.svg'
import RBar from '../img/RBar.svg'
import BBar from '../img/Bbar.svg'

import Member1 from '../img/Member.png'
import Member2 from '../img/Member2.jpg'
import Member3 from '../img/Member3.jpg'

const Data = { 
    title1 : 'meet',
    title2: 'our team',
    stats: [
        {
            id: 1,
            count: '27+',
            name: 'Corporate Clients',
            bar: YBar,
          
        },
        {
            id: 1,
            count: '4753+',
            name: 'InkRobers',
            bar: RBar,
        },
        {
            id: 1,
            count: '5',
            name: 'Google Ratings',
            bar: BBar,
            button: 'View',
            link: 'https://www.google.com/search?q=inkrobe&oq=inkrobe&aqs=chrome..69i57j69i59j35i39j0l2j69i61j69i60l2.3184j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3a525f1538dfd3ad:0x7b31beb630fdfcde,1,,,'        
        }
    ],
    members : [
        {
            id: 1,
            image: Member1,
            name: 'Mr. Justus Jamieson',
            designation: 'CEO & Founder',
            linkedin: 'http://linkedin.com',
            facebook: 'Technicolor',
            twitter: 'Technicolor',
            instagram: 'Technicolor',

            
        },
        {
            id: 2,
            image: Member2,
            name: 'K.S Rajan',
            designation: 'Head - Retail & Wholesale',
            linkedin: 'Technicolor',
            facebook: 'Technicolor',
            twitter: 'Technicolor',
            instagram: 'Technicolor',

            
        },        {
            id: 3,
            image: Member3,
            name: 'Ebenezer Charles',
            designation: 'Corporate Head',
            linkedin: 'Technicolor',
            facebook: 'Technicolor',
            twitter: 'Technicolor',
            instagram: 'Technicolor',

            
        },        
       
    ],
   
}

export default Data