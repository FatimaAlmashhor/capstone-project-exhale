export const doctors = [
  {
    id: 1,
    image: 'http://www.sghsanaa.com/imgs/doctors/nabil_1.jpg',
    name: "Dr. Nabeel No'man",
    specialty: 'Depression, Anxiety, Personality Disorders',
    workplace: 'Saudi German Hospital',
    address: '60th street - Sanaa',
    email: '',
    phone: +967734333706,
  },
  {
    id: 2,
    image: 'http://ye-mj.net/userimages/2019/06/1560527133blobid0.jpg',
    name: 'Dr. Mohammed Abdulhabeeb Al-Khulaidi',
    specialty: 'Schizophrenia, Obsessive-Compulsive Disorder',
    workplace: 'Dr. Mohammed Abdulhabeeb Al-Khulaidi Center',
    address: 'Al-Zubairi street - Sanaa',
    email: '',
    phone: +967770774063,
  },
  {
    id: 3,
    image: 'http://fcdf-ye.org/Uploads/637016382831266987.jpg',
    name: 'Dr. Belqees Mohammed Jabari',
    specialty: 'Psychiatric and Neurological Consultant',
    workplace: 'Family Counseling & Development Foundation ',
    address: 'Haddah street - Sanaa',
    email: '',
    phone: +9671418403,
  },
  {
    id: 4,
    image:
      'https://scontent.fsah1-1.fna.fbcdn.net/v/t1.0-9/52699376_2246048215615990_963345539401777152_n.jpg?_nc_cat=110&ccb=2&_nc_sid=85a577&_nc_ohc=06Mm3DZq_HEAX-OjfVA&_nc_ht=scontent.fsah1-1.fna&oh=c07b0d89314177dcbc6a6afae001a634&oe=5FDA6EB6',
    name: 'Dr. Mahfoodh Al-Khulaidi',
    specialty: 'Psychiatric and Neurological Consultant ',
    workplace: 'Dr. Mahfoodh Al-Khulaidi Hospital',
    address: 'Al-Zubairi street - Sanaa',
    email: '',
    phone: +967777538304,
  },
  {
    id: 5,
    image: 'http://fcdf-ye.org/Uploads/636528748345104319.jpg',
    name: 'Dr. Saif Al-Deen Al-Meeri',
    specialty: 'Psychiatric and Neurological Consultant',
    workplace: 'Family Counseling & Development Foundation ',
    address: 'Haddah street - Sanaa',
    email: '',
    phone: +9671418403,
  },
  {
    id: 6,
    image:
      'https://www.shareicon.net/data/512x512/2016/08/18/813849_people_512x512.png',
    name: 'Dr. Samah Talal Abdualmaged',
    specialty: 'Psychotherapist',
    workplace: 'Psychotherapy Clinic',
    address: 'Abu Dhabi street - Sanaa',
    email: 'psychoinfo17@gmail.com',
    phone: +967774658646,
  },
  {
    id: 7,
    image:
      'https://www.shareicon.net/data/512x512/2016/08/18/813844_people_512x512.png',
    name: "Dr. Abdullah Abdulwahhab Al-Shar'abi",
    specialty: 'Psychiatric and Neurological Consultant',
    workplace: "Dr. Abdullah Abdulwahhab Al-Shar'abi Center",
    address: '50th street - Sanaa',
    email: '',
    phone: +9967775179872,
  },
  {
    id: 8,
    image:
      'https://www.shareicon.net/data/512x512/2016/08/18/813844_people_512x512.png',
    name: 'Dr. Abdulqader Al-Majed',
    specialty: 'Psychiatric and Neurological Consultant',
    workplace: 'Neuro Psychiarty Center',
    address: 'Haddah street - Sanaa',
    email: '',
    phone: +967777238438,
  },
];
export function getDoctors() {
  return doctors.map((obj) => obj);
}
