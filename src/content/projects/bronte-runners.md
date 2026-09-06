---
name: "Bronte Runners"
tag: "Web · Live"
tagColor: "cyan"
image: "/images/projects/bronterunners-website.webp"
description: "Club website for Bronte Runners — the free, all-paces community running club I've been part of for 16 years, with 800+ members across Oakville and Burlington. Weekly run schedule with a live next-run countdown, mapped routes, events, news, photos, team and partner pages. Built in one day, September 2026."
stats:
  - "Live at bronterunners.vercel.app — built and shipped September 5, 2026"
  - "800+ members across Oakville and Burlington · $0 membership fee, always"
  - "3 group runs a week, year-round · live countdown to the next run"
  - "Mapped routes, events calendar, news, photo albums, team and partner pages"
tech: ["Astro 5", "Tailwind CSS v4", "Leaflet", "Vercel", "RSS", "JSON-LD"]
links:
  - { label: "Visit Site", href: "https://bronterunners.vercel.app/", external: true }
  - { label: "Bronte Harbour Classic", href: "/projects/bronte-harbour-classic/" }
order: 52
liveUrl: "https://bronterunners.vercel.app"
schemaType: "WebSite"
year: "2026"
faq:
  - q: "What is Bronte Runners?"
    a: "Bronte Runners is a free, all-paces community running club with 800+ members across Oakville and Burlington, Ontario. It meets Wednesday evenings in downtown Oakville and weekend mornings on the Bronte waterfront. There is no fee and no form."
  - q: "How do I join Bronte Runners?"
    a: "Show up. Check the next run on bronterunners.vercel.app, go to the meeting point and run with the group. Former elite athletes and first-time 5K runners share the same start line."
  - q: "What was the Bronte Runners website built with?"
    a: "Astro 5 and Tailwind CSS v4 on Vercel, with Leaflet maps drawn from GPX route files, content collections for runs, routes, events, news, people and partners, JSON-LD for the club and its events, and an RSS feed. It was built and shipped in one day, September 5, 2026."
  - q: "How is Bronte Runners connected to the Bronte Harbour Classic?"
    a: "The race is held on the club's home waterfront and Bronte Runners is a community partner: members marshal, pace, staff water stations and race. Greg Kowalczyk, who has run with the club for 16 years and is one of its leads, is the race's director."
  - q: "Can club volunteers update the site themselves?"
    a: "Yes. Every run, route, event and news post is a markdown file in a content collection, so a volunteer can add or edit content by editing a file rather than touching a template."
---

## The club

Bronte Runners grew the way the best clubs do: a few neighbours who kept bumping into
each other on the Bronte waterfront path decided to run at the same time, then told a few
more people. Today it is one of the largest and most active running communities in
Halton — 800+ members across Oakville and Burlington, three group runs a week, year-round.
It has never charged a fee and never asked anyone to fill in a form. You find the next
run, you show up.

I've been running with the club for 16 years and I'm one of its leads. It is where I met
most of my running friends, where I trained for every race I've entered, and where the
idea for the [Bronte Harbour Classic](/projects/bronte-harbour-classic/) came from. The
race is held on the club's home waterfront, and Bronte Runners is a community partner:
members marshal, pace, staff the water stations and race — a great many of them in red.

## What the site had to do

For 16 years the club lived entirely inside a Facebook group. That works for people who
are already in it. It does nothing for the person who just moved to Bronte, searched
"running club Oakville", and got nothing back.

So the site had one job: make it trivially easy to show up for the first time. Where and
when is the next run, what are the routes, what pace groups exist, who leads them. Then
everything a club accumulates — events, news, photos, partners, the team — kept in one
place that the club owns.

## Build notes

Astro 5 with Tailwind CSS v4, deployed on Vercel. Every run, route, event, news post,
person and partner is a content collection entry, so club volunteers can add a run or an
event by editing a markdown file rather than touching a template. Routes are drawn on
Leaflet maps from GPX files. The homepage computes the next scheduled run from the
weekly schedule and shows a live countdown to it.

The site emits JSON-LD for the club, its people and its events, plus an RSS feed and a
sitemap. It was built and shipped in a single day, September 5, 2026, using the same
stack and the same "keep everything, forever" archive approach I took with the Bronte
Harbour Classic site — the club's history should compound, not disappear into a social
feed.
