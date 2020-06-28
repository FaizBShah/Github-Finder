class Github
{
  constructor()
  {
    this.client_id = '1fa6f2f0432e99c67223';
    this.client_secret = 'e8a9edc7535e85bb8be03d72a34710caf7aa228b';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  async getUser(user)
  {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile: profile,
      repos: repos
    }
  }
}