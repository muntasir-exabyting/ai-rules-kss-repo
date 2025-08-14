# KSS Deck Outline — AI Tool Rules (Cursor, Windsurf, Warp, Gemini CLI)

**Audience:** Developers using AI coding assistants at work  
**Duration:** 60 minutes  
**Style:** fast, hands-on, no fluff  
**Tone cues:** quick humor, candid, forward-looking

---

## Slide 1 — Title & Hook

**Title:** "Make AI Tools Behave: Practical Rules for Cursor/Windsurf/Warp/Gemini CLI"  
**Design/Infographic:** Full-bleed road-with-guardrails photo; overlay big headline; small subhead with your name.  
**Content:**

- The problem: AI tools are powerful… and a little feral.
    
- The fix: rules (global + project-specific) that turn vibes into contracts.  
    **Speaker Notes:** Open with a 10-second story of a tool hallucinating a refactor. Promise concrete recipes.
    

---

## Slide 2 — Agenda & Outcomes

**Title:** "What you’ll get in 60 minutes"  
**Design:** 4x4 grid icons (⚙️ tools, 🧭 guardrails, 🧪 demos, 📦 templates).  
**Content:**

1. Why rules (and what they actually control)
    
2. Global vs Project rules mental model
    
3. How each tool handles rules (Cursor, Windsurf, Warp, Gemini CLI)
    
4. Live demo: add a rule; watch behavior change
    
5. Patterns, pitfalls, and a starter template  
    **Speaker Notes:** Set expectation: we’ll ship a pattern you can reuse today.
    

---

## Slide 3 — Why Rules?

**Title:** "Unpredictable → Repeatable"  
**Design:** Before/after split infographic.  
**Content:**

- LLMs optimize for plausible; rules shift them toward _policy-compliant_.
    
- Rules codify team norms: style, stack, quality gates, domain constraints.
    
- Output becomes auditable and teachable.  
    **Speaker Notes:** Emphasize: rules don’t remove creativity; they remove roulette.
    

---

## Slide 4 — Two Kinds of Rules

**Title:** "Global vs Project-Specific"  
**Design:** Pill chart (left/right) with sticky-note icons.  
**Content:**

- **Global:** applies to the tool everywhere on your machine/team.
    
- **Project:** lives with the repo; versioned; PR-reviewed.  
    **Speaker Notes:** Global ≈ your defaults; Project ≈ your contract for _this_ codebase.
    

---

## Slide 5 — Quick Landscape

**Title:** "Who supports what?"  
**Design:** Comparison table (minimal borders).  
**Content:**

- **Cursor:** Global (Settings), Project (`/.cursor/rules`), **MDC syntax**.
    
- **Windsurf:** Global (Settings), Project (`/.windsurf/rules`), **Markdown**.
    
- **Warp:** Global (Settings), no native project rules; **workaround:** global rule points to project folder; **Plain text**.
    
- **Gemini CLI:** Project-only (`GEMINI.md`), **Markdown**.
    
- **Claude Code:** Mentioned in stack; today’s deep dive focuses on the four above.  
    **Speaker Notes:** We’ll zoom in next with concrete examples.
    

---

## Slide 6 — Cursor Rules: Where & How

**Title:** "Cursor: Global + Project with MDC"  
**Design:** Folder tree mini-graphic + code card.  
**Content:**

- **Global:** Preferences → Rules
    
- **Project:** `/.cursor/rules/*.mdc` (one or many files)
    
- **Syntax:** **MDC (Metadata + Content)** blocks  
    **Code Snippet (MDC):**
    

```
---
name: tests-first
appliesTo: ["**/*.ts", "**/*.tsx"]
priority: 80
---
# Write tests first
- For every new module, scaffold Vitest tests before implementation.
- Use `describe/it` with AAA pattern.
```

**Speaker Notes:** Explain `appliesTo` and `priority`. Keep rules atomic; name them clearly.

---

## Slide 7 — Cursor: Example Behaviors

**Title:** "Cursor: Before → After" **Design:** Two-column diff card.  
**Content:**

- **Without rule:** assistant adds feature with no tests.
    
- **With** `**tests-first**`**:** assistant scaffolds Vitest tests, stubs, and instructions.  
    **Speaker Notes:** Show impact on first prompt after rule file is added.
    

---

## Slide 8 — Windsurf Rules: Where & How

**Title:** "Windsurf: Global + Project, Markdown"  
**Design:** Folder tree + note card.  
**Content:**

