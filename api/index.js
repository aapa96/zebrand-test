const baseUrl = 'https://api.github.com/'
export const getUsersByUsername = (username) => { return `${baseUrl}users/${username}` }
export const getReposByUsername = (username) => { return `${baseUrl}users/${username}/repos` }
