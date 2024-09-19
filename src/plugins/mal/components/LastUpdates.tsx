import { format } from "date-fns";
import { FaList, FaStar } from "react-icons/fa";
import DefaultTitle from "../../!templates/Default/Default_Title";
import RenderBasedOnStyle from "../../!templates/RenderBasedOnStyle";
import TerminalCommand from "../../!templates/Terminal/Terminal_Command";
import TerminalLineBreak from "../../!templates/Terminal/Terminal_LineBreak";
import getEmojiStatus from "../../../../utils/getEmojiStatus";
import getEnvVariables from "../../../../utils/getEnvVariables";
import getPseudoCommands from "../../../../utils/getPseudoCommands";
import Img64 from "../../../base/ImageComponent";
import { LastUpdatesAnime, LastUpdatesManga, MalLastUpdatesResponse } from "../types/malLastUpdatesResponse";
import PorcentageBar from "./Default_PorcetangeBar";

function DefaultUpdate({ update }: { update: LastUpdatesAnime | LastUpdatesManga }): JSX.Element {
  const isAnime = "episodes_total" in update;
  const title = update.entry.title;
  const imgSrc = update.entry.images.jpg?.base64;
  const total = isAnime ? update.episodes_total : update.chapters_total || 0;
  const current = isAnime ? update.episodes_seen : update.chapters_read || 0;
  const status = update.status;
  const date = format(new Date(update.date), "MMM d, h:mm a");
  const score = update.score ?? 0;

  return (
    <div className="last-update-grid">
      <div className="default-update-image drop-shadow">
        <Img64 url64={imgSrc} alt={title} width={74} className="image-center-full" />
      </div>
      <div className="flex-d w100 justify-evenly">
        <div className="title-grid">
          <h3 className="lg-text-bold text-nowrap text-overflow">{title}</h3>
          <span className="flex items-center justify-center xl-text color-primary gap-2">
            {score === 0 || !score ? "-" : score} <FaStar className="color-primary pb-4" />
          </span>
        </div>

        <PorcentageBar current={current} total={total} status={status} />

        <div className="flex justify-between">
          <div className="md-text gap-4 flex items-center">
            <span className={`default-${status === "Reading" ? "watching" : status === "Plan to Read" ? "plan-to-watch" : status.toLowerCase().split(" ").join("-")}`}>
              {status}
            </span>
            <span>
              {current === 0 || !current ? "?" : current} / {total === 0 || !total ? "?" : total}
            </span>
          </div>
          <span className="sm-text text-gray flex align-flexend">{date}</span>
        </div>
      </div>
    </div>
  );
}

function TerminalUpdate({ update }: { update: LastUpdatesAnime | LastUpdatesManga }): JSX.Element {
  const isAnime = "episodes_total" in update;
  const title = update.entry.title;
  const total = isAnime ? update.episodes_total : update.chapters_total || 0;
  const current = isAnime ? update.episodes_seen : update.chapters_read || 0;
  const status = update.status;
  const date = format(new Date(update.date), "MMM d, h:mm a");
  const score = update.score ?? 0;

  // Calcula a porcentagem e a representação na barra de progresso
  const percentage = Math.round((current / total) * 100) || 0;
  const progressBarLength = 30;
  const filledBlocks = Math.round((percentage / 100) * progressBarLength);

  // Cria a barra de progresso com caracteres ASCII
  const progressBar = "█".repeat(filledBlocks) + "░".repeat(progressBarLength - filledBlocks);

  const statusColor = `default-${status === "Reading" ? "watching" : status === "Plan to Read" ? "plan-to-watch" : status.toLowerCase().split(" ").join("-")}`;

  return (
    <div className="sm-text flex-d gap-2">
      <div className="text-warning text-overflow text-nowrap md-2-text">- {title}</div>
      <div className="text-raw">
        {percentage}% [<span className={statusColor}>{progressBar}</span>] ({current}/{total})
      </div>
      <div className="flex justify-between">
        <span className="text-bold">
          <span className={statusColor}>
            {getEmojiStatus(status)} {status}
          </span>{" "}
          | {score === 0 || !score ? "-" : score} / 10
        </span>
        <span className="text-muted">{date}</span>
      </div>
    </div>
  );
}

export default function Default_LastUpdates({ lastUpdatesData }: { lastUpdatesData: MalLastUpdatesResponse }): JSX.Element {
  const { pluginMal } = getEnvVariables();
  if (!pluginMal) throw new Error("Mal plugin not found in Default_LastUpdates component");

  // push anime and manga together and sort by date
  const allUpdates = [...lastUpdatesData.anime, ...lastUpdatesData.manga].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const title = pluginMal?.last_activity_title;
  const maxItems = pluginMal?.last_activity_max;

  return (
    <section className="default-last-updates">
      <RenderBasedOnStyle
        defaultComponent={
          <>
            <DefaultTitle title={title} icon={<FaList />} />
            <div className="flex-d gap-4">
              {allUpdates.map((update, index) => (
                <DefaultUpdate key={index} update={update} />
              ))}
            </div>
          </>
        }
        terminalComponent={
          <>
            <TerminalCommand command={getPseudoCommands({ plugin: "mal", section: "last_updates", username: pluginMal.username, limit: maxItems })} />
            <div className="flex-d gap-4">
              {allUpdates.map((update, index) => (
                <TerminalUpdate key={index} update={update} />
              ))}
            </div>
            <TerminalLineBreak />
          </>
        }
      />
    </section>
  );
}
