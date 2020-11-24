import i18n from '../i18next';
import DrNabeel from '../asset/images/DoctorsPhotos/Dr. Nabil Nouman.jpg';
import DrKulaidi from '../asset/images/DoctorsPhotos/Dr. Mohammed AlKolaidi.jpg';
import DrBelgees from '../asset/images/DoctorsPhotos/Dr. Belqees.jpg';
import DrMahfoodh from '../asset/images/DoctorsPhotos/Dr. Mahfoodh.jpg';
import DrSaif from '../asset/images/DoctorsPhotos/Dr. Saif AlDeen.jpg';
import MaleDefault from '../asset/images/Male Doctor - Default img.png';
import FemaleDefault from '../asset/images/Female Doctor - Default img.png';

export const doctors = [
  {
    id: 1,
    image: DrNabeel,
    name: i18n.t('DrNabeel'),
    specialty: i18n.t('Nabeelspecialty'),
    workplace: i18n.t('Nabeelworkplace'),
    address: i18n.t('Nabeeladdress'),
    email: '',
    phone: +967734333706,
  },
  {
    id: 2,
    image: DrKulaidi,
    name: i18n.t('DrKulaidi'),
    specialty: i18n.t('Kulaidispecialty'),
    workplace: i18n.t('Kulaidiworkplace'),
    address: i18n.t('Address'),
    email: '',
    phone: +967777538304,
  },
  {
    id: 3,
    image: DrBelgees,
    name: i18n.t('DrBelgees'),
    specialty: i18n.t('BMSpecialty'),
    workplace: i18n.t('Belgeesworkplace'),
    address: i18n.t('Belgeesaddress'),
    email: '',
    phone: +9671418403,
  },
  {
    id: 4,
    image: DrMahfoodh,
    name: i18n.t('DrMahfoodh'),
    specialty: i18n.t('BMSpecialty'),
    workplace: i18n.t('Mahfoodworkplace'),
    address: i18n.t('Address'),
    email: '',
    phone: +967770774063,
  },
  {
    id: 5,
    image: DrSaif,
    name: i18n.t('DrSaif'),
    specialty: i18n.t('BMSpecialty'),
    workplace: i18n.t('Belgeesworkplace'),
    address: i18n.t('Belgeesaddress'),
    email: '',
    phone: +9671418403,
  },
  {
    id: 6,
    image: FemaleDefault,
    name: i18n.t('DrSamah'),
    specialty: i18n.t('SamahSpecialty'),
    workplace: i18n.t('Samahworkplace'),
    address: i18n.t('Samahaddress'),
    email: 'psychoinfo17@gmail.com',
    phone: +967774658646,
  },
  {
    id: 7,
    image: MaleDefault,
    name: i18n.t('DrAlsharabi'),
    specialty: i18n.t('BMSpecialty'),
    workplace: i18n.t('Alsharabiworkplace'),
    address: i18n.t('Alsharabiaddress'),
    email: '',
    phone: +9967775179872,
  },
  {
    id: 8,
    image: MaleDefault,
    name: i18n.t('DrAbdulqader'),
    specialty: i18n.t('BMSpecialty'),
    workplace: i18n.t('Abdulqaderworkplac'),
    address: i18n.t('Belgeesaddress'),
    email: '',
    phone: +967777238438,
  },
];
export function getDoctors() {
  return doctors.map((obj) => obj);
}
