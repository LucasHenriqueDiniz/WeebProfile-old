import { APIRepo } from "../types";

const dummyRepoData: APIRepo[] = [
  {
    name: "Dummy Repo",
    owner: {
      login: "LucasHenriqueDiniz",
    },
    stargazers_count: 1,
    forks: 123,
    html_url: "abc",
    language: "TypeScript",
    description: "This is a dummy repo",
  },
];

export default dummyRepoData;
