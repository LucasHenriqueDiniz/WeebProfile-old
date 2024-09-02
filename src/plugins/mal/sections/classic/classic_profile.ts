import { AnimeStatistics, MangaStatistics } from "../../../../../types/malStatisticsResponse";
import svgCircle from "../../../../base/svgCircle";
import { LastUpdatesAnime, LastUpdatesManga } from "../../../../../types/maleLastUpdatesResponse";
import { format } from "date-fns";

interface LastUpdateItemProps {
  data: LastUpdatesAnime | LastUpdatesManga;
  stat: "anime" | "manga";
}

interface ClassicProfileProps {
  statisticsData: AnimeStatistics | MangaStatistics;
  lastUpdatesData: LastUpdatesAnime[] | LastUpdatesManga[];
  username: string;
}

interface ProgressBarProps {
  value: number;
  total: number;
  status: string;
}

interface StatisticsBarProps {
  watching: number;
  completed: number;
  onHold: number;
  dropped: number;
  planToWatch: number;
}

interface MalProfileBoxProps {
  title: string;
  secondTitle: string;
  secondTitleHref: string;
  children: string;
}

interface MalProfileStatsProps {
  data: AnimeStatistics | MangaStatistics;
  userName: string;
}

function StatisticsBar({ watching, completed, onHold, dropped, planToWatch }: StatisticsBarProps) {
  const total = watching + completed + onHold + dropped + planToWatch;
  const watchingWidth = (watching / total) * 100;
  const completedWidth = (completed / total) * 100;
  const onHoldWidth = (onHold / total) * 100;
  const droppedWidth = (dropped / total) * 100;
  const planToWatchWidth = (planToWatch / total) * 100;

  return `<span class="stats-graph mt8">
  <span class="graph watching" style="width: ${watchingWidth}%"></span>
  <span class="graph completed" style="width: ${completedWidth}%"></span>
  <span class="graph on_hold" style="width: ${onHoldWidth}%"></span>
  <span class="graph dropped" style="width: ${droppedWidth}%"></span>
  <span class="graph plan_to_watch" style="width: ${planToWatchWidth}%"></span>
</span>`;
}

function ProgressBar({ value, total, status = "completed" }: ProgressBarProps) {
  // @TODO // implement progress bar like profile stats
  var percentage = (value / total) * 100;

  if (isNaN(percentage)) {
    percentage = 50;
  }

  return `<div class="progress-graph">
  <span class="${`graph-inner ${status.toLowerCase()}`}" style="width: ${percentage}%"></span>
</div>`;
}

function ProfileHeader({ title, secondTitle, secondTitleHref, children }: MalProfileBoxProps) {
  return `<section>
  <div class="stats h100">
    <h5 class="mb12 stat-title">
      <a class="floatRightHeader" href="${secondTitleHref}">${`${secondTitle}`}</a>
      ${title}
    </h5>
    <div class="container h100">
      ${children}
    </div>
  </div>
</section>`;
}

function LastUpdateItem({ data, stat }: LastUpdateItemProps) {
  const isAnime = stat === "anime";
  const imgSrc = data.entry.images.jpg?.image_url ?? data.entry.images.webp?.image_url ?? "";

  const title = data.entry.title;
  const score = data.score;
  const status = data.status;
  const date = format(new Date(data.date), "MMM d, h:mm a");

  const episodes_seen = isAnime ? (data as LastUpdatesAnime).episodes_seen ?? 0 : (data as LastUpdatesManga).chapters_read ?? 0;
  const episodes_total = isAnime ? (data as LastUpdatesAnime).episodes_total ?? 0 : (data as LastUpdatesManga).chapters_total ?? 0;
  const animeHref = data.entry.url;

  //   <svg xmlns="http://www.w3.org/2000/svg" style="width: 40px; height: 56px">
  //   <image width="40" xlink:href="${imgSrc}" height="56" />
  // </svg>
  // data:image/png;base64,

  return `<div class="flex w100 h100 mb8">
  <a href="${animeHref}" class="fl-l di-ib mr8 image" style="width: 40px; height: 56px;">
    <img width="40" height="56" alt="🦀" src="${imgSrc}" title="${title}" />
  </a>
  <div class="data flex-d w100">
    <a class="no-deco" href="${animeHref}"> ${title} </a>
    <div class="flex pt8 w100 gap-8">
      ${ProgressBar({ value: episodes_seen, total: episodes_total, status: status })}
      <span class="fn-grey2 text-nowrap">${date}</span>
    </div>
    <div class="fn-grey2 flex gap-4 align-center">
      ${status}
      <strong class="text-w"> ${episodes_seen === 0 ? "?" : episodes_seen} </strong>
      / ${episodes_total === 0 ? "?" : episodes_total} · Scored
      <strong class="text-w">${score}</strong>
    </div>
  </div>
</div>
`;
}

