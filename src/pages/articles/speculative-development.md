---
title: 'The Spec Is the Product'
created: 2025-03-29
description: 'Agencies have always sold ideas before selling work. AI just made it embarrassingly cheap to do both at the same time.'
author: 'Marcus Felix'
tags: ["ai", "development", "agencies", "speculative-work", "software"]
layout: '../../layouts/Article.astro'
image:
  url: '/assets/spec-is-the-product-hero.webp'
  alt: 'The Spec Is the Product'
  thumb: '/assets/spec-is-the-product-hero-thumb.webp'
---

There is a version of this article where I make a confident claim about the
future of software development. A bold prediction. Maybe something about AI
replacing developers, or the opposite — developers becoming irreplaceable
wizards in a post-AI renaissance. I won't do that. Instead, I want to talk about
something that has existed in the design industry for decades and that, for some
reason, the development world has never fully embraced: speculative work.

---

## The Spec in the Room

Speculative work — work done without a confirmed contract, usually to pitch a
client or explore an idea — has a long and complicated history in creative
fields.

In advertising, it's called "spec work." Agencies produce entire campaigns on
their own dime to win a pitch. Designers submit unpaid logo concepts in hope of
being selected. Architecture studios build physical models of buildings that may
never be commissioned. The film industry calls them "sizzle reels" — produced
videos that sell the feeling of a project before a single frame of the real
thing exists.

This practice didn't emerge from generosity. It emerged from a simple economic
reality: clients find it very hard to buy something they can't see. Creative
work is inherently hard to evaluate on paper. A brief describing a logo is not a
logo. A paragraph about a website is not a website. The spec exists to bridge
that gap between imagination and conviction.

The design world has wrestled with this for generations. Spec work exploits
designers — it asks for skilled labor with no guarantee of compensation. And
yet, it persists everywhere, precisely because it works. It converts skeptics.
It moves deals forward. It collapses the distance between "maybe" and "yes."

---

## Why Agencies Love It and Designers Hate It

The tension is real and worth examining honestly.

For agencies and clients, speculative work is pure signal. It filters out
studios that can execute from those who can only articulate. It shortens
discovery phases. It replaces long back-and-forth negotiations with something
tangible to react to. A well-made spec has a way of rendering objections moot —
the client stops asking "but what would it look like?" because you've already
shown them.

For the individual doing the work, the economics are brutal. Time spent on a
pitch that doesn't convert is time not billed. The bigger the agency, the more
it can absorb these costs as a marketing budget. The smaller the studio, the
more a failed spec stings. Solo designers and small teams have historically been
the most vocal critics of spec culture for this reason — the risk is not
distributed equally.

There's also a quality argument. Work done speculatively, without deep client
context and iterative feedback, tends to be surface-level. It optimizes for
impression over function. A logo designed to win a pitch is designed to look
good in a PDF, not necessarily to hold up at 10px on a favicon or embroidered on
a jacket.

History, however, shows that the best agencies found a way to reframe this: the
spec is not the final product. It's proof of thinking. And thinking, it turns
out, is exactly what clients are willing to pay for.

---

## Then AI Arrived, and Writing Code Got Embarrassingly Easy

For decades, the development world had a convenient excuse for why it couldn't
do speculative work: building things takes too long and costs too much. You can
sketch a logo in hours. You cannot build a working e-commerce platform on spec.

That excuse is rapidly expiring.

AI-assisted development has compressed the time-to-prototype curve in ways that
would have seemed implausible five years ago. A developer with a capable model
and a well-structured prompt can produce working UI components, database
schemas, API integrations, and CI pipelines at a speed that simply didn't exist
before. The raw act of writing code — the translation from intent to syntax —
has become dramatically cheaper.

This is genuinely remarkable. And it is also, on its own, almost entirely beside
the point.

---

## Written Code Was Never the Problem

Here is the thing that gets lost in every conversation about AI and development:
the hard part was never typing the code.

The hard part is knowing what to build. The hard part is understanding a
client's business well enough to make the right tradeoffs. It's knowing that the
feature they asked for will create a support nightmare in three months. It's
recognizing that the data model they want will not scale past ten thousand
records. It's designing a system that survives the chaos of real users, real
integrations, and real organizational change.

AI doesn't know what the client meant in that ambiguous meeting. AI doesn't know
that the "simple form" needs to comply with GDPR and trigger three different
webhooks and send a confirmation in two languages. AI doesn't know that the
previous agency left a mess that is still running in production and cannot be
touched until Q3.

Writing code was the easy part. Understanding the problem well enough to write
the right code — that was always the work.

What AI has done is remove the last remaining technical barrier to speculation.
You can now build a working prototype of an idea fast enough for it to function
as a pitch artifact. The question is no longer "can we afford to show this?" but
"what should we show, and why?"

---

## PRs as Drafts: The Exploratory Development Model

This is where something genuinely new becomes possible.

Imagine treating pull requests not as completed work, but as hypotheses. A
developer — or an agent operating under developer supervision — opens a PR that
proposes one approach to a problem. It is not the answer. It is an attempt. It
makes something concrete out of an ambiguous requirement, not to be merged
as-is, but to be reacted to.

A second PR tries a different approach. A third takes the same goal and explores
a completely different architectural direction. Three attempts. Three
hypotheses. None of them is the final answer — but each one is a piece of prime
matter from which a skilled developer can synthesize something production-ready.

This is not a new idea in creative fields. Copywriters produce multiple headline
options. Architects submit three scheme variants. Directors shoot alternative
takes. The value is not in picking one artifact from a pile — it's in the
dialogue that the artifacts generate. Each attempt surfaces constraints,
preferences, and priorities that were invisible before something tangible
existed to react to.

