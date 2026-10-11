export type Project = {
  title: string;
  image: string;
  stack: string[];
  live: string;
  github: string;
  details: string[];
};

export const projects: Project[] = [
  {
    title: "Bookmark Manager",
    image: "/projects/bookmark-manager.png",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TanStack Query",
      "metascraper",
      "Tailwind",
      "Zod",
    ],
    live: "https://bookmark-manager-db.vercel.app/",
    github: "https://github.com/DebabrataBanik/Bookmark-Manager",
    details: [
      "A bookmark manager for saving links and finding them again. You paste a URL and add tags, and the backend scrapes the title, description, author and publisher with metascraper, so there is no form to fill in. Bookmarks can be filtered by tag, searched by title, sorted by recently added, recently visited or most visited, and pinned or archived. Every visit is counted.",
      "The frontend is React with TanStack Query, which keeps the feed, archive and sidebar tag counts in sync after each change. The backend is an Express API split into routes, controllers, services and models, with Zod validating requests and MongoDB storing the data. It is single-user for now, with no authentication.",
    ],
  },
  {
    title: "Weather Now",
    image: "/projects/weather-now.png",
    stack: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Tailwind",
      "React Router",
      "Open-Meteo",
    ],
    live: "https://weather-now-two-inky.vercel.app/",
    github: "https://github.com/DebabrataBanik/Weather-Now",
    details: [
      "A weather app that shows current conditions, an hourly forecast and a 7-day forecast with highs and lows for any city. It can use your current location, and a toggle switches between metric and imperial units.",
      "Forecasts and city search come from Open-Meteo, and place names for your location come from Nominatim. TanStack Query caches responses for five minutes to avoid repeat requests. Built for a Frontend Mentor hackathon.",
    ],
  },
  {
    title: "Typing Speed Test",
    image: "/projects/typing-speed-test.png",
    stack: ["React", "TypeScript", "Zustand", "Tailwind", "shadcn/ui"],
    live: "https://typing-speed-test-sigma-one.vercel.app/",
    github: "https://github.com/DebabrataBanik/Typing-Speed-Test",
    details: [
      "A typing test that shows WPM and accuracy live as you type. It has timed and passage modes, three difficulty levels and a results screen with WPM, accuracy and character counts. Your personal best is saved in localStorage. Built for a Frontend Mentor hackathon.",
      "The hardest part was input. The first version used keydown listeners on the text container, which worked on desktop but never opened the keyboard on mobile. It now uses a hidden input field, which gives native keyboard support on every device. Rendering also moved from individual characters to words, which made word states and overflow characters easier to handle.",
    ],
  },
  {
    title: "Recipe Markdown",
    image: "/projects/recipe-markdown.png",
    stack: ["React", "Hugging Face API", "react-markdown", "Vite"],
    live: "https://recipe-markdown.vercel.app/",
    github: "https://github.com/DebabrataBanik/Recipe-Markdown",
    details: [
      "An app that suggests a recipe from the ingredients you enter. The ingredients are sent to a Hugging Face model, and the response is rendered as formatted markdown.",
      "It was my first integration of an AI API into a React app, using the Hugging Face Inference API with a free model. I started on React 19 beta for its form actions but chose compatibility with react-markdown instead.",
    ],
  },
];