function ProfileStats({ data, userName }: MalProfileStatsProps) {
  const isAnime = "days_watched" in data;

  const days = data.days_watched ?? data.days_read;
  const meanScore = data.mean_score;
  const watching = data.watching ?? data.reading;
  const completed = data.completed;
  const onHold = data.on_hold;
  const dropped = data.dropped;
  const planToWatch = data.plan_to_watch ?? data.plan_to_read;

  const totalEntries = data.total_entries;
  const rewatched = data.rewatched ?? data.reread;
  const episodes = data.episodes_watched ?? undefined;
  const chapters = data.chapters_read ?? undefined;
  const volumes = data.volumes_read ?? undefined;

  function statsBottom() {
    return isAnime
      ? `<li class="clearfix mb12">
  <span class="di-ib fl-l fn-grey2">Episodes</span>
  <span class="di-ib fl-r">${episodes}</span>
</li>`
      : `<li class="clearfix mb12">
  <span class="di-ib fl-l fn-grey2">Chapters</span>
  <span class="di-ib fl-r">${chapters}</span>
</li>
<li class="clearfix mb12">
  <span class="di-ib fl-l fn-grey2">Volumes</span>
  <span class="di-ib fl-r">${volumes}</span>
</li>`;
  }

  return `
<div class="stat-score di-t w100 pt8">
  <div class="flex w100 align-center justify-between">
    <div class="pl8 fs12 fw-b">
      <span class="fn-grey2 fw-n">Days: </span>
      <span class="score-label">${days}</span>
    </div>
    <div class="pr8 fs12 fw-b">
      <span class="fn-grey2 fw-n">Mean Score: </span>
      <span class="score-label">${meanScore}</span>
    </div>
  </div>
  ${StatisticsBar({ watching, completed, onHold, dropped, planToWatch })}
  <div class="mt12 ml8 mr8 clearfix">
  <ul class="stats-status fl-l">
    <li class="stats-status-li mb12">
      <a href="${`https://myanimelist.net/${isAnime ? "animelist" : "mangalist"}/Amayacrab?status=1`}" class="status-text">
        ${svgCircle("f_watching")}
        ${isAnime ? "Watching" : "Reading"}
      </a>
      <span class="di-ib lh10">${watching}</span>
    </li>
    <li class="stats-status-li mb12">
      <a href="${`https://myanimelist.net/${isAnime ? "animelist" : "mangalist"}/Amayacrab?status=2`}" class="status-text">
        ${svgCircle("f_completed")}
        Completed
      </a>
      <span class="di-ib lh10">${completed}</span>
    </li>
    <li class="stats-status-li mb12">
      <a href="${`https://myanimelist.net/${isAnime ? "animelist" : "mangalist"}/Amayacrab?status=3`}" class="status-text">
        ${svgCircle("f_on_hold")}
        On-Hold
      </a>
      <span class="di-iblh10">${onHold}</span>
    </li>
    <li class="stats-status-li mb12">
      <a href="${`https://myanimelist.net/${isAnime ? "animelist" : "mangalist"}/Amayacrab?status=4`}" class="status-text">
        ${svgCircle("f_dropped")}
        Dropped
      </a>
      <span class="di-ib lh10">${dropped}</span>
    </li>
    <li class="stats-status-li mb12">
      <a href="${`https://myanimelist.net/${isAnime ? "animelist" : "mangalist"}/Amayacrab?status=6`}" class="status-text">
        ${svgCircle("f_plan_to_watch")}
        ${isAnime ? "Plan to Watch" : "Plan to Read"}
      </a>
      <span class="di-ib lh10">${planToWatch}</span>
    </li>
  </ul>
  <ul class="stats-data fl-r">
    <li class="clearfix mb12">
      <span class="di-ib fl-l fn-grey2">Total Entries</span>
      <span class="di-ib fl-r">${totalEntries}</span>
    </li>
    <li class="clearfix mb12">
      <span class="di-ib fl-l fn-grey2">
        ${isAnime ? "Rewatched" : "Reread"}
      </span>
      <span class="di-ib fl-r">${rewatched}</span>
    </li>
    ${statsBottom()}
  </ul>
</div>
</div>
`;
}

function classicProfile({ statisticsData, lastUpdatesData, username }: ClassicProfileProps): string {
  const isAnime = "days_watched" in statisticsData;
  const media = isAnime ? "anime" : "manga";
  const lastUpdatesHtml = lastUpdatesData.map((data) => LastUpdateItem({ data, stat: media })).join("");
  const profileStatsHtml = ProfileStats({ data: statisticsData, userName: username });

  return `
    ${ProfileHeader({
      title: isAnime ? "Anime Stats" : "Manga Stats",
      secondTitle: isAnime ? "All Anime Stats" : "All Manga Stats",
      secondTitleHref: `https://myanimelist.net/profile/${username}/statistics/${media}-scores`,
      children: profileStatsHtml,
    })}
    ${ProfileHeader({
      title: isAnime ? "Last Anime Updates" : "Last Manga Updates",
      secondTitle: isAnime ? "Anime History" : "Manga History",
      secondTitleHref: `https://myanimelist.net/history/${username}/${media}`,
      children: lastUpdatesHtml,
    })}
  `;
}

export default classicProfile;
