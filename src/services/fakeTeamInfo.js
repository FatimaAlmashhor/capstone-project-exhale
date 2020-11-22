import fatima from '../asset/images/TeamPhotos/teamFatima.jpg';
import marwa from '../asset/images/TeamPhotos/teamMarwa.jpg';
import somaia from '../asset/images/TeamPhotos/teamSomaia.jpg';
import dhiaa from '../asset/images/TeamPhotos/teamDhiaa.jpg';
import nuha from '../asset/images/TeamPhotos/teamNuha.jpg';
import muhannad from '../asset/images/TeamPhotos/teamMuhannad.jpg';
import i18n from '../i18next';

export const members = [
  {
    id: 0,
    img: muhannad,
    name: i18n.t('Muhanned'),
    major: i18n.t('majorOfMuhanned'),
    email: 'muhannad@re-coded.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    github: 'https://www.github.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 1,
    img: fatima,
    name: i18n.t('fatime'),
    major: i18n.t('majorOffatima'),
    email: 'fatima.almashhor@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com/in/fatima-almashhor-b89b841b1/',
    github: 'https://github.com/FatimaAlmashhor',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 2,
    img: marwa,
    name: i18n.t('marwa'),
    major: i18n.t('majorOfmarwa'),
    email: 'marwaalaghbry@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com/in/marwa-alaghbri-728bb21b0',
    github: 'https://github.com/Marwa-k',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 3,
    img: dhiaa,
    name: i18n.t('dhia'),
    major: i18n.t('majorOfdhia'),
    email: 'dhodhof@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    github: 'https://www.github.com',
    instagram: 'https://www.instagram.com',
  },
  {
    id: 4,
    img: somaia,
    name: i18n.t('somia'),
    major: i18n.t('majorOfsomia'),
    email: 'somia.abdullah3@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com/in/somaia-abdullah-3a9298b2/',
    github: 'https://github.com/eng-somaia',
    instagram: 'https://www.instagram.com/somia.abdullah/',
  },
  {
    id: 5,
    img: nuha,
    name: i18n.t('nuha'),
    major: i18n.t('majorOfnuha'),
    email: 'noha.pepeep1@gmail.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com/in/nuha-al-sameai-4ab0871b2/',
    github: 'https://github.com/NohaPepeep',
    instagram: 'https://www.instagram.com',
  },
];

export function getMembers() {
  return members.map((obj) => obj);
}
