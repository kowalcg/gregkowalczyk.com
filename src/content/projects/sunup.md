---
name: "SunUp by GearTOP"
tag: "iOS App · Live"
tagColor: "cyan"
image: "/images/projects/sunup-presentation.webp"
description: "Personalized UV safety app that calculates your real burn time based on skin type, live UV index, and cloud cover. Features 48-hour UV forecasts, family mode for multiple profiles, AQI tracking, and sun protection product recommendations. Built as a non-coder using AI-assisted development."
stats:
  - "Live in the App Store since September 2025"
  - "Covers UV Index, AQI, burn time calculation, and family profiles"
  - "Integrates real-time UV and air quality data via location services"
  - "Built for GearTOP's sun protection product line"
tech: ["React Native", "Expo", "VibeCode", "Claude Code", "iOS"]
links:
  - { label: "View on App Store", href: "https://apps.apple.com/us/app/sunup-by-geartop/id6751246960", external: true }
  - { label: "Visit Website", href: "https://www.getsunup.app/", external: true }
order: 10
featured: true
schemaType: "SoftwareApplication"
platform: "iOS"
year: "2025"
faq:
  - q: "What is SunUp by GearTOP?"
    a: "SunUp is a free iOS app from GearTOP that tells you how many minutes you can stay in the sun before you burn. It combines your Fitzpatrick skin type with the live UV index, cloud cover, time of day, location and whether you have applied sunscreen, and returns one number: minutes to burn."
  - q: "How does SunUp calculate burn time?"
    a: "It uses a dose-response model: the UV index and cloud cover give the intensity of UV reaching you, your skin type sets how much UV dose produces a burn, and sunscreen SPF extends that dose. The result is a personalised burn time rather than a raw UV index."
  - q: "Does SunUp work for children and families?"
    a: "Yes. Family mode keeps a separate profile for each person, because a child's skin burns much faster than an adult's at the same UV index. Each profile gets its own burn time."
  - q: "Who built SunUp and how?"
    a: "Greg Kowalczyk, a mechanical engineer with no software development background, built it with AI-assisted development: React Native and Expo scaffolded in VibeCode, with Claude Code writing the logic and API integrations. It launched in the App Store in September 2025."
  - q: "Is SunUp free? Does it have a subscription?"
    a: "SunUp is free. It exists to make GearTOP's sun-protection customers safer, not to sell subscriptions, and the gear recommendations inside it point at GearTOP's real product line."
---

## The problem

GearTOP sells sun protection — hats, balaclavas, UV gloves. The people buying them are
hikers, anglers, and parents at the beach, and every one of them is making the same
decision badly: *how long can I actually stay out here?*

The UV index alone doesn't answer that. A UV index of 7 means something very different to
someone with fair Northern European skin than to someone who tans easily. Cloud cover
changes it. Time of day changes it. And the answer for a 40-year-old is not the answer for
their four-year-old.

Every UV app I looked at either dumped a raw index number on you, or buried the useful
part behind a subscription wall.

## What it does

SunUp takes six inputs — Fitzpatrick skin type, live UV index, cloud cover, time of day,
location, and whether sunscreen has been applied — and returns one number: minutes until
you burn. That's the whole product.

Around that core it adds:

- **48-hour UV forecast**, so you can plan the hike rather than react to it.
- **Family mode** — separate profiles, because the burn time that keeps you safe will not
  keep a child safe.
- **Air quality (AQI)**, which turns out to matter to the same people on the same days.
- **Gear recommendations** tied back to GearTOP's actual product line.

## How it was built

React Native and Expo, scaffolded in VibeCode, with Claude Code doing the heavy lifting on
logic and API integration. I do not have a software development background — I'm a
mechanical engineer who spent 22 years in industrial equipment design.

What made it possible wasn't that AI writes code. It's that AI closes the gap between
*knowing what the thing should do* and *having a working build to test*. I could specify
the burn-time model precisely, because that part is just physics and dose response. The
part I couldn't do — turning that into a shipping iOS binary — is the part that used to
cost $50,000–$70,000 and six months of somebody else's calendar.

## What I'd tell someone attempting the same thing

The build is not the hard part any more. The App Store is. Getting a first app through
review taught me more about shipping software than writing it did — see the
[RunMate Pro story](/projects/runmate-pro/), which took 39 rejections.

The other lesson: an app attached to a product business has a job beyond downloads. SunUp
exists because it makes GearTOP's customers better at the thing they bought the product
for. That's a durable reason for it to exist, and it's why it isn't chasing subscription
revenue.
