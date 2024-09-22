import React from "react";
import {
  FaRegCompass,
  FaCar,
  FaRegLaugh,
  FaBrain,
  FaRegGrinTongueSquint,
  FaRegQuestionCircle,
  FaRegSadCry,
  FaRegGrinBeamSweat,
  FaGamepad,
  FaRegGrinTears,
  FaLandmark,
  FaRegDizzy,
  FaChild,
  FaHatWizard,
  FaRegHandRock,
  FaRobot,
  FaRegGrinSquint,
  FaRegHandPaper,
  FaCloudMoon,
} from "react-icons/fa";
import { IoIosMusicalNotes } from "react-icons/io";
import { LiaFistRaisedSolid } from "react-icons/lia";
import { IoFilmOutline } from "react-icons/io5";

export function getTagIcon(genre: string): { icon: JSX.Element; colorClass: string } {
  const iconProps = { size: 14, color: "inherit" };
  switch (genre) {
    case "Action":
      return { icon: <LiaFistRaisedSolid {...iconProps} />, colorClass: "tags-color-red" };
    case "Adventure":
      return { icon: <FaRegCompass {...iconProps} />, colorClass: "tags-color-brown" };
    case "Cars":
      return { icon: <FaCar {...iconProps} />, colorClass: "tags-color-blue" };
    case "Comedy":
      return { icon: <FaRegLaugh {...iconProps} />, colorClass: "tags-color-yellow" };
    case "Dementia":
      return { icon: <FaBrain {...iconProps} />, colorClass: "tags-color-purple" };
    case "Demons":
      return { icon: <FaRegGrinTongueSquint {...iconProps} />, colorClass: "tags-color-dark-red" };
    case "Mystery":
      return { icon: <FaRegQuestionCircle {...iconProps} />, colorClass: "tags-color-dark-purple" };
    case "Drama":
      return { icon: <FaRegSadCry {...iconProps} />, colorClass: "tags-color-dark-blue" };
    case "Ecchi":
      return { icon: <FaRegGrinBeamSweat {...iconProps} />, colorClass: "tags-color-pink" };
    case "Fantasy":
      return { icon: <FaHatWizard {...iconProps} />, colorClass: "tags-color-light-blue" };
    case "Game":
      return { icon: <FaGamepad {...iconProps} />, colorClass: "tags-color-green" };
    case "Hentai":
      return { icon: <FaRegGrinTears {...iconProps} />, colorClass: "tags-color-hot-pink" };
    case "Historical":
      return { icon: <FaLandmark {...iconProps} />, colorClass: "tags-color-gold" };
    case "Horror":
      return { icon: <FaRegDizzy {...iconProps} />, colorClass: "tags-color-black" };
    case "Kids":
      return { icon: <FaChild {...iconProps} />, colorClass: "tags-color-orange" };
    case "Magic":
      return { icon: <FaHatWizard {...iconProps} />, colorClass: "tags-color-light-blue" };
    case "Martial Arts":
      return { icon: <FaRegHandRock {...iconProps} />, colorClass: "tags-color-gray" };
    case "Mecha":
      return { icon: <FaRobot {...iconProps} />, colorClass: "tags-color-silver" };
    case "Music":
      return { icon: <IoIosMusicalNotes {...iconProps} />, colorClass: "tags-color-violet" };
    case "Parody":
      return { icon: <FaRegGrinSquint {...iconProps} />, colorClass: "tags-color-light-green" };
    case "Samurai":
      return { icon: <FaRegHandPaper {...iconProps} />, colorClass: "tags-color-dark-gray" };
    case "Romance":
      return { icon: <FaRegGrinTongueSquint {...iconProps} />, colorClass: "tags-color-pink" };
    case "Supernatural":
      return { icon: <FaCloudMoon {...iconProps} />, colorClass: "tags-color-light-purple" };
    default:
      return { icon: <IoFilmOutline {...iconProps} />, colorClass: "tags-color-white" };
  }
}
const Tag = ({ text }: { text: string }) => {
  const { icon, colorClass } = getTagIcon(text);
  if (text === "Award Winning") {
    text = "Awarded";
  }
  return (
    <span className={`default-tag flex item-center gap-2 ${colorClass} text-overflow text-nowrap w-auto`}>
      {icon}
      {text}
    </span>
  );
};

export default Tag;
