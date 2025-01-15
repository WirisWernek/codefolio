export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  url: string;
  tags_url: string;
  languages_url: string;
  language: string;
  homepage: string;
  topics: string[];
  forks_count: number;
  watchers_count: number;
  stargazers_count: number;
}
