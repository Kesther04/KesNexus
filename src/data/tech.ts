import adverts from '../assets/codeImg/adverts.png'
import house from '../assets/codeImg/House-rent.png'
import phone from '../assets/codeImg/phone-acc.png'
import blog from '../assets/codeImg/blog.png'
import odyss from '../assets/codeImg/odysslogin.png';
import filmWorld from '../assets/codeImg/filmWorld.png';

type project = {
        title: string,
        image: string,
        description: string,
        stack: string[],
        button: {label:string, link:string}[]
    }[];

export const DEV_PROJECT_CRED: project = [
   
    {
        "title": "Golden Voice",
        "image": blog,
        "description": "A practice blog platform that possesses the features of posting articles, commenting, and user authentication.",
        "stack": ["HTML","CSS","PHP", "MySQL","JQuery"],
        "button": [
            {"label": "View Repository","link": "https://github.com/kesther04/LARA_BLOG"}
        ]
    },
    {
        "title": "Obimi Phone Accesories Clone",
        "image": phone,
        "description": "A phone accessories e-commerce website built to provide the best user experience for buying and selling phone accessories as well as managing user accounts.",
        "stack": ["HTML","CSS","PHP", "MySQL", "JQuery"],
        "button": [
            {"label": "View Repository","link": "https://github.com/kesther04/Phone_acc_repo"}
        ]
    },
    {
        "title": "House Rent Management System",
        "image": house,
        "description": "A private website for handling data of tenants, managing house rentals and receipts generation.",
        "stack": ["HTML","CSS","PHP", "MySQL","JQuery"],
        "button": [
            {"label": "View Repository","link": "https://github.com/kesther04/HOUSE_RENT_MANAGEMENT_REPO"}
        ]
    },
    {
        "title": "Adverts Ecommerce Platform",
        "image": adverts,
        "description": "A practice advertising e-commerce platform where users can buy and sell products or services as well as manage their listings.",
        "stack": ["HTML","CSS","PHP", "MySQL","JQuery"],
        "button": [
            {"label": "View Repository","link": "https://github.com/kesther04/buy_sell_ad_repo"}
        ]
    },
    {
        "title": "Odyss travel Company Web App",
        "image": odyss,
        "description":"A web application for travel companies to setup routes and vehicles as well as manage users who book trips. As a part of the odyss startup dev team, I offered my expertise in building responsive and user-friendly interfaces using ReactJS and TailwindCSS.",
        "stack": ["ReactJS","TailwindCSS"],
        "button": [
            {"label": "View Repository","link": "https://github.com/kesther04/OdyssWebApp"},
            {"label": "View Odyss Website","link": "https://odyss.ng/"}
        ]
    },
    {
        "title":"FilmWorld",
        "image": filmWorld,
        "description":"A practice movie streaming platform that allows users to watch and download movies or series online, possesses search functionality, manage their download history and create watchlists.",
        "stack": ["ReactJS","TailwindCSS","PHP", "MySQL"],
        "button": [
            {"label": "View Repository","link": "https://github.com/kesther04/Film_App"},
        ]
    }

];

