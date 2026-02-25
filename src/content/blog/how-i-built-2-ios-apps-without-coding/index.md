---
title: "I Built 2 iOS Apps at 55 Without Writing a Line of Code"
description: "Mechanical engineer Greg Kowalczyk shipped SunUp by GearTOP and RunMate Pro to the App Store without a coding background — using VibeCode, Claude Code, and Cursor AI. The tools, the process, 39 App Store rejections, and what it means for any business owner who thinks they can't build software."
pubDate: 2026-02-23
author: "Greg Kowalczyk"
authorTitle: "AI & Digital Growth Consultant"
version: "1.0"
tag: "App Development"
featured: true
---

# I Built 2 iOS Apps at 55 Without Writing a Line of Code

I'm a mechanical engineer. My last coding experience was Visual Basic in university. That was the 1990s.

In September 2025, I shipped two iOS apps to the App Store. Here's exactly how I did it — and why the experience changed how I think about what's possible for any small business owner.

> **I walked through this full journey live at VibeMarketer in December 2025.** The interactive session covers every stage — the tools, the GPS nightmare, the 39 rejections, and the before/after numbers. [Explore the full session →](https://kowalcg.github.io/vibemarketer-mentor-session-11dec2025/)

## Why I Decided to Build Apps

I've run two e-commerce brands — GearTOP (sun protection gear) and TapeGeeks (athletic tape and recovery products) — since 2014. Both sell on Amazon and Shopify. The problem with that model: Amazon customers don't give you their email address. You get the transaction, then you lose them.

Apps solve that. Daily engagement. Direct relationship. Value delivered every single time someone opens it.

I also had a specific, personal problem: I'd been tracking my running shoe mileage in spreadsheets for 16 years. Every runner I know does the same thing. Worn-out shoes cause injuries. There had to be a better way.

The ideas were there. The question was whether I could build them.

## The Turning Point: June 17, 2025

I'd been using AI conversationally for years — ChatGPT, Claude, Gemini — but never thought about building with it. I was a user, not a builder.

Then I found an interview with the VibeCode founders on Greg Isenberg's podcast. For the first time, I believed it might actually be possible for someone with my background. I signed up for VibeCode on June 17, 2025.

I went from zero apps to two live App Store products in roughly 12 weeks. Everything changed from that moment.

## The Stack: Three Tools, No Coding Background Required

I used three tools. Nothing else.

**VibeCode** — The foundation. You describe a screen in plain English and it generates the React Native component. You don't write code; you write instructions. VibeCode scaffolds the entire project, manages the Expo framework, and handles the architecture that would take a developer weeks to set up from scratch. (Referral code **GREG** gets you $10 credit when you sign up.)

**Claude Code** — The co-developer. This isn't a chatbot. It lives in your project folder, reads your files, executes code, and explains exactly what's broken and why. When something failed, I'd describe the problem and Claude Code would diagnose it, suggest the fix, and verify the result. It operates like a developer inside your project — not an advisor on the sideline.

**Cursor AI** — The editor. For targeted changes in specific files, debugging precise functions, and making the kind of small edits that require file-level precision. Cursor explains code in plain language as you work.

The workflow: VibeCode generates the foundation → Claude Code handles architecture and problems → Cursor makes targeted edits. I had to learn Terminal basics, Expo, and TestFlight along the way. I learned them the same way I learned everything else: ask AI to explain, try it, fail, ask again.

## SunUp by GearTOP: The First App

SunUp is a UV safety platform built for GearTOP customers — hikers, outdoor families, travelers, anyone who spends real time in the sun.

Features: personalized UV burn time calculator based on skin type, 48-hour UV and AQI forecast, family mode for tracking multiple people with different skin types, and product recommendations from GearTOP's line.

The business logic is straightforward. GearTOP sells sun hats and UV-protection gear. SunUp creates daily engagement with customers who need to know whether it's safe to be outside today. Every time they open the app, we're in their pocket. When they need a sun hat, they already know exactly who to buy it from.

SunUp took approximately 6 weeks to build and launched in early September 2025.

**[Download SunUp by GearTOP on the App Store](https://apps.apple.com/us/app/sunup-by-geartop/id6751246960)**

## RunMate Pro: The 39-Rejection App

RunMate Pro is a GPS running tracker with shoe mileage logging, route planning, and injury prevention content — integrated with TapeGeeks athletic tape products.

The development was harder. Much harder.

**Weeks 1–4: Building the core.** GPS tracking, shoe management, route planning, basic UI. The GPS worked perfectly in the simulator. Then I took it outside and put the phone in my pocket.

**The GPS nightmare.** Signal dropped. Polylines stopped drawing. Maps stopped updating. I was stuck for 3 weeks and ran over 100 outdoor tests trying to diagnose it. Background GPS tracking behaves differently from what you test in a simulator — different signal conditions, phone orientation, app state management. It's genuinely complex. Ansh from the VibeCode team personally stepped in to help fix it. Without that community support, I'm not sure I would have solved it.

**The map system failure.** Around week 5, I discovered I'd accidentally mixed Apple Maps and Google Maps implementations. Billing issues. Trail coverage gaps. The user experience was inconsistent in ways I couldn't explain. The fix: scrap the entire map system and rebuild from scratch with open-source maps. A month of work, partially gone. This is why you test integrations early — before you build everything else on top of them.

**The 39 rejections.** I submitted RunMate Pro to the App Store and it was rejected. Then rejected again. 39 times total, across technical issues, compliance requirements, UI guidelines, privacy policy gaps, and incomplete feature requirements.

My process for each one: copy the rejection message → paste it into Cursor or ChatGPT → get a specific explanation of what Apple requires → implement the fix → rebuild → resubmit. Every rejection was a solvable problem. The emotional challenge was harder than the technical one.

By rejection 37, I nearly quit. End of August 2025 — exhausted, frustrated, seriously considering hiring a developer. I'd been at this for 10 weeks. I felt defeated.

I tried one more time.

Rejection #39 → **APPROVED.**

RunMate Pro launched early September 2025.

**[Download RunMate Pro on the App Store](https://apps.apple.com/ca/app/runmate-pro/id6751238787)**

## What I Learned Building Both

**Start with your own problem.** RunMate Pro came from 16 years of running and hating spreadsheet shoe tracking. SunUp came from selling sun protection products and losing customer contact after every Amazon transaction. Both were real problems I understood from the inside. That understanding is something AI can't replicate — it's the unfair advantage you bring to the build.

**Build in tiny pieces. Test in the real world.** The GPS problem was invisible in a simulator. I had to run actual routes, outdoors, with the phone in my pocket, and watch what failed. For anything your app does in a physical environment, the simulator will lie to you.

**AI will break working code. Version control is not optional.** The longest rollback I did was 5 full days of work — undone because AI "improved" code that was already working and I hadn't saved a clean version before making changes. Save working versions before any major change. This is the lesson I learned the expensive way.

**Rejections are product feedback.** Every App Store rejection told me exactly what Apple wanted fixed. By submission 39, RunMate Pro was a significantly better app than what I originally submitted. Treat each rejection as a specific, actionable note from your most demanding editor.

**Breakthrough usually comes right after you want to stop.** I nearly quit at the end of August. Both apps were live by September. That pattern holds more often than it should.

## Before vs. After: June to October 2025

| | Before (June 2025) | After (October 2025) |
|---|---|---|
| Apps | 0 | 2 live, 3 in development |
| Landing page timeline | 10–14 days, $2–5K | 2–3 hours, $0 |
| Customer relationship | One-time transaction | Daily app engagement |
| Market position | Commodity + price competition | Solution provider + value |
| Development | External dependency | Fully independent |

## What This Means for You

I was 55 years old. My last coding experience was Visual Basic in university in the 1990s. I run two e-commerce brands, co-lead a running club, and have zero computer science background.

I shipped two apps to the App Store in 6 months.

The barrier isn't technical anymore. The tools exist right now. The question is whether you decide to start.

If you have a problem worth solving and a business that would benefit from deeper customer relationships, you can build something — without a developer, without a CS degree, and without waiting for the "right time." You need a real problem, patience, and enough persistence to try one more time when you're ready to quit.

---

## Frequently Asked Questions

**Do I need to know how to code to build an iOS app with VibeCode?**
No. Greg's last coding experience was Visual Basic in the 1990s. VibeCode generates React Native components from plain English descriptions. You describe what you want built; the tool generates the code. You'll debug using AI tools (which explain problems in plain language), but you don't write the code yourself.

**How long does it take to build an app this way?**
SunUp took ~6 weeks. RunMate Pro took 8–10 weeks, extended by a 3-week GPS debugging stretch, a complete map system rebuild, and 39 App Store review cycles. Expect your first app to take longer than you plan — the learning curve is real.

**What does it cost?**
The core tools — VibeCode, Cursor AI, and Claude Code — run approximately $70–300/month depending on usage tier. The Apple Developer Program is $99/year. Compare that to $50,000–$200,000+ for a professional developer to build a comparable custom app.

**What is VibeCode?**
VibeCode is a no-code app building platform built on React Native and Expo. You describe screens and features in plain English; VibeCode generates the underlying code. It's the entry point that makes mobile app development accessible without a coding background.

**What is Claude Code?**
Claude Code is an AI coding assistant that runs in your terminal, reads your project files, and operates directly within your codebase — executing commands, debugging, and building features. Unlike a chatbot, it takes action inside your project rather than just advising from the outside.

**How do you handle App Store rejections without a technical background?**
Copy the rejection message → paste it into Cursor or ChatGPT → get a specific explanation of what Apple requires → implement the fix → rebuild → resubmit. Each rejection is a specific, solvable problem described in Apple's own words. 39 rejections made RunMate Pro a better app than the original submission.

---

*Greg Kowalczyk is an AI & Digital Growth Consultant based in Oakville, Ontario. He built SunUp by GearTOP and RunMate Pro as a non-coder using AI-assisted development tools. He runs GearTOP and TapeGeeks, two e-commerce brands operating since 2014. [View his project portfolio →](/projects)*
