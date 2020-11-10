async function fetchArticles() {
  const ftch = await fetch('http://localhost:5000/api/getList');
  const response = await ftch.json();
  // eslint-disable-next-line no-return-await
  return await response;
}
async function getArticles() {
  return fetchArticles();
}

const articles = getArticles();
export default articles;
