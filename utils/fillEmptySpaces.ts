import align from "align-text";
import stringWidth from "string-width";

function fillEmptySpaces(title: string, number: number, fill: string, totalSpaces = 54): string {
  const emptySpaces = totalSpaces - (title.length + number);

  if (emptySpaces <= 0) {
    return "";
  }

  return `${fill.repeat(emptySpaces)}`;
}

export function alignTexts(text1: string, text2: string, maxWidth: number = 45): string {
  const text1Width = stringWidth(text1);
  const text2Width = stringWidth(text2);
  const dots = ".".repeat(maxWidth - text1Width - text2Width - 1); // -1 para o espaço entre os textos
  const combinedText = `${text1} ${dots} ${text2}`;

  // Função de transformação para alinhar à direita, considerando a largura real
  const rightAlign = (_: number, longest: number, line: string) => {
    const lineWidth = stringWidth(line);
    return longest - lineWidth;
  };

  return align(combinedText, rightAlign);
}

export default fillEmptySpaces;
