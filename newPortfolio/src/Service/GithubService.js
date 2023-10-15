// GitHubService.js

async function fetchGitHubData() {
  const ENDPOINTRepos = import.meta.env.VITE_REACT_APP_ENDPOINT_REPOS;
  const ENDPOINTUser = import.meta.env.VITE_REACT_APP_ENDPOINT_USER;

  try {
    const responseRepos = await fetch(ENDPOINTRepos, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!responseRepos.ok) {
      throw new Error("Network response was not ok");
    }

    const dataRepos = await responseRepos.json();

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

    return { repos: dataRepos, user: dataUser };
  } catch (error) {
    throw error;
  }
}

export default fetchGitHubData;
