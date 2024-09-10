import React, { useEffect, useState } from "react";

import axios from "axios";
import "./dev.css";
import Footer from "./Footer/Footer";
import "./global.css";
import Header from "./Header/Header";
import ProfileData from "./ProfileData";
import dummyProfileData from "./test/profileData";
import dummyRepoData from "./test/repoData";
import { APIRepo, APIUser, ThemeName } from "./types";
import "../styles/default.css";
import "../styles/fonts.css";

async function getGithubUserData(username: string) {
  const res = await axios.get(`https://api.github.com/users/${username}`);
  return res.data;
}

async function getGithubRepoData(username: string) {
  const res = await axios.get(`https://api.github.com/users/${username}/repos`);
  return res.data;
}

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
  children: React.ReactNode;
}

// https://raw.githubusercontent.com/LucasHenriqueDiniz/LucasHenriqueDiniz/main/README.md
// const ReadmeContent = () => {
//   const readmeMarkdown = `# Hi there, I'm [Lucas Diniz](#) 👋
// &nbsp;
// <p align="center">
//    <a href="https://skillicons.dev">
//     <img src="https://skillicons.dev/icons?i=js,html,css,ae,aws,arduino,blender,c,docker,figma,bots,ai,jquery,mongodb,mysql,nextjs,nodejs,npm,ps,pr,py,react,redux,tailwind,ts,unreal,vite&perline=9" />
//   </a>
//  </p>
// &nbsp;
// <div align="center">
// <img align="center" alt="Lucas Diniz Info" height=160 src="https://github-readme-stats.vercel.app/api/top-langs/?username=LucasHenriqueDiniz&layout=compact&rank_icon=github&hide_rank=true&theme=nord&show_icons=true">
// </div>
// &nbsp;
// <img align="center" alt="🦀" src="https://gist.githubusercontent.com/LucasHenriqueDiniz/8aacc3d1ccca110d8358e35517d8fe40/raw/test.svg">
// &nbsp;
// ## Social Media
// <p align="center">
//   <a href="mailto:lucas.diniz.hdo@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
//   <a href="https://www.linkedin.com/in/lucas-diniz-ostroski/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
//   <a href="https://www.last.fm/pt/user/Amayacrab"><img src="https://img.shields.io/badge/last.fm-D51007?style=for-the-badge&logo=last.fm&logoColor=white" alt="Last.fm"/></a>
//   <a href="https://www.instagram.com/lucasdinizostroski/"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/></a>
//   <a href="https://discord.gg/GUMxfxHc"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"/></a>
// </p>
// <!-- MAL_README_ACTIVITY:start -->
// # 🌸 MyAnimeList Profile
// ## ❤️ Favorites
// <details><summary>📺 Favorite Anime</summary><p align="center" width="100%"><a width="100%" href="https://myanimelist.net/anime/5081/Bakemonogatari" overflow="hidden"><img src="https://cdn.myanimelist.net/images/anime/11/75274.webp?s=950c09e4c176ebfb7536962be2b1bae5" alt="Bakemonogatari" width="20%" height="240" max-width="20%" max-height="240" title="Bakemonogatari" /></a><a width="100%" href="https://myanimelist.net/anime/1698/Nodame_Cantabile" overflow="hidden"><img src="https://cdn.myanimelist.net/images/anime/9/11986.webp?s=e586004bf43e678f7a93a301859adf1b" alt="Nodame Cantabile" width="20%" height="240" max-width="20%" max-height="240" title="Nodame Cantabile" /></a><a width="100%" href="https://myanimelist.net/anime/4224/Toradora" overflow="hidden"><img src="https://cdn.myanimelist.net/images/anime/13/22128.webp?s=fa7d47bc3bec4cd26d628c5760228c99" alt="Toradora!" width="20%" height="240" max-width="20%" max-height="240" title="Toradora!" /></a><a width="100%" href="https://myanimelist.net/anime/3702/Detroit_Metal_City" overflow="hidden"><img src="https://cdn.myanimelist.net/images/anime/3/9853.webp?s=d573d17bf570bef4da8adde3d5139da6" alt="Detroit Metal City" width="20%" height="240" max-width="20%" max-height="240" title="Detroit Metal City" /></a><a width="100%" href="https://myanimelist.net/anime/30831/Kono_Subarashii_Sekai_ni_Shukufuku_wo" overflow="hidden"><img src="https://cdn.myanimelist.net/images/anime/1895/142748.webp?s=725fe8c638210f856406b86149af016e" alt="Kono Subarashii Sekai ni Shukufuku wo!" width="20%" height="240" max-width="20%" max-height="240" title="Kono Subarashii Sekai ni Shukufuku wo!" /></a></p></details><details><summary>📖 Favorite Manga</summary><p align="center" width="100%"><a width="100%" href="https://myanimelist.net/manga/14893/Monogatari_Series__First_Season" overflow="hidden"><img src="https://cdn.myanimelist.net/images/manga/2/279887.webp?s=56fb228c092b690f9014afcbbe2ce548" alt="Monogatari Series: First Season" width="20%" height="240" max-width="20%" max-height="240" title="Monogatari Series: First Season" /></a><a width="100%" href="https://myanimelist.net/manga/28533/Watashi_ga_Motenai_no_wa_Dou_Kangaetemo_Omaera_ga_Warui" overflow="hidden"><img src="https://cdn.myanimelist.net/images/manga/5/63521.webp?s=bab4088dfa68ddad739a3d52bc1140b3" alt="Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!" width="20%" height="240" max-width="20%" max-height="240" title="Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!" /></a><a width="100%" href="https://myanimelist.net/manga/93516/SQ__Begin_W_Your_Name" overflow="hidden"><img src="https://cdn.myanimelist.net/images/manga/3/165495.webp?s=a4e234007e6bf094a588a9051416b6e1" alt="SQ: Begin W/Your Name!" width="20%" height="240" max-width="20%" max-height="240" title="SQ: Begin W/Your Name!" /></a><a width="100%" href="https://myanimelist.net/manga/102997/Saotome_Senshu_Hitakakusu" overflow="hidden"><img src="https://cdn.myanimelist.net/images/manga/1/189746.webp?s=9b6f15b5d41c6afca9b438698528ad5a" alt="Saotome Senshu, Hitakakusu" width="20%" height="240" max-width="20%" max-height="240" title="Saotome Senshu, Hitakakusu" /></a><a width="100%" href="https://myanimelist.net/manga/31/Lovely★Complex" overflow="hidden"><img src="https://cdn.myanimelist.net/images/manga/1/209659.webp?s=7ccf416ea0711f702a361c90fd258603" alt="Lovely★Complex" width="20%" height="240" max-width="20%" max-height="240" title="Lovely★Complex" /></a></p></details><details><summary>🌸 Favorite Characters</summary><p align="center" width="100%"><a width="100%" href="https://myanimelist.net/character/22037/Hitagi_Senjougahara" overflow="hidden"><img src="https://cdn.myanimelist.net/images/characters/11/287902.webp?s=559b750212c5338e987b3d0ebac9d810" alt="Senjougahara, Hitagi" width="20%" height="240" max-width="20%" max-height="240" title="Senjougahara, Hitagi" /></a><a width="100%" href="https://myanimelist.net/character/1185/Megumi_Noda" overflow="hidden"><img src="https://cdn.myanimelist.net/images/characters/11/92497.webp?s=f8d450c55e9f47ee9b6cb93c9cb5a098" alt="Noda, Megumi" width="20%" height="240" max-width="20%" max-height="240" title="Noda, Megumi" /></a><a width="100%" href="https://myanimelist.net/character/12064/Taiga_Aisaka" overflow="hidden"><img src="https://cdn.myanimelist.net/images/characters/11/514086.webp?s=87920301db499bb344d2efd437699bc4" alt="Aisaka, Taiga" width="20%" height="240" max-width="20%" max-height="240" title="Aisaka, Taiga" /></a><a width="100%" href="https://myanimelist.net/character/22054/Suruga_Kanbaru" overflow="hidden"><img src="https://cdn.myanimelist.net/images/characters/11/222449.webp?s=807b29db48805d06f863451ae8b44d27" alt="Kanbaru, Suruga" width="20%" height="240" max-width="20%" max-height="240" title="Kanbaru, Suruga" /></a><a width="100%" href="https://myanimelist.net/character/50057/Tomoko_Kuroki" overflow="hidden"><img src="https://cdn.myanimelist.net/images/characters/15/212635.webp?s=d3756e5ae6e0e0f03736ba6f464227a2" alt="Kuroki, Tomoko" width="20%" height="240" max-width="20%" max-height="240" title="Kuroki, Tomoko" /></a><a width="100%" href="https://myanimelist.net/character/153859/Yae_Saotome" overflow="hidden"><img src="https://cdn.myanimelist.net/images/characters/12/538425.webp?s=6fcca0ca41d34078b13f35c57dd80804" alt="Saotome, Yae" width="20%" height="240" max-width="20%" max-height="240" title="Saotome, Yae" /></a><a width="100%" href="https://myanimelist.net/character/6977/Sawako_Kuronuma" overflow="hidden"><img src="https://cdn.myanimelist.net/images/characters/6/120945.webp?s=b66012c0e8676ef7a444e429ed06e184" alt="Kuronuma, Sawako" width="20%" height="240" max-width="20%" max-height="240" title="Kuronuma, Sawako" /></a></p></details>
// ## 📊 Statistics
// ### 📺 Anime Statistics
// ### 📖 Manga Statistics
// <sub>Last updated by MAL-Readme-Activity</sub><!-- MAL_README_ACTIVITY:end -->
// ALGO DEPOIS DO <!-- MAL_README_ACTIVITY:end `;

//   return (
//     <div>
//       <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
//         {readmeMarkdown}
//       </ReactMarkdown>
//     </div>
//   );
// };

const GithubProfile: React.FC<Props> = ({ themeName, setThemeName, children }) => {
  const [profileData, setProfileData] = useState<APIUser>(dummyProfileData);
  const [repoData, setRepoData] = useState<APIRepo[]>(dummyRepoData);

  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (!username) {
      return;
    }
    getGithubUserData(username).then((data) => {
      setProfileData(data);
    });
    // getGithubRepoData(username).then((data) => {
    //   setRepoData(data);
    // });
  }, [username]);

  return (
    <>
      <Header themeName={themeName} setThemeName={setThemeName} profileData={profileData} />

      <div className="profile-container">
        <main className="profile-main">
          <div className="profile-left-side">{profileData && <ProfileData APIUser={profileData} />}</div>

          <div className="profile-right-side">
            <div className="readme-container">
              <div className="readme-header">
                {profileData.login}
                <span className="color-fg-muted">/</span>
                <span className="monospace">README</span>
                <span className="color-fg-muted">.md</span>
              </div>
              {children}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default GithubProfile;
