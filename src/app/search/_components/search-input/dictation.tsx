import { MicIcon, StopCircleIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

if (typeof window == "undefined") {
  throw new Error("client only component");
}

const recognition =
  "webkitSpeechRecognition" in window || "SpeechRecognition" in window
    ? // @ts-ignore
      new (window.SpeechRecognition ??
        // @ts-ignore
        window.webkitSpeechRecognition)()
    : null;

if (recognition) {
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";
  recognition.maxAlternatives = 1;

  recognition.onerror = (event: any) => {
    console.error("dictation error", event);
  };
}

type Props = {
  onDictation: (text: string) => void;
};

export default function DictationInput({ onDictation }: Props) {
  const [dictationSupported] = useState(() => {
    if (
      typeof window === "undefined" ||
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      return false;
    } else {
      return true;
    }
  });

  useEffect(() => {
    if (!recognition) {
      return;
    }

    recognition.onresult = (event: any) => {
      console.log("dictation event", event);
      const result = event.results[event.resultIndex];
      const text = result[0].transcript;

      onDictation(text);
    };

    recognition.onstart = () => {
      console.log("dictation started");
      setIsDictating(true);
    };

    recognition.onend = () => {
      console.log("dictation ended");
      setIsDictating(false);
    };
  }, [onDictation]);

  const [isDictating, setIsDictating] = useState(false);

  const handleDictate = useCallback(() => {
    if (!recognition) {
      return;
    }

    if (!isDictating) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }, [isDictating]);

  if (!dictationSupported) {
    return null;
  }

  return (
    <button type="button" onClick={handleDictate}>
      {isDictating ? (
        <StopCircleIcon className="h-4 w-4 text-red-500" />
      ) : (
        <MicIcon className="h-4 w-4" />
      )}

      <span className="sr-only">
        {isDictating ? "Stop dictation" : "Dictate"}
      </span>
    </button>
  );
}
