import {
    Inter,
    Open_Sans,
    Outfit,
    Dancing_Script,
    PT_Serif,
    Kaushan_Script,
    Oswald,
    Poller_One,
    Bebas_Neue,
} from "next/font/google";

// Primary font - Inter (per brand guidelines)
export const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Secondary font - Open Sans (per brand guidelines)
export const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Body font (alternative)
export const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Headings - PT Serif for elegant headers
export const ptSerif = PT_Serif({ subsets: ["latin"], weight: ["400", "700"] });

// Legacy fonts (kept for compatibility)
export const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
export const kaushanScript = Kaushan_Script({ subsets: ["latin"], weight: ["400"] });
export const oswald = Oswald({ subsets: ["latin"], weight: ["200", "400", "700"] });
export const pollerOne = Poller_One({ subsets: ["latin"], weight: ["400"] });
export const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
