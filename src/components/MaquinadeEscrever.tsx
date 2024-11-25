import { useEffect, useState } from "react";

// Definir os tipos de props esperados
interface MaquinadeEscreverProps {
  text: string;
  esconderCursor?: boolean;
  delay?: number;
}

export function MaquinadeEscrever({ text, esconderCursor = false, delay = 200 }: MaquinadeEscreverProps) {
  const [displayText, setDisplayText] = useState<string>("");
  const [showCursor, setShowCursor] = useState<boolean>(false);

  const escreverNaTela = (text: string, i: number = 0) => {
    if (i < text.length) {
      setShowCursor(true);
      setDisplayText(text.slice(0, i + 1));
      setTimeout(() => escreverNaTela(text, i + 1), 100);
    } else if (i > text.length && esconderCursor) {
      setShowCursor(false);
    }
  };

  useEffect(() => {
    setTimeout(() => escreverNaTela(text), delay);
  }, [text, delay]); // Adicionar dependências para reagir a mudanças

  return (
    <div>
      {displayText}
      {showCursor && (
        <span className="animate-animar-cursor text-xl md:text-2xl ml-1 font-medium">|</span>
      )}
    </div>
  );
}

export default MaquinadeEscrever;
