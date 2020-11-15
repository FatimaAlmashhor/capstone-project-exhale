/* eslint-disable no-await-in-loop */
/* eslint-disable no-use-before-define */
const poppeter = require('puppeteer');

async function getArticles() {
  // const browser = poppeter.launch();
  // const page = (await browser).newPage();
  // (await page).setDefaultNavigationTimeout(1000000);
  // await (await page).goto(
  //   'https://www.nexusfamilyhealing.org/advice?gclid=Cj0KCQiA7qP9BRCLARIsABDaZzh9WXsvE2ZKcHoegVXqwcGJLuqM5_LwcLoGjeYERaPOOmKFPo7aNxsaAtU8EALw_wcB&page=0'
  // );
  // const articles = [];
  // // eslint-disable-next-line no-plusplus
  // for (let index = 1; index < 10; index++) {
  //   const titlePath = `/html/body/div/div[1]/div/div/div/div[2]/div/div/div/div/div/main/div/div/div[2]/div/div/div/div[${index}]/div/span/div/div/div/h2/a`;
  //   const paragraphPath = `/html/body/div/div[1]/div/div/div/div[2]/div/div/div/div/div/main/div/div/div[2]/div/div/div/div[${index}]/div/span/div/div/div/p`;
  //   const imageUrlPath = `/html/body/div/div[1]/div/div/div/div[2]/div/div/div/div/div/main/div/div/div[2]/div/div/div/div[${index}]/div/span/div/div/img`;
  //   const [titleEl] = await (await page).$x(titlePath);
  //   const [paragraphEl] = await (await page).$x(paragraphPath);
  //   const [imageUrlEl] = await (await page).$x(imageUrlPath);
  //   const title = await titleEl.getProperty('innerHTML');
  //   const titleText = await title.jsonValue();
  //   const articleHref = await titleEl.getProperty('href');
  //   const articleLink = await articleHref.jsonValue();
  //   const paragraph = await paragraphEl.getProperty('innerHTML');
  //   const paragraphText = await paragraph.jsonValue();
  //   const imageUrl = await imageUrlEl.getProperty('src');
  //   const imageSrc = await imageUrl.jsonValue();
  const articles = [
    {
      id: 1,
      date: 'March 12th, 2019',
      author: 'Ali',
      authorDetails: 'whatever whatever',
      title: 'Lending Money to My Daughter',
      text:
        'A few years back, I gave my daughter a significant amount of money because she had lost her job and was struggling to make ends meet. She’s been doing well for some time even though we are dealing with COVID. She has not made any attempt to pay me back and when I brought it up, she says she does not have the money.',
      articleImg:
        'https://www.nexusfamilyhealing.org/sites/default/files/styles/banner_medium/public/image-uploads/Web%20Mother%20Daughter_1.jpg?itok=B37_Y2SA',
      articleLink:
        'https://www.nexusfamilyhealing.org/advice/lending-money-my-daughter',
    },
    {
      id: 2,
      date: 'March 12th, 2019',
      author: 'Ali',
      authorDetails: 'whatever whatever',
      title: "I Blame Myself for My Best Friend's Suicide",
      text:
        'My friend hung himself 15 years ago and I still blame myself. Every day I feel like I’m just going through the motions and can’t seem to feel excited about anything.',
      articleImg:
        'https://www.nexusfamilyhealing.org/sites/default/files/styles/banner_medium/public/image-uploads/Web%20Storm%20%281%29.jpg?itok=WnRJ6jAA',
      articleLink:
        'https://www.nexusfamilyhealing.org/advice/i-blame-myself-my-best-friends-suicide',
    },
    {
      id: 3,
      date: 'March 12th, 2019',
      author: 'Ali',
      authorDetails: 'whatever whatever',
      title: ' I Am Afraid My Wife Is Having an Affair',
      text:
        'I am reaching out because things are not going well between my wife and me. Over the last several years we have become very distant. She seems very distracted and I am afraid she is having an affair. ',
      articleImg:
        'https://www.nexusfamilyhealing.org/sites/default/files/styles/banner_medium/public/image-uploads/Web%20Relationship%20help%20v2.jpg?itok=rTF_Ti_5',
      articleLink:
        'https://www.nexusfamilyhealing.org/advice/i-am-afraid-my-wife-having-affair',
    },
    {
      id: 4,
      date: 'March 12th, 2019',
      author: 'Ali',
      authorDetails: 'whatever whatever',
      title: 'My Son Is Out of Control ',
      text:
        'Our 14-year-old son is out of control. He is very aggressive toward family members and we fear for our safety. We have tried family therapy and we have had counselors come to our home and work with him. It helps for a little while and then his aggression returns. We are thinking about having him placed in a residential treatment program',
      articleImg:
        'https://www.nexusfamilyhealing.org/sites/default/files/styles/banner_medium/public/image-uploads/Web%20Father%20Son.jpg?itok=KjivBcsN',
      articleLink: 'https://www.nexusfamilyhealing.org/advice/my-son-out-control',
    },
    {
      id: 5,
      date: 'March 12th, 2019',
      author: 'Ali',
      authorDetails: 'whatever whatever',
      title: 'My Girlfriend Wants Her Kids to Call Me Dad',
      text:
        'My girlfriend and I just moved in together after dating for about 2 years. She has a 13-year-old son and a 10-year-old daughter who live with us full time. They are great kids and we get along really well, but my girlfriend is pressuring the kids to call me dad and I don’t think that’s a good idea. ',
      articleImg:
        'https://www.nexusfamilyhealing.org/sites/default/files/styles/banner_medium/public/image-uploads/thumbnail_Web%20Parenting_2.jpg?itok=Fk0ULlBl',
      articleLink:
        'https://www.nexusfamilyhealing.org/advice/my-girlfriend-wants-her-kids-call-me-dad',
    },
    {
      id: 6,
      date: 'March 12th, 2019',
      author: 'Ali',
      authorDetails: 'whatever whatever',
      title: "I'm Always Upset and Not Sure What To Do",
      text:
        "I feel upset all of time. It has been like this for several years. Nothing seems to go right, and&nbsp;nothing makes me feel better. I don't know what to do.<br> Abdullah",
      articleImg:
        'https://www.nexusfamilyhealing.org/sites/default/files/styles/banner_medium/public/image-uploads/SadAdult.jpg?itok=4KYEsUSJ',
      articleLink:
        'https://www.nexusfamilyhealing.org/advice/im-always-upset-and-not-sure-what-do',
    },
    {
      id: 7,
      date: 'March 12th, 2019',
      author: 'Ali',
      authorDetails: 'whatever whatever',
      title: 'Is Teen Anger Connected to Childhood Trauma?',
      text:
        'I was wondering if you could help me to better understand how early childhood trauma would affect a person’s behavior. Have you seen any correlations of certain forms of trauma and anger in early adolescence?<br> Sam',
      articleImg:
        'https://www.nexusfamilyhealing.org/sites/default/files/styles/banner_medium/public/image-uploads/TeenAnger.jpg?itok=w6qmzvuR',
      articleLink:
        'https://www.nexusfamilyhealing.org/advice/teen-anger-connected-childhood-trauma',
    },
    {
      id: 8,
      date: 'March 12th, 2019',
      author: 'Ali',
      authorDetails: 'whatever whatever',
      title: 'My 13-Year-Old Says Making Friends Is Easier Online',
      text:
        'My 13-year-old son (soon to be 14) is having a hard time maintaining friendships. As a result, he tells his dad and me that he is lonely and then moves to “online friends,” which are really people he doesn’t know. He says that when he goes online, he can be who he wants and can just tell them the good stuff.',
      articleImg:
        'https://www.nexusfamilyhealing.org/sites/default/files/styles/banner_medium/public/image-uploads/friendshipsonline.jpg?itok=jj1ustT3',
      articleLink:
        'https://www.nexusfamilyhealing.org/advice/my-13-year-old-says-making-friends-easier-online',
    },
    {
      id: 9,
      date: 'March 12th, 2019',
      author: 'Ali',
      authorDetails: 'whatever whatever',
      title: 'My Son Is Impulsive and Has Trouble Making Friends',
      text:
        'My 8-year-old son struggles with impulsivity and has little to no friends that initiate contact with him. He can participate and engage with them but there doesn’t seem to be any bond. How can I help him with his impulse control and fostering&nbsp;friendships?<br> Tara',
      articleImg:
        'https://www.nexusfamilyhealing.org/sites/default/files/styles/banner_medium/public/image-uploads/kidnofriends.jpg?itok=n-KsUE6h',
      articleLink:
        'https://www.nexusfamilyhealing.org/advice/my-son-impulsive-and-has-trouble-making-friends',
    },
  ];
  //   articles.push({
  //     id: index,
  //     date: 'March 12th, 2019',
  //     author: 'Ali',
  //     authorDetails: 'whatever whatever',
  //     title: titleText,
  //     text: paragraphText,
  //     articleImg: imageSrc,
  //     articleLink: articleLink,
  //   });
  // }

  // (await browser).close();
  return articles;
}
async function getArticleContenet(articleUrl) {
  const browser = poppeter.launch();
  const page = (await browser).newPage();
  (await page).setDefaultNavigationTimeout(1000000);
  await (await page).goto(articleUrl);

  const pr1 = await getArticleParagraph(page, 1);
  const pr2 = await getArticleParagraph(page, 2);
  const pr3 = await getArticleParagraph(page, 3);
  const pr4 = await getArticleParagraph(page, 5);
  const pr5 = await getArticleParagraph(page, 6);
  const pr6 = await getArticleParagraph(page, 7);
  const pr7 = await getArticleParagraph(page, 8);
  const pr8 = await getArticleParagraph(page, 9);

  const img = await getArticleImage(
    page,
    '//*[@id="block-views-block-banner-image-block-1"]/div/div/div/div/div/div/div/img'
  );
  const title = await getArticleParagraph(
    page,
    '//*[@id="block-narwhal-page-title"]/div/h1/span'
  );
  const time = await getArticleParagraph(
    page,
    '//*[@id="block-narwhal-content"]/div/article/header/div/span'
  );
  (await browser).close();
  const articleContent = {
    paragraphs: [pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8],
    imageUrl: img,
    title: title,
    time: time,
  };
  return articleContent;
}
async function getArticleParagraph(page, para) {
  const fullTextPath =
    typeof para === 'number'
      ? `//*[@id="block-narwhal-content"]/div/article/div/div[1]/p[${para}]`
      : para;
  const [fullTextEl1] = await (await page).$x(fullTextPath);
  const fullText1 = await fullTextEl1.getProperty('innerHTML');
  const fullTextContent1 = await fullText1.jsonValue();
  return fullTextContent1;
}
async function getArticleImage(page, path) {
  const [imgEl] = await (await page).$x(path);
  const imageSrc = await imgEl.getProperty('src');
  const src = await imageSrc.jsonValue();
  return src;
}

module.exports = { getArticle: getArticleContenet, getArticles: getArticles };
