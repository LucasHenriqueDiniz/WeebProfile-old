interface BasePlugin {
  base: string[] | undefined;
}

export default function renderBase(BasePlugin: BasePlugin): string {
  return `
    <div class="base">
        <h2>Base</h2>
        <p>Base: ${BasePlugin.base}</p>
    </div>
    `;
}
