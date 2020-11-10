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
  (await page).setDefaultNavigationTimeout(40000);
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
    });
  }

  (await browser).close();
  res.json(articles);
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

const port = process.env.PORT || 5000;
app.listen(port);
