/* eslint-disable no-use-before-define */
/* eslint-disable no-await-in-loop */
const express = require('express');
const poppeter = require('puppeteer');
const path = require('path');

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', async function (req, res) {
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

  (await browser).close();
  res.json(articles);
});
app.get('/api/getList/item', async function (req, res) {
  const { url } = req.query;
  const browser = poppeter.launch();
  const page = (await browser).newPage();
  (await page).setDefaultNavigationTimeout(1000000);
  await (await page).goto(url);

  const pr1 = await getArticleParagraph(page, 1);
  const pr2 = await getArticleParagraph(page, 2);
  const pr3 = await getArticleParagraph(page, 3);
  const pr4 = await getArticleParagraph(page, 5);
  const pr5 = await getArticleParagraph(page, 6);
  const pr6 = await getArticleParagraph(page, 7);
  const pr7 = await getArticleParagraph(page, 8);
  const pr8 = await getArticleParagraph(page, 9);
  (await browser).close();
  const paragraphs = [pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8];
  res.json(paragraphs);
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

async function getArticleParagraph(page, num) {
  const fullTextPath = `//*[@id="block-narwhal-content"]/div/article/div/div[1]/p[${num}]`;
  const [fullTextEl1] = await (await page).$x(fullTextPath);
  const fullText1 = await fullTextEl1.getProperty('innerHTML');
  const fullTextContent1 = await fullText1.jsonValue();
  return fullTextContent1;
}

const port = process.env.PORT || 5000;
app.listen(port);