- **Global:** Settings → Rules
    
- **Project:** `/.windsurf/rules/*.md`
    
- **Syntax:** Markdown; headings define intent; bullets define constraints  
    **Code Snippet (Markdown):**
    

```
# Commit hygiene
- Write conventional commits (feat, fix, chore, docs).
- Max subject 72 chars; imperative mood.
- Include scope for packages.
```

**Speaker Notes:** Emphasize simple, declarative language; avoid nested conditionals.

---

## Slide 9 — Windsurf: Example Behaviors

**Title:** "Windsurf: Before → After"  
**Design:** Timeline arrow.  
**Content:**

- **Without rule:** generic commit message.
    
- **With rule:** enforces conventional commit with scope and imperative tone.  
    **Speaker Notes:** Point out consistency across PR history.
    

---

## Slide 10 — Warp Rules: Where & Workaround

**Title:** "Warp: Global-only, but…"  
**Design:** Warning badge + workaround diagram.  
**Content:**

- **Global:** Settings → Rules (plain text)
    
- **No native project rules**
    
- **Workaround:** global rule: "When inside a repo, read `<repo>/.warp-rules/*.txt` and follow them."  
    **Code Snippet (Plain Text):**
    

```
When the current working directory contains a `.warp-rules` folder,
read all `.txt` files in that folder and follow those instructions
for shell commands, safety checks, and output formatting.
```

**Speaker Notes:** It’s crude but effective; rely on CWD detection.

---

## Slide 11 — Gemini CLI Rules: Where & How

**Title:** "Gemini CLI: Project-only via GEMINI.md"  
**Design:** Single code card + repo icon.  
**Content:**

- **File:** `GEMINI.md` at project root
    
- **Syntax:** Markdown  
    **Code Snippet (Markdown):**
    

```
# House style
- Use Python 3.11; prefer `pydantic` models.
- Lint with `ruff`; type-check with `mypy`.
- Never commit secrets; use `.env` + doppler.
```

**Speaker Notes:** Treat `GEMINI.md` like `CONTRIBUTING.md` for your AI.

---

## Slide 12 — Comparison Matrix (At-a-Glance)

**Title:** "Cheat Sheet" **Design:** 4-column table with checkmarks.  

| Tool        | Global Rules | Project Rules | Location               | Syntax     | Notes                                        |
|-------------|--------------|---------------|------------------------|------------|----------------------------------------------|
| Cursor      | ✅           | ✅            | `/.cursor/rules`       | MDC        | Supports `appliesTo`, `priority`             |
| Windsurf    | ✅           | ✅            | `/.windsurf/rules`     | Markdown   | Straightforward sections                      |
| Warp        | ✅           | ⚠️ (via workaround) | `.warp-rules/` (custom) | Plain text | Reads folder if present                       |
| Gemini CLI  | ❌           | ✅            | `GEMINI.md`            | Markdown   | Project-root only                             |


---

## Slide 13 — Writing Effective Rules

**Title:** "Rules that actually work" **Design:** Do/Don’t checklist with green ticks and faint red crosses.  
**Content:**  
**Do:** one intent per rule; be specific; define scope (`appliesTo`); give examples; prefer constraints over philosophy.  
**Don’t:** write essays; bundle 5 policies in one file; use vague verbs ("improve"); hide contradictions.  
**Speaker Notes:** Rules are tests for behavior—make them assertive and testable.

---

## Slide 14 — Meta-Rules (Rules About Rules)

**Title:** "Self-healing assistants" **Design:** Feedback loop diagram (Error → Rule → Commit → Better Output).  
**Content:**

- After an error, **command the tool to write a new rule** preventing the same issue.
    
- Keep rules in `rules/` directory; PR review; link to incident/PR.
    
- Add a **template** for new rules.  
    **Template Snippet:**
    

```
---
name: <short-id>
context: <bug/incident link>
appliesTo: ["**/*"]
priority: 70
---
# Policy
- <assertive guidance>
# Examples
- Bad: …
- Good: …
```

**Speaker Notes:** This turns mistakes into institutional memory.

---

## Slide 15 — Governance & Maintenance

**Title:** "Keep rules clean" **Design:** Kanban lanes: Propose → Review → Adopt → Retire.  
**Content:**

- Ownership: CODEOWNERS on `rules/`
    
- Review cadence: monthly sweep for dead/contradictory rules
    
- Versioning: semver rule pack; changelog
    
