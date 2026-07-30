---
name: "RunMate Pro"
tag: "iOS App · Live"
tagColor: "purple"
image: "/images/projects/vibemarketer-presentation.webp"
callout: "39 App Store rejections before final approval"
description: "GPS run tracking app with shoe mileage management, route history, and injury prevention tools. Tracks every run, monitors shoe wear across multiple pairs, and surfaces insights to help runners avoid overuse injuries. Built for TapeGeeks' running and recovery community."
stats:
  - "Live in the App Store since September 2025"
  - "GPS tracking, shoe mileage, route management, injury prevention"
  - "Approved after 39 App Store review rejections — every one documented and resolved"
  - "Built by a non-coder using AI-assisted development tools"
tech: ["React Native", "Expo", "VibeCode", "Claude Code", "iOS"]
links:
  - { label: "View on App Store", href: "https://apps.apple.com/us/app/runmate-pro/id6751238787", external: true }
  - { label: "Visit Website", href: "https://www.runmatepro.com/", external: true }
order: 20
featured: true
schemaType: "SoftwareApplication"
platform: "iOS"
year: "2025"
---

## The problem

Most running injuries are overuse injuries, and a large share of overuse injuries trace
back to shoes that quietly went dead. Foam compresses. Support goes. The shoe looks fine
and stops doing its job somewhere between 500 and 800 km, depending on the shoe, the
surface, and the runner.

Almost nobody tracks this. The people who do track it in a spreadsheet, badly.

Meanwhile Strava — which is excellent — is a social network that happens to track runs.
For a lot of runners, the feed is noise around the one thing they actually wanted.

## What it does

GPS tracking, route history, and the thing the other apps treat as an afterthought:
**shoe mileage across multiple pairs**. You register your shoes, assign runs to them, and
the app tells you when a pair is approaching the end of its useful life — before your shin
splints do.

It's deliberately not social. No feed, no kudos, no leaderboard.

The injury-prevention side connects to TapeGeeks content, which is where the taping and
recovery expertise already lived.

## 39 rejections

This is the part people ask about.

RunMate Pro was rejected by App Store review thirty-nine times before it was approved in
September 2025. Not one catastrophic rejection — thirty-nine separate ones, each for
something specific: background location justification, privacy manifest entries, metadata
that overpromised, screenshots that showed a state the app couldn't reach, HealthKit usage
strings that weren't specific enough.

Two things got it through.

**Treat every rejection as a spec, not a verdict.** Apple's reviewers tell you what's
wrong. The instinct is to argue or resubmit with a tweak; the faster path is to read the
rejection as a requirement you'd missed and fix the underlying thing.

**Keep a log.** I documented all thirty-nine — what was rejected, what I changed, whether
it worked. By the twentieth, patterns were obvious and I was pre-empting rejections
instead of collecting them. SunUp, built in parallel, went through review far more
cleanly because of what this one taught me.

If you're building your first iOS app without a development background: budget for this.
The build is weeks. Review can be weeks too, and nobody warns you.

## How it was built

React Native and Expo via VibeCode, with Claude Code for logic, HealthKit integration, and
the GPS pipeline. Same stack as [SunUp](/projects/sunup/), built by the same non-developer.
