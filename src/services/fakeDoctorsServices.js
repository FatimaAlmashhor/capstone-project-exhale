import i18n from '../i18next';

export const doctors = [
  {
    id: 1,
    image: 'http://www.sghsanaa.com/imgs/doctors/nabil_1.jpg',
    name: i18n.t('DrNabeel'),
    specialty: i18n.t('Nabeelspecialty'),
    workplace: i18n.t('Nabeelworkplace'),
    address: i18n.t('Nabeeladdress'),
    email: '',
    phone: +967734333706,
  },
  {
    id: 2,
    image: 'http://ye-mj.net/userimages/2019/06/1560527133blobid0.jpg',
    name: i18n.t('DrKulaidi'),
    specialty: i18n.t('Kulaidispecialty'),
    workplace: i18n.t('Kulaidiworkplace'),
    address: i18n.t('Address'),
    email: '',
    phone: +967777538304,
  },
  {
    id: 3,
    image: 'http://fcdf-ye.org/Uploads/637016382831266987.jpg',
    name: i18n.t('DrBelgees'),
    specialty: i18n.t('BMSpecialty'),
    workplace: i18n.t('Belgeesworkplace'),
    address: i18n.t('Belgeesaddress'),
    email: '',
    phone: +9671418403,
  },
  {
    id: 4,
    image:
      'https://scontent.fsah1-1.fna.fbcdn.net/v/t1.0-9/52699376_2246048215615990_963345539401777152_n.jpg?_nc_cat=110&ccb=2&_nc_sid=85a577&_nc_ohc=06Mm3DZq_HEAX-OjfVA&_nc_ht=scontent.fsah1-1.fna&oh=c07b0d89314177dcbc6a6afae001a634&oe=5FDA6EB6',
    name: i18n.t('DrMahfoodh'),
    specialty: i18n.t('BMSpecialty'),
    workplace: i18n.t('Mahfoodworkplace'),
    address: i18n.t('Address'),
    email: '',
    phone: +967770774063,
  },
  {
    id: 5,
    image: 'http://fcdf-ye.org/Uploads/636528748345104319.jpg',
    name: i18n.t('DrSaif'),
    specialty: i18n.t('BMSpecialty'),
    workplace: i18n.t('Belgeesworkplace'),
    address: i18n.t('Belgeesaddress'),
    email: '',
    phone: +9671418403,
  },
  {
    id: 6,
    image:
      'https://www.shareicon.net/data/512x512/2016/08/18/813849_people_512x512.png',
    name: i18n.t('DrSamah'),
    specialty: i18n.t('SamahSpecialty'),
    workplace: i18n.t('Samahworkplace'),
    address: i18n.t('Samahaddress'),
    email: 'psychoinfo17@gmail.com',
    phone: +967774658646,
  },
  {
    id: 7,
    image:
      'https://www.shareicon.net/data/512x512/2016/08/18/813844_people_512x512.png',
    name: i18n.t('DrAlsharabi'),
    specialty: i18n.t('BMSpecialty'),
    workplace: i18n.t('Alsharabiworkplace'),
    address: i18n.t('Alsharabiaddress'),
    email: '',
    phone: +9967775179872,
  },
  {
    id: 8,
    image:
      'https://www.shareicon.net/data/512x512/2016/08/18/813844_people_512x512.png',
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
