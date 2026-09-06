/**
 * skills.ts — Claude Code skills Greg gives away.
 *
 * Each entry renders as a card in the "Skills" section of /projects/ and as
 * its own page at /skills/<slug>/ with a gated download (name + email → the
 * same Google Sheet the contact form writes to, then the link is revealed on
 * the page). Keep `version` in step with the zip in public/downloads/.
 */
export interface Skill {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Path under public/ */
  download: string;
  /** Human-readable size of the zip */
  size: string;
  version: string;
  /** ISO date of the current version */
  released: string;
  /** Where it was first shared */
  origin: string;
  whatItDoes: string[];
  requirements: string[];
  faq: { q: string; a: string }[];
}

export const skills: Skill[] = [
  {
    slug: 'video-to-skill',
    name: 'video-to-skill',
    tagline: 'Turn any video, podcast or talk into a visual guide and a reusable Claude skill.',
    description:
      'A Claude Code skill that takes a YouTube video, podcast episode, webinar or audio file, pulls the transcript, researches the speaker, and writes a comprehensive guide with diagrams as a single HTML file that works offline. In Full Skill mode it also writes and installs a Claude skill that applies the method in your future work. Everything lands in one folder under Downloads.',
    download: '/downloads/video-to-skill.zip',
    size: '1 MB',
    version: '1.0',
    released: '2026-09-06',
    origin: 'Shared at the AI for Business meetup, Hamilton, September 10, 2026',
    whatItDoes: [
      'Fetches the transcript from YouTube captions, or transcribes audio locally with Whisper (no API key, no cost)',
      'Works with YouTube, podcast pages, direct MP3 links, Facebook, Vimeo, TikTok and local video or audio files',
      'Researches the speaker and checks what has changed since the video was recorded',
      'Writes an 8,000 to 12,000 word reference guide with 8 to 20 Mermaid diagrams, built into one self-contained HTML file',
      'Adds an "Applying this in your business" section with the cost of every tool mentioned and a cheaper alternative',
      'Optionally writes and installs a Claude skill so the expert\'s method is available in every future session',
      'Verifies every diagram actually rendered before calling the guide done',
    ],
    requirements: [
      'Claude Code (free to install, uses your Claude subscription)',
      'Python 3 with two packages: youtube-transcript-api and markdown',
      'Optional: ffmpeg, yt-dlp and openai-whisper for podcasts, audio files and videos without captions',
    ],
    faq: [
      {
        q: 'What is a Claude Code skill?',
        a: 'A skill is a plain-text file (SKILL.md) that tells Claude Code how to do a specific job, step by step. When you type /video-to-skill or say "learn from this video", Claude reads the file and follows it. You can open the file and change it.',
      },
      {
        q: 'Do I need to know how to code?',
        a: 'No. You need Claude Code installed and a terminal open. The install is copying one folder into place. After that you paste a link and answer one question.',
      },
      {
        q: 'Where do the files go?',
        a: 'Everything goes into a folder under Downloads called "Video Skills", one subfolder per video: the transcript, the guide as HTML and Markdown, and the skill file. Nothing else on your computer is touched, and Claude tells you before it installs a skill.',
      },
      {
        q: 'Does it work with Facebook videos, podcasts or audio recordings?',
        a: 'Yes. YouTube captions are the fast path. For everything else it downloads the audio with yt-dlp and transcribes it locally with Whisper, which is free and runs on your machine.',
      },
      {
        q: 'What does it cost to run?',
        a: 'Nothing beyond your Claude subscription. Transcription and diagram rendering are local. No API keys are needed.',
      },
      {
        q: 'Can I change it for my business?',
        a: 'That is the point. The guide structure, the output folder, the sections Claude writes and the quality rules are all in SKILL.md and GUIDE-STANDARD.md as plain text. Edit them and Claude follows the new version. MIT licence.',
      },
    ],
  },
];
