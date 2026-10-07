# Test repo G — Forecast desk

A page with HTML and a valid short history that needs a Node server and /api/forecast to show its forecast.

**Expected compatibility result: Reject · requires a backend.**

- Default-branch commits: **3**.
- Commit numbers below are **oldest first**, starting at 1.
- This is a synthetic Git Gallery fixture, not an organic production history.
- Expected outcomes below describe the application requirements, not a claim that Git Gallery integration tests have passed.

## Pages at the latest commit

`index.html`

## Test cases and expected results

### Unsupported dependency identified

**Target page:** `index.html`  
**Commit numbers:** 3.

Reject before capture because the website requires a Node backend/API outside supported self-contained static HTML/CSS/JavaScript. The reason must not be missing HTML or excessive commits.

### Static hosting cannot supply the API

**Target page:** `index.html`  
**Commit numbers:** 3.

Serving only the static files displays: Forecast unavailable. Start the required Node backend. This explorer shows that real unavailable state; it does not simulate a working API.

### Backend control

**Target page:** `index.html`  
**Commit numbers:** 3.

Locally, npm start runs the real Node backend at http://127.0.0.1:8080. The page then shows North Harbor: 18°C · Clear skies. No package installation is required.

## Important fixture rules

- The three commits cover the API-backed page, condition text, and documentation.
- The combined static explorer does not run the backend.
- A screenshot of the unavailable message does not mean Git Gallery should accept this repository.

## Run the backend control

Run `npm start` in this directory, then open http://127.0.0.1:8080. Node 18 or newer is required, but there are no packages to install. The Node server is the intentionally unsupported dependency.

## Preserve the test

Do not append setup or documentation commits casually: the default-branch count is part of this test. Count with `git rev-list --count main`. List the history oldest first with `git log --reverse --format="%h %s" main`.

The README contains test guidance and expected answers. AI evaluation using this repo is therefore not a blind benchmark; judge visual claims against screenshots and website changes, not this document alone.
