import Mody from '../images/Mody.png';
import Social from '../images/social-distance.png';
import Mule from '../images/Screenshot (24).png';
import Savannah from '../images/Screenshot (51).png';
export const home = [
    {
        page: 'Devin Heigert',
        con1: '',
        con2: '',
        con3: '',
        con4: '',
        nextPage: 'About',
    },
    {
        page: 'About',
        con1: 'So who is this guy? I am a Seattle-based web developer. I started web development after a friend of mine showed me a web site he had built by himself. The process intrigued me and I started teaching myself some basic coding with some help from some friends. Eventually I decided I needed some more structured training and eventually recieved my full-stack certification through the University of Washington.',
        xp: [{
                image: "https://img.icons8.com/material-outlined/60/000000/html-5.png",
                title: 'HTML'
            },
            {
                image: "https://img.icons8.com/ios-glyphs/60/000000/css3.png",
                title: 'CSS'
            }, 
            {
                image: "https://img.icons8.com/ios-filled/60/000000/javascript.png",
                title: 'JavaScript'
            }
        ],
        con3: 'Finding creative strategies to accomplish a goal',
        nextPage: 'Portfolio',
    },
    {
        page: 'Portfolio',
        box1: [
            {
                img: {Mule},
                description: 'This was a me project',
                tech: 'React.js MySQL'
            },
            {
                img: {Savannah},
                description: 'live site project',
                tech: 'Svelte'
            }],
        box3: [
            {
                img: {Mody},
                description: 'This was group project',
                tech: 'HTML CSS JavaScript'
            },
            {
                img: {Social},
                description: 'social distance app',
                tech: 'HTML CSS JavaScript'
            }],
        nextPage: 'Home',
    },

]

export default home;