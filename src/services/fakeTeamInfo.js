import personImage from '../asset/images/placeholder-image.jpg';

export const members = [
  {
    id: 1,
    img: '../../asset/images/default-image.PNG',
    name: 'Marwa  alaghbri',
    major: 'Front End Developer',
    email: 'example.exam@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 2,
    img: { personImage },
    name: 'Dhiaa Alshamy',
    major: 'IT',
    email: 'example.exam@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 3,
    img: { personImage },
    name: 'Fatima Almashhor',
    major: 'CTO',
    email: 'example.exam@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 4,
    img: { personImage },
    name: 'Marie Jensen',
    major: 'CEO, Designer',
    email: 'example.exam@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 5,
    img: { personImage },
    name: 'Nuha Al-sameai',
    major: 'CS',
    email: 'example.exam@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 6,
    img: { personImage },
    name: 'Somaia Al- Mekhlafi',
    major: 'Mechatronics Engineer',
    email: 'example.exam@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
];

export function getMembers() {
  return members.map((obj) => obj);
}