- Security: no secrets; avoid hard-coding internal URLs  
    **Speaker Notes:** Treat rules like code.
    

---

## Slide 16 — Live Demo Plan

**Title:** "Demo: add a rule, change behavior" **Design:** 3-step storyboard.  
**Content:**

1. Show failing behavior (e.g., tool writes API calls without retries).
    
2. Add project rule: "All external calls use exponential backoff (jitter)."
    
3. Re-run the same prompt; observe retry helper + tests generated.  
    **Speaker Notes:** Keep demo local and deterministic; have a prepared repo.
    

---

## Slide 17 — Before/After: Concrete Examples

**Title:** "Reality check" **Design:** Code diff screenshot mock.  
**Example A (TypeScript):**

- **Rule:** Require zod validation for API responses.
    
- **Before:** direct `fetch` + unchecked JSON.
    
- **After:** `z.object({...})` schema + `safeParse` + typed result.  
    **Example B (Python):**
    
- **Rule:** Use `async` http client and circuit breaker.
    
- **Before:** `requests.get()` in handler.
    
- **After:** `httpx.AsyncClient` + `tenacity` retry wrapper.  
    **Speaker Notes:** Show how small, specific rules drive big quality gains.
    

---

## Slide 18 — Pitfalls & Gotchas

**Title:** "Sharp edges" **Design:** Danger sign list.  
**Content:**

- Conflicting rules → nondeterminism; resolve by priority / consolidation.
    
- Overscoped rules that smother creativity.
    
- Hidden global rules causing surprise in repos.
    
- Tool updates that change rule parsing.  
    **Speaker Notes:** Keep a `rules/README.md` explaining precedence and scope.
    

---

## Slide 19 — Quick Start for Your Team

**Title:** "Adopt in < 1 hour" **Design:** Checklist with checkboxes you tick during talk.  
**Content:**

- Create `rules/` dir in repo
    
- Add 3 starter rules: tests-first, commit-hygiene, api-retries
    
- Add meta-rule: "After any bug, add a rule and link the PR"
    
- Set global defaults in your editor/CLI  
    **Speaker Notes:** Hand them the starter pack.
    

---

## Slide 20 — Q&A

**Title:** "Ask me anything (or add a rule for it)"  
**Design:** Minimal; large type; emoji lighten the mood.  
**Content:** Links to internal wiki and template repo.  
**Speaker Notes:** Invite suggestions for shared rule packs.

---

## Timing Plan (Run of Show)

- 0:00–0:03 — Hook & agenda
    
- 0:03–0:10 — Why + mental model
    
- 0:10–0:28 — Tool-by-tool walkthrough
    
- 0:28–0:40 — Demo + before/after
    
- 0:40–0:50 — Patterns, meta-rules, governance
    
- 0:50–0:60 — Q&A + next steps
    

---

## Appendix — Copy/Paste Starters

**Cursor MDC — tests-first.mdc**

```
---
name: tests-first
appliesTo: ["**/*.ts", "**/*.tsx"]
priority: 80
---
# Tests first
- For any new or modified module, scaffold Vitest tests before writing implementation.
- Use AAA (Arrange, Act, Assert). Include edge-case tests.
```

**Windsurf — commit-hygiene.md**

```
# Commit hygiene
- Use conventional commits: feat, fix, chore, docs, refactor, test, perf, build, ci.
- Subject max 72 chars; imperative mood; include scope when relevant (e.g., `feat(api): ...`).
```

**Warp — .warp-rules/readme.txt**

```
If the current directory contains `.warp-rules/`, read all `*.txt` files in that folder and follow them when generating commands and explanations.
Prioritize safety: always show a dry-run or preview for destructive commands.
```

**Gemini CLI — GEMINI.md**

```
# Project AI Guidelines
- Python 3.11, `ruff` for lint, `mypy` for type checks.
- For HTTP: use `httpx.AsyncClient` with retry + jitter.
- Never output secrets; point to `.env` + secret manager.
```

**Meta-Rule Prompt (any tool)**

```
When you make a mistake or I correct you in review, draft a new project rule that would have prevented it. Propose: name, scope, policy, and example before/after diff. Append it to the repo’s rules folder.
```

---

## Speaker Hand Notes (condensed)

- Keep rules short, testable, and scoped.
    
- Demonstrate with the _same_ prompt before/after adding a rule.
    
- Encourage PR review of rules; treat them like code.
    
- Use meta-rules to grow a living knowledge base.
    
- Start with 3 rules today; iterate after incidents.