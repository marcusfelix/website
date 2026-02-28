import { IconHeart, IconLoader2 } from "@tabler/icons-preact";
import { useState, useEffect } from "preact/hooks";
import Counter from "./Counter";
import { set } from "astro:schema";

export default function LikeButton() {
    const [working, setWorking] = useState(true);
    const [likeCount, setLikeCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    const fetchLikeCount = async () => {
        if (typeof window === "undefined") return;
        try {
            const response = await fetch("/api/like");
            const data = await response.json();
            setLikeCount(data.count);
            setHasLiked(data.hasLiked);
            setWorking(false);
        }
        catch (error) {
            console.error("Error fetching like count:", error);
        }
    }

    // Fetch initial like count on component mount (client-side only)
    useEffect(() => {
        fetchLikeCount();
    }, []);


    const handleClick = async () => {
        if (working || hasLiked) return;
        setWorking(true);
        try {
            const response = await fetch("/api/like", {
                method: "POST"
            });
            const data = await response.json();
            if (data.count !== undefined) {
                setLikeCount(data.count);
            }
            if (data.hasLiked !== undefined) {
                setHasLiked(data.hasLiked);
            } else {
                // In case POST just returns new count, assume success means they've liked
                setHasLiked(true);
            }
            console.log("Current like count:", data.count);
        }
        catch (error) {
            console.error("Error liking:", error);
        }
        setWorking(false);
    }

    return (
        <>
            <button 
                class={`w-10 h-10 flex gap-2 items-center justify-center cursor-pointer rounded-full transition-colors ${hasLiked ? 'bg-rose-100 text-rose-500' : 'bg-foreground-200 text-foreground-500 hover:bg-red-200'}`} 
                onClick={handleClick}
                disabled={hasLiked}
            >
                {working ? <IconLoader2 size={20} class="animate-spin" /> : <IconHeart size={20} fill={hasLiked ? "currentColor" : "none"} />}
            </button>
            <div class="text-sm text-foreground-500">
                <Counter count={hasLiked ? likeCount - 1 : likeCount}/> people {hasLiked ? "+ you" : ""} <br />liked this website
            </div>
        </>
    );
}