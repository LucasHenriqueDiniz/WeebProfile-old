import React from "react";

interface BasePlugin {
  base: string[] | undefined;
}

export default function renderBase(BasePlugin: BasePlugin): JSX.Element {
  return (
    <div className="base">
      <h2>Base</h2>
      <p>Base: {BasePlugin.base}</p>
    </div>
  );
}
