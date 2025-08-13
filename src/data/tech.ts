import adverts from '../assets/codeImg/adverts (2).png'
import house from '../assets/codeImg/House-rent (1).png'
import phone from '../assets/codeImg/phone-acc (1).png'
import blog from '../assets/codeImg/blog (1).png'

type project = {
        title: string,
        image: string,
        description: string,
        stack: string[],
        button: {label:string, link:string}[]
    }[];

export const PROJECT_CRED: project = [
   
    

    {
        "title": "FilmWorld",
        "image": blog,
        "description": "A movie website built with React and Tailwind CSS. this project showcases a modern design and responsive layout.",
        "stack": ["React","Tailwind CSS","PHP", "MySQL"],
        "button": [
            {"label": "View Repository","link": "https://github.com/kesther04/film_app"}
        ]
    },
    {
        "title": "FilmWorld",
        "image": phone,
        "description": "A movie website built with React and Tailwind CSS. this project showcases a modern design and responsive layout.",
        "stack": ["React","Tailwind CSS","PHP", "MySQL"],
        "button": [
            {"label": "View Repository","link": "https://github.com/kesther04/film_app"}
        ]
    },
    {
        "title": "FilmWorld",
        "image": house,
        "description": "A movie website built with React and Tailwind CSS. this project showcases a modern design and responsive layout.",
        "stack": ["React","Tailwind CSS","PHP", "MySQL"],
        "button": [
            {"label": "View Repository","link": "https://github.com/kesther04/film_app"}
        ]
    },
    {
        "title": "FilmWorld",
        "image": adverts,
        "description": "A movie website built with React and Tailwind CSS. this project showcases a modern design and responsive layout.",
        "stack": ["React","Tailwind CSS","PHP", "MySQL"],
        "button": [
            {"label": "View Repository","link": "https://github.com/kesther04/film_app"}
        ]
    }

];

