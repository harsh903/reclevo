import {
    Outfit,
    Dancing_Script,
    PT_Serif,
    Kaushan_Script,
    Oswald,
    Poller_One,
    Bebas_Neue,
} from "next/font/google";

// Body font
export const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

// Headings
export const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
export const ptSerif = PT_Serif({ subsets: ["latin"], weight: ["400", "700"] });
export const kaushanScript = Kaushan_Script({ subsets: ["latin"], weight: ["400"] });
export const oswald = Oswald({ subsets: ["latin"], weight: ["200", "400", "700"] });
export const pollerOne = Poller_One({ subsets: ["latin"], weight: ["400"] });
export const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
