import { IconPlayerPlay } from "@tabler/icons-preact";
import { useEffect, useState, useMemo } from "preact/hooks";
import { StochasticParrot } from "../includes/stochasticParrot";
import type { ComponentChildren } from "preact";

export default function Hero({ children }: { children?: ComponentChildren }) {
    const [text, setText] = useState("");
    const [currentStarter, setCurrentStarter] = useState("");
    const [starterIndex, setStarterIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    const parrot = useMemo(() => new StochasticParrot(), []);

    const starters = [
        "Design oriented",
        "Hi, I'm",
        "Simple and",
        "Create digital",
        "Digital products",
        "Code that",
        "How to",
        "Creative people",
        "Steely Dan",
        "Side project"
    ];

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
            await new Promise(resolve => setTimeout(resolve, 40));
            setText(current.substring(0, i));
        }
        setIsTyping(false);
    }

    // Initial load: start with the first starter
    useEffect(() => {
        const firstStarter = starters[0];
        setCurrentStarter(firstStarter);
        type(parrot.complete(firstStarter, 3));
        setStarterIndex(1); // Next one will be index 1
    }, []);

    const handleRunCode = async () => {
        if (isTyping) return;
        
        const nextIndex = starterIndex % starters.length;
        const starter = starters[nextIndex];
        
        setCurrentStarter(starter);
        const prediction = parrot.complete(starter, 3);
        
        await clear(text);
        await type(prediction);
        
        setStarterIndex(nextIndex + 1);
    }
    
    return (
        <div class="flex flex-row gap-4 items-center">
            <div class="w-full">
                <h1 class="flex-1 font-bold text-8xl text-foreground-900">
                    {text}<span class={isTyping ? "" : "blink"}>_</span>
                </h1>
            </div>
            <div class="flex flex-col gap-2">
                {children}
                <div class="flex flex-row items-center gap-4 px-2">
                    <button 
                        type="button" 
                        class="flex gap-2 items-center cursor-pointer" 
                        onClick={handleRunCode}
                        disabled={isTyping}
                    >
                        <IconPlayerPlay size={18}/> Run code
                    </button>
                    {currentStarter && (
                        <span class="text-xs text-foreground-500">
                            Starter: "{currentStarter}"
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
