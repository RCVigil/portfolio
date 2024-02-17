// GitHubService.js

async function fetchGitHubData() {
  const ENDPOINTRepos = import.meta.env.VITE_REACT_APP_ENDPOINT_REPOS;
  const ENDPOINTUser = import.meta.env.VITE_REACT_APP_ENDPOINT_USER;
  const perPage = 100; // Número de objetos por página

  try {
    const responseRepos = await fetch(`${ENDPOINTRepos}?per_page=${perPage}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!responseRepos.ok) {
      throw new Error("Network response was not ok");
    }

    const linkHeader = responseRepos.headers.get("Link");
    const totalPages = calculateTotalPages(linkHeader);

    // Aqui você pode fazer um loop para buscar todas as páginas, se necessário
    const allRepos = await fetchAllPages(ENDPOINTRepos, totalPages, perPage);

    const responseUser = await fetch(ENDPOINTUser, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!responseUser.ok) {
      throw new Error("Network response was not ok");
    }

    const dataUser = await responseUser.json();

    return { repos: allRepos, user: dataUser };
  } catch (error) {
    throw error;
  }
}

async function fetchAllPages(endpoint, totalPages, perPage) {
  const allRepos = [];
  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(
      `${endpoint}?page=${page}&per_page=${perPage}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    allRepos.push(...data);
  }
  return allRepos;
}

function calculateTotalPages(linkHeader) {
  const match = linkHeader && linkHeader.match(/&page=(\d+)>; rel="last"/);
  return match ? parseInt(match[1]) : 1;
}

export default fetchGitHubData;
