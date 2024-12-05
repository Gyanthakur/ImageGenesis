import logo from './logo.svg'
import logo_img from './logo-img.png'
import logo_img_trans from './logo-img-transp.png'
import logo_won from './logo-won.png'
import logo_wn from './logo_wn.png'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import abhishek_img from '../images/abhishek.jpg'
import shreyansh_img from '../images/shreyansh.jpg'
import gyan_img from '../images/gyan.png'
// import gyan from './gyan.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'

export const assets = {
    logo,
    logo_img,
    logo_wn,
    logo_won,
    logo_img_trans,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    abhishek_img,
    shreyansh_img,
    gyan_img
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:shreyansh_img,
        name:'Shreyansh Dubey',
        role:'Graphic Designer',
        stars:5,
        text:`This tool is a game-changer for prompt-based image generation—quick, intuitive, and consistently accurate. Highly recommend for professionals and hobbyists alike!`
    },
    {
        image:gyan_img,
        name:'Gyan Singh',
        role:'Web Developer',
        stars:5,
        text:`Image Genesis is incredibly user-friendly and delivers stunning image quality. It has streamlined my creative workflow and made generating visuals effortless!`
    },
    {
        image:abhishek_img,
        name:'Abhishek Sherma',
        role:'Content Creater',
        stars:4,
        text:`Image Genesis saves time while producing high-quality images with ease. A must-have tool for anyone needing reliable and efficient image generation!`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]