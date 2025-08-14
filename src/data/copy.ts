import leads from '../assets/copyImg/10x-Lead.png';
import financials from '../assets/copyImg/financial-comeback.png';
import swole from '../assets/copyImg/gimnasio-swole.png';
import goldenGoose from '../assets/copyImg/golden-goose.png';
import hulkLatz from '../assets/copyImg/hulk-latz.png';
import salesPitch from '../assets/copyImg/sales-pitch.png';


type project = {
        title: string,
        image: string,
        description: string,
        stack: string[],
        button: {label:string, link:string}[]
    }[];

export const COPY_PROJECT_CRED: project = [
    {
        "title":"10x Lead",
        "image":leads,
        "description":"An Email Copy description on how to generate more leads with your sales pitches utilizing a unique strategy.",
        "stack": ["Email Copy", "Sales", "Marketing"],
        "button":[
            {
                "label": "View Copy",
                "link": "https://docs.google.com/document/d/12zhPegnQRQdOPo3IJGkSt2UZI0zBSBmm9sTnm_Q8qdU/edit?usp=sharing"
            }
        ]
    },
    {
        "title":"Financial Comeback",
        "image":financials,
        "description":"Email for Achieving a financial comeback, to get into the highest echelon of individuals in the world in terms of money.",
        "stack": ["Email Copy", "Finance", "Marketing"],
        "button":[
            {
                "label": "View Copy",
                "link": "https://docs.google.com/document/d/1_BHQ2dHk3Y8lFcMCmO-FMIgOl2Uy3GaSHRUeN4ckp-Q/edit?usp=sharing"
            }
        ]
    },
    {
        "title":"Gimnasio Swole",
        "image":swole,
        "description":"Fitness Niche Email that employs a unique copy structure for attaining viewer attention as well as build user desire for offer.",
        "stack": ["Email Copy", "Fitness", "Marketing"],
        "button":[
            {
                "label": "View Copy",
                "link": "https://docs.google.com/document/d/1za11tNCY0uA1feVheLmjvMuLUkiabCsftWhg6hky2Vk/edit?usp=sharing"
            }
        ]
    },
    {
        "title":"Golden Goose",
        "image":goldenGoose,
        "description":"Motivational Email that also contains a call to action that actually helps readers achieve their goals in investment and finances.",
        "stack": ["Email Copy", "Finance", "Marketing"],
        "button":[
            {
                "label": "View Copy",
                "link": "https://docs.google.com/document/d/1czj8IOt7zPwN3fqxPetyErN3YkcMjmAckShHBd9ag9c/edit?usp=sharing"
            }
        ]
    },
    {
        "title":"Hulk Latz",
        "image":hulkLatz,
        "description":"Valuable Fitness Email Copy for Attaining Big Sized Lats with a built and defined Muscle Structure.",
        "stack": ["Email Copy", "Fitness", "Marketing"],
        "button":[
            {
                "label": "View Copy",
                "link": "https://docs.google.com/document/d/1F1vVxF4E36Tfr-kGxOBK2Cahp5vuzOor-YgwxLdnvAw/edit?usp=sharing"
            }
        ]
    },
    {
        "title":"Sales Pitch",
        "image":salesPitch,
        "description":"Email Sales Copy that provides valuable information to readers on various ways to improve their sales pitches.",
        "stack": ["Email Copy", "Sales", "Marketing"],
        "button":[
            {
                "label": "View Copy",
                "link": "https://docs.google.com/document/d/1tnmzUKJ3eYncyxGc9W0qd2O3i2bHIeLkT-K72MnZU84/edit?usp=sharing"
            }
        ]
    }
]