For development, this changes the nature of what a developer does. The developer
is no longer primarily the person who writes the code. They are the person who
understands which attempt is closest to true, knows how to extract the valid
intuitions from each one, and assembles the final coherent solution from the
exploratory drafts the system has produced.

This is a different skill. It is a harder skill than writing code, in many ways.
It requires judgment, taste, and deep contextual understanding. Fortunately,
it's also a skill that cannot be automated.

---

## Who Benefits. Who Doesn't. Where the Risk Lives.

Agencies have a structural advantage in this scenario that freelancers and solo
consultants don't immediately have.

For agencies, the ability to produce speculative development work cheaply means
the pitch process changes fundamentally. Instead of presenting wireframes and
proposals, you can present working prototypes. Instead of asking a client to
imagine what the finished product will feel like, you let them interact with a
version of it in a controlled way. The conversion rate on a pitch that includes
something real and touchable is historically much higher than one that relies on
slides and good storytelling.

There's a new kind of premium service here: curated exploration. An agency runs
three different implementation attempts for a client brief and presents the
results not as "here is what we built" but as "here is what we learned about
your problem." That framing shifts the relationship from vendor to strategic
partner. Clients don't pay you for the code. They pay you for the judgment.

For freelancers, the calculus is more nuanced. The cost of speculation goes
down, which means smaller studios can compete on territory that was previously
only accessible to larger shops. But the margin compression risk is real — if
speculation is cheap, clients will expect more of it for free, which recreates
the original spec work trap in a new form.

The risk for both is drift. When generating exploratory work is fast, there is a
temptation to generate more of it at the expense of generating better of it.
Quantity becomes a substitute for quality. The client is buried in options
instead of guided through a decision. The human in the loop — the developer, the
lead, the consultant — has to resist this strongly.

Human developers in this model are not code generators. They are system
architects, problem definers, and synthesis specialists. They are the ones who
know when three attempts have produced enough information to make a decision and
when they have only created noise. That judgment is not something that emerges
from a language model. It comes from experience, domain knowledge, and genuine
understanding of what the client actually needs.

---

## A Letter to Developers: The Part That Requires Honesty

If you are a developer reading this and you feel anxious about what AI means for
your career, I want to be direct with you: the anxiety is appropriate, but it is
probably aimed at the wrong target.

The skill you need to protect is not your ability to write code. It is your
ability to understand problems deeply enough to ask the right questions about
them. It is your ability to read a system and predict how it will fail. It is
your capacity to have a conversation with a non-technical stakeholder and
translate their confusion into a precise technical definition.

Those skills take years to build and they are almost entirely invisible in a job
interview that asks you to implement a binary search tree. They are what make a
senior developer valuable — not the typing speed, not the framework familiarity,
not even the architectural patterns.

The developers who will thrive in a world of AI-assisted development are those
who become genuinely difficult to replace at the strategic layer. The ones who
can stand in a room with a client, understand their business, and then direct a
development process — whether that process involves human developers, AI agents,
or both — toward the right outcome.

The ones who will struggle are the ones who were already functioning as human
compilers: taking precise specifications and translating them faithfully into
code, with no particular ownership over the shape of the problem.

If that sounds harsh, it's not a judgment on the people in that role. It's a
description of what happens to any skill the moment it can be automated cheaply.
It happened to typographers when desktop publishing arrived. It happened to
darkroom technicians when digital photography arrived. The skill doesn't
disappear — it gets absorbed into adjacent roles or becomes a specialist niche.
But it stops being the primary source of value.

The question is which role you want to occupy in what comes next.

---

## The Chaos That Comes After the Hype

There is one more thing that history has reliably shown us, and it doesn't fit
comfortably into most AI optimism narratives.

Every time a new technology has homogenized output — printing, photography,
desktop publishing, CGI — a countermovement has eventually emerged that placed
premium value on the thing the technology couldn't replicate. After the printing
press, handwritten manuscripts became luxury objects. After digital photography,
film photography became a statement. After auto-tune, the imperfect voice became
an aesthetic choice.

The same pattern is likely coming for AI-generated work, including AI-assisted
development.

There is a version of the near future where software that was demonstrably built
by human hands — maintained thoughtfully, designed with genuine taste, carrying
the marks of human decision-making at every layer — commands a category premium
that sanitized, AI-generated product cannot. Where "handmade" becomes a
meaningful signal in software, the same way it is in furniture, food, and
fashion.

This is not guaranteed. It requires that the market develop enough exposure to
AI output to recognize its characteristic signatures — the seams, the
statistical averages, the absence of genuine idiosyncrasy. But markets do
develop this sensitivity. They always have.

Businesses that go fully automated, that strip human judgment out of the loop
entirely in pursuit of efficiency, may find that they've optimized themselves
into a corner. The value they've compressed out of their process may be exactly
the value their best clients were paying for.

The future probably isn't all human or all machine. It's a question of where in
the process human presence adds something irreplaceable — and betting on that
answer deliberately, rather than drifting into it by accident.

---

## A Note on How This Was Written

This article was generated with the assistance of an AI — specifically, Claude
by Anthropic — based on a detailed outline and a reference article written by
me,
[The Technology of Uselessness](https://marcusfelix.pages.dev/articles/technology-of-uselessness),
provided as a voice and style reference. The ideas are mine. The structure
reflects a conversation between me and a model that helped me develop and
articulate them. The prose was shaped iteratively, with my direction at every
step.

I'm disclosing this not as a disclaimer but as a demonstration. This article is,
in a small way, itself an example of what it describes: a human with a problem
(an idea worth articulating) using AI as a drafting collaborator, then applying
judgment about what to keep, what to change, and what it all means.

The question isn't whether AI helped write this. The question is whether the
thinking in it is mine. I believe it is.

---

_By Marcus Felix · 2025_
