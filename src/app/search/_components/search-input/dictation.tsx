"use client";

import { MicIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  onDictation: (text: string) => void;
};

export default function DictationInput({ onDictation }: Props) {
  const recognitionRef = useRef<any>(null);
  const [dictationSupported, setDictationSupported] = useState(() => {
    if (
      typeof window === "undefined" ||
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      return false;
    }

    // @ts-ignore
    const recognition = new (window.SpeechRecognition ??
      // @ts-ignore
      window.webkitSpeechRecognition)();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      console.log("dictation started");
    };

    recognition.onerror = (event: any) => {
      console.log("dictation error", event);
    };

    recognition.onend = () => {
      console.log("dictation ended");
    };

    recognition.onresult = (event: any) => {
      console.log("dictation event", event);
      const result = event.results[event.resultIndex];
      const text = result[0].transcript;

      onDictation(text);
    };

    recognitionRef.current = recognition;

    return true;
  });

  useEffect(() => {
    if (!recognitionRef.current) {
      return;
    }

    recognitionRef.current.onresult = (event: any) => {
      console.log("dictation event", event);
      const result = event.results[event.resultIndex];
      const text = result[0].transcript;

      onDictation(text);
    };

    recognitionRef.current.onend = () => {
      console.log("dictation ended");
      setIsDictating(false);
    };
  }, [onDictation]);

  const [isDictating, setIsDictating] = useState(false);

  const handleDictate = useCallback(() => {
    if (!recognitionRef.current) {
      return;
    }

    if (!isDictating) {
      recognitionRef.current.start();
      setIsDictating(true);
    } else {
      recognitionRef.current.stop();
      setIsDictating(false);
    }
  }, [isDictating]);

  if (!dictationSupported) {
    return null;
  }

  return (
    <button type="button" onClick={handleDictate}>
      <MicIcon className="h-4 w-4" />
      <span className="sr-only">Dictate</span>
    </button>
  );
}
