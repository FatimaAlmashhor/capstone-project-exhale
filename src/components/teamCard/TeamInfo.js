import member1 from './teamImgs/member1.jpg';
import member2 from './teamImgs/member2.jpg';
import member3 from './teamImgs/member3.jpg';
import member4 from './teamImgs/member4.jpg';
import member5 from './teamImgs/member5.jpg';
import member6 from './teamImgs/member6.jpg';

export const members = [
  {
    id: 1,
    img: { member1 },
    name: 'Member Name',
    major: 'Front End Developer',
    email: 'example.exam@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 2,
    img: { member2 },
    name: 'Member Name',
    major: 'Front End Developer',
    email: 'example.exam@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 3,
    img: { member3 },
    name: 'Member Name',
    major: 'Front End Developer',
    email: 'example.exam@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 4,
    img: { member4 },
    name: 'Member Name',
    major: 'Front End Developer',
    email: 'example.exam@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 5,
    img: { member5 },
    name: 'Member Name',
    major: 'Front End Developer',
    email: 'example.exam@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 6,
    img: { member6 },
    name: 'Member Name',
    major: 'Front End Developer',
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
