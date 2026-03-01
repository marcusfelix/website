import { IconPlayerPlay, IconRefresh } from "@tabler/icons-preact";
import { useEffect, useState, useMemo } from "preact/hooks";
import { StochasticParrot } from "../includes/stochasticParrot";
import type { ComponentChildren } from "preact";

const trainData = [
    "Design oriented code is how you develop software with purpose",
    "Hi, I'm Marcus. I'm a software developer with a passion for technology and design.",
    "Tutorial on how to destroy the planet.",
    "Why are creative people so weird?",
    "Memoria is a side project about photo sharing",
    "Agent Barney is a side project for automation.",
    "Fluent Forever is a book about learning languages.",
    "Hytale is an upcoming game with infinite possibilities.",
    "Steely Dan fusion rock with jazz",
    "We build something together using design and technology.",
    "Simple and enjoyable to use digital products."
];

export default function Hero({ children }: { children?: ComponentChildren }) {
    const [text, setText] = useState("");
    const [currentStarter, setCurrentStarter] = useState("");
    const [starterIndex, setStarterIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    const parrot = useMemo(() => {
        const p = new StochasticParrot();
        p.trainAll(trainData);
        return p;
    }, []);

    const type = async (newText: string) => {
        setIsTyping(true);
        for (let i = 0; i <= newText.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 60));
            setText(newText.substring(0, i));
        }
        setIsTyping(false);
    }

    const clear = async (current: string) => {
        setIsTyping(true);
        for (let i = current.length; i >= 0; i--) {
            await new Promise(resolve => setTimeout(resolve, 20));
            setText(current.substring(0, i));
        }
        setIsTyping(false);
    }

    // Initial load: start with the first starter
    useEffect(() => {
        const firstStarter = getFirstThreeWords(trainData[0]);
        setCurrentStarter(firstStarter);
        type(parrot.complete(firstStarter, 3));
        setStarterIndex(1); // Next one will be index 1
    }, []);

    const handleRunCode = async () => {
        if (isTyping) return;
        
        const nextIndex = starterIndex % trainData.length;
        const starter = getFirstThreeWords(trainData[nextIndex]);
        
        setCurrentStarter(starter);
        const prediction = parrot.complete(starter, 5);
        
        await clear(text);
        await type(prediction);
        
        setStarterIndex(nextIndex + 1);
    }

    const getFirstThreeWords = (str: string) => {
        return str.split(" ").slice(0, 2).join(" ");
    }
    
    return (
        <div class="flex flex-col md:flex-row gap-8 items-center w-full">
            <div class="w-full md:w-1/2">
                <h1 class="flex-1 font-bold text-6xl md:text-8xl text-foreground-900">
                    {text}<span class={isTyping ? "" : "blink"}>_</span>
                </h1>
            </div>
            <div class="flex gap-4 flex-col-reverse md:flex-col w-full md:w-1/2 min-w-0">
                {children}
                <div class="flex flex-col md:flex-row items-start md:items-center gap-4 px-2">
                    <button 
                        type="button" 
                        class="flex gap-2 items-center cursor-pointer text-sm" 
                        onClick={handleRunCode}
                        disabled={isTyping}
                    >
                        <IconRefresh size={18}/> Re-run
                    </button>
                    {currentStarter && (
                        <span class="text-xs text-foreground-500 bg-foreground-200 px-2 py-1 rounded-full">
                            parrot.<span class="text-purple-500 dark:text-purple-400">complete</span>(<span class="text-yellow-700 dark:text-yellow-600">"{currentStarter}"</span>)
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
