/* eslint-disable no-await-in-loop */
/* eslint-disable no-use-before-define */
const poppeter = require('puppeteer');

async function getArticles() {
  const browser = poppeter.launch();
  const page = (await browser).newPage();
  (await page).setDefaultNavigationTimeout(1000000);
  await (await page).goto(
    'https://www.nexusfamilyhealing.org/advice?gclid=Cj0KCQiA7qP9BRCLARIsABDaZzh9WXsvE2ZKcHoegVXqwcGJLuqM5_LwcLoGjeYERaPOOmKFPo7aNxsaAtU8EALw_wcB&page=0'
  );
  const articles = [];
  // eslint-disable-next-line no-plusplus
  for (let index = 1; index < 10; index++) {
    const titlePath = `/html/body/div/div[1]/div/div/div/div[2]/div/div/div/div/div/main/div/div/div[2]/div/div/div/div[${index}]/div/span/div/div/div/h2/a`;
    const paragraphPath = `/html/body/div/div[1]/div/div/div/div[2]/div/div/div/div/div/main/div/div/div[2]/div/div/div/div[${index}]/div/span/div/div/div/p`;
    const imageUrlPath = `/html/body/div/div[1]/div/div/div/div[2]/div/div/div/div/div/main/div/div/div[2]/div/div/div/div[${index}]/div/span/div/div/img`;
    const [titleEl] = await (await page).$x(titlePath);
    const [paragraphEl] = await (await page).$x(paragraphPath);
    const [imageUrlEl] = await (await page).$x(imageUrlPath);
    const title = await titleEl.getProperty('innerHTML');
    const titleText = await title.jsonValue();
    const articleHref = await titleEl.getProperty('href');
    const articleLink = await articleHref.jsonValue();
    const paragraph = await paragraphEl.getProperty('innerHTML');
    const paragraphText = await paragraph.jsonValue();
    const imageUrl = await imageUrlEl.getProperty('src');
    const imageSrc = await imageUrl.jsonValue();
    articles.push({
      id: index,
      date: 'March 12th, 2019',
      author: 'Ali',
      authorDetails: 'whatever whatever',
      title: titleText,
      text: paragraphText,
      articleImg: imageSrc,
      articleLink: articleLink,
    });
  }

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
