import fatima from '../asset/images/TeamPhotos/teamFatima.jpg';
import marwa from '../asset/images/TeamPhotos/teamMarwa.jpg';
import somaia from '../asset/images/TeamPhotos/teamSomaia.jpg';
import dhiaa from '../asset/images/TeamPhotos/teamDhiaa.jpg';
import nuha from '../asset/images/TeamPhotos/teamNuha.jpg';
import muhannad from '../asset/images/TeamPhotos/teamMuhannad.jpg';

export const members = [
  {
    id: 0,
    img: muhannad,
    name: 'Muhanned Noman',
    major: 'Team Leader',
    email: 'muhannad@re-coded.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    github: 'https://www.github.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 1,
    img: fatima,
    name: 'Fatima Almashhor',
    major: 'IT Engineer',
    email: 'fatima.almashhor@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    github: 'https://www.github.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 2,
    img: marwa,
    name: 'Marwa Alaghbri',
    major: 'IT Engineer',
    email: 'marwaalaghbry@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    github: 'https://www.github.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 3,
    img: dhiaa,
    name: 'Dhiaa Alshamy',
    major: 'CTO',
    email: 'dhodhof@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    github: 'https://www.github.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 4,
    img: somaia,
    name: 'Somaia Al-Mekhlafi',
    major: 'Mechatronics Engineer',
    email: 'somia.abdullah3@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com/in/somaia-abdullah-3a9298b2/',
    github: 'https://github.com/eng-somaia',
    instagram: 'https://www.instagram.com/somia.abdullah/',
  },
  {
    id: 5,
    img: nuha,
    name: 'Nuha Al-Sameai',
    major: 'CS',
    email: 'noha.pepeep1@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    github: 'https://www.github.com',
    instagram: 'https://www.instagram.com',
  },
];

export function getMembers() {
  return members.map((obj) => obj);
}
