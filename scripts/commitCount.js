// https://github.com/grubersjoe/github-contributions-api

const url = 'https://github-contributions-api.jogruber.de/v4/sazsu';

async function fetchCommits() {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    const totalCommits = Object.values(jsonData.total).reduce((acc, value) => acc + value, 0);
    document.getElementById('commits').innerText = totalCommits;
  } catch (error) {
    alert(`An error occurred while fetching data: ${error}`);
  }
}

export { fetchCommits };