import fatima from '../asset/images/TeamPhotos/teamFatima.jpg';
import marwa from '../asset/images/TeamPhotos/teamMarwa.jpg';
import somaia from '../asset/images/TeamPhotos/teamSomaia.jpg';
import dhiaa from '../asset/images/TeamPhotos/teamDhiaa.jpg';
import nuha from '../asset/images/TeamPhotos/teamNuha.jpg';

export const members = [
  {
    id: 1,
    img: fatima,
    name: 'Fatima Almashhor',
    major: 'CTO',
    email: 'fatima.almashhor@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 2,
    img: dhiaa,
    name: 'Dhiaa Alshamy',
    major: 'IT',
    email: 'dhodhof@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 3,
    img: marwa,
    name: 'Marwa  alaghbri',
    major: 'IT',
    email: 'marwaalaghbry@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 4,
    img: somaia,
    name: 'Somaia Al- Mekhlafi',
    major: 'Mechatronics Engineer',
    email: 'somia.abdullah3@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 5,
    img: nuha,
    name: 'Nuha Al-Sameai',
    major: 'CS',
    email: 'noha.pepeep1@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
];

export function getMembers() {
  return members.map((obj) => obj);
}
