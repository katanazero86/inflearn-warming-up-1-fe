const API_URL = 'https://api.github.com';
const accessToken = '';
const githubApis = {
    async findUserByUserName(targetUserName) {
        try {
            const res = await fetch(`${API_URL}/users/${targetUserName}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            if (res.status === 200) {
                return await res.json();
            }
            if (res.status === 404) {
                return null;
            }
        } catch (e) {
            console.error(e);
        }
    },
    async findRepositoriesByUserName(targetUserName) {
        try {
            const queryParams = new URLSearchParams({
                per_page: 5,
            });
            const res = await fetch(`${API_URL}/users/${targetUserName}/repos?${queryParams.toString()}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            if (res.status === 200) {
                return await res.json();
            }
            if (res.status === 404) {
                return [];
            }
        } catch (e) {
            console.error(e);
        }
    }
};
Object.freeze(githubApis);

let timer;
document.addEventListener('DOMContentLoaded', () => {
    const inputUserNameEl = document.querySelector('#userName');

    inputUserNameEl.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') return false;
        if (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 || e.keyCode === 40) return false;
        if (e.key === ' ' || e.keyCode === 32) {
            e.target.value = e.target.value.trim();
            return false;
        }

        const userName = e.target.value;

        // 디바운싱
        if (timer) clearTimeout(timer);
        timer = setTimeout(async () => {
            const userEl = document.querySelector('.user');
            const reposHeaderEl = document.querySelector('.repos-header');
            const reposBodyEl = document.querySelector('.repos-body');
            userEl.innerHTML = '';
            reposHeaderEl.style.display = 'none';
            reposBodyEl.innerHTML = '';

            if (userName !== '') {
                const user = await githubApis.findUserByUserName(userName);
                const userRepos = await githubApis.findRepositoriesByUserName(userName);

                renderGithubUser(user);
                renderUserRepos(userRepos);
            }
        }, 800);

    });
});

const renderGithubUser = (targetUser) => {
    const userEl = document.querySelector('.user');
    const reposHeaderEl = document.querySelector('.repos-header');
    const reposBodyEl = document.querySelector('.repos-body');

    if (targetUser !== null) {
        const {
            avatar_url,
            html_url,
            public_repos,
            public_gists,
            followers,
            following,
            company,
            blog,
            location,
            created_at
        } = targetUser;
        const userContentsTemplate = document.querySelector('#userContents');
        const cloneContent = document.importNode(userContentsTemplate.content, true);

        cloneContent.querySelector('.user-img').src = avatar_url === null ? '' : avatar_url;
        cloneContent.querySelector('.user-view-profile').onclick = () => {
            window.open(html_url);
        };
        cloneContent.querySelector('.repos').textContent = `Public Repos: ${public_repos}`;
        cloneContent.querySelector('.gists').textContent = `Public Gists: ${public_gists}`;
        cloneContent.querySelector('.followers').textContent = `Followers: ${followers}`;
        cloneContent.querySelector('.following').textContent = `Following: ${following}`;
        cloneContent.querySelector('.company').textContent = `Company: ${company}`;
        cloneContent.querySelector('.web').textContent = `Website/Blog: ${blog}`;
        cloneContent.querySelector('.location').textContent = `Location: ${location}`;
        cloneContent.querySelector('.since').textContent = `Member Since: ${created_at}`;
        userEl.appendChild(cloneContent);
    } else {
        userEl.innerHTML = '<p>Not Found ;)</p>';
        reposHeaderEl.style.display = 'none';
        reposBodyEl.innerHTML = '';
    }
};

const renderUserRepos = (targetUserRepos) => {
    const reposHeaderEl = document.querySelector('.repos-header');
    const reposBodyEl = document.querySelector('.repos-body');

    if (targetUserRepos.length !== 0) {
        reposHeaderEl.style.display = 'none';
        reposBodyEl.innerHTML = '';
        const userReposTemplate = document.querySelector('#userRepos');
        const fragment = document.createDocumentFragment();
        targetUserRepos.forEach(userRepo => {
            const cloneContent = document.importNode(userReposTemplate.content, true);
            cloneContent.querySelector('.repo-name').textContent = userRepo.full_name;
            cloneContent.querySelector('.stars').textContent = `Stars: ${userRepo.stargazers_count ?? 0}`;
            cloneContent.querySelector('.watchers').textContent = `Watchers: ${userRepo.watchers_count ?? 0}`;
            cloneContent.querySelector('.forks').textContent = `Forks: ${userRepo.forks_count ?? 0}`;
            fragment.appendChild(cloneContent);
        });
        reposBodyEl.appendChild(fragment);
        reposHeaderEl.style.display = 'block';
    } else {
        reposHeaderEl.style.display = 'none';
        reposBodyEl.innerHTML = '';
    }
}