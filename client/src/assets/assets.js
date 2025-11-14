import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'

import profile_img_1 from './profile_img_1.png'
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
import favicon from './favicon.png'
import camera from './camera.jpeg'
import cartoon from './cartoon.jpeg'
import panda from './panda.jpeg'
import robot from './robot.jpeg'
import dog from './dog.png'
import parot from './parot.png'
import type from './type.png'
import alien from './alien.png'
import animals from './animals.png'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
  
    star_icon,
    rating_star,
   
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    favicon,
    camera,
    cartoon,
    panda,
    robot,
    dog,
    parot,
    type,
    alien,
    animals,
}

// export const stepsData = [
//     {
//       title: 'Describe Your Vision',
//       description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
//       icon: step_icon_1,
//     },
//     {
//       title: 'Watch the Magic',
//       description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
//       icon: step_icon_2,
//     },
//     {
//       title: 'Download & Share',
//       description: 'Instantly download your creation or share it with the world directly from our platform.',
//       icon: step_icon_3,
//     },
//   ];

export const stepsData = [
  {
    title: 'Craft Your Prompt',
    description: 'Write what you imagine — a sentence, phrase, or idea — and set your creativity in motion.',
    icon: step_icon_1,
  },
  {
    title: 'Let AI Visualize',
    description: 'Our intelligent engine transforms your words into stunning, one-of-a-kind visuals instantly.',
    icon: step_icon_2,
  },
  {
    title: 'Save and Showcase',
    description: 'Download your masterpiece or share it directly with friends, followers, or the world.',
    icon: step_icon_3,
  },
];

export const testimonialsData = [
    {
        image: profile_img_1,
        name: 'Donald Jackman',
        role: 'Graphic Designer',
        stars: 5,
        text: `This AI tool has transformed my workflow completely. Background removal is instant and incredibly accurate, even with complex hair details. Saves me hours every week!`
    },
    {
        image: profile_img_2,
        name: 'Richard Nelson',
        role: 'Content Creator',
        stars: 5,
        text: `As a content creator, speed matters. This platform delivers professional results in seconds. The AI is so smart - it handles tricky edges better than I could manually.`
    },
    {
        image: profile_img_1,
        name: 'Sarah Mitchell',
        role: 'E-commerce Manager',
        stars: 5,
        text: `We process hundreds of product images weekly. This tool cut our editing time by 80%. The quality is consistent and the batch processing feature is a game-changer!`
    }
]



// export const testimonialsData = [
//     {
//         image:profile_img_1,
//         name:'Donald Jackman',
//         role:'Graphic Designer',
//         stars:5,
//         text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
//     },
//     {
//         image:profile_img_2,
//         name:'Richard Nelson',
//         role:'Content Creator',
//         stars:5,
//         text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
//     },
//     {
//         image:profile_img_1,
//         name:'Donald Jackman',
//         role:' Graphic Designer',
//         stars:5,
//         text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
//     },
// ]

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