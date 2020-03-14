function orderByStars(a, b) {
    var keyA = a.stargazers_count
    var keyB = b.stargazers_count
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    console.log(a)
    return 0;
}

const listRepos = async username => {
    const repos = await fetch(
        `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
    )
        .then(res => res.json())
        .catch(error => console.log(error));

    const markup = repos
        .sort(function (a, b) {
            var keyA = a.stargazers_count
            var keyB = b.stargazers_count
            if (keyA > keyB) return -1;
            if (keyA < keyB) return 1;
            console.log(a)
            console.log(b)
            return 0;
        })
        .map(
            repo => `
        <li>
            <a href="${repo.html_url}">${repo.name}</a>
            (⭐️ ${repo.stargazers_count})
        </li>`
        )
        .join('')

    const content = document.getElementById('content')
    content.innerHTML = `<ul>${markup}</ul>`;
}

listRepos('jlengstorf')