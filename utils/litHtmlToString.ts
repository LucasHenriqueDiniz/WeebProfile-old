// copy of the funciton html from lit-html but with the return type changed to String
export function s_html(strings: TemplateStringsArray, ...values: unknown[]): string {
  return { strings, values } as any;
}
