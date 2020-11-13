async function fetchArticles() {
  try {
    const ftch = await fetch('http://localhost:5000/api/getList');
    const response = await ftch.json();
    // eslint-disable-next-line no-return-await
    return await response;
  } catch (error) {
    return null;
  }
}
async function fetchArticle(url) {
  try {
    const ftch = await fetch(`http://localhost:5000/api/getList/item?url=${url}`);
    const response = await ftch.json();
    // eslint-disable-next-line no-return-await
    return await response;
  } catch (error) {
    return null;
  }
}
async function getArticles() {
  return fetchArticles();
}
export async function getArticleByUrl(url) {
  const artc = await fetchArticle(url).then((article) => article);
  return artc;
}

const articles = getArticles();

export default articles;
