# Contributing to AI Prompt Gallery

Thanks for your interest in contributing! This project is a simple static site (HTML/CSS/JS) designed to be easily edited and deployed with GitHub Pages.

## Ways to contribute
- **Report bugs**: Open an issue with clear steps to reproduce.
- **Suggest enhancements**: Propose UI/UX or feature ideas in issues.
- **Add prompts**: Contribute high‑quality prompts to the gallery.
- **Improve docs**: Fix typos, clarify instructions, or add examples.
## Project setup
- No build step required.
- Run locally by opening `index.html` in a modern browser.
- For testing mobile/responsive behavior, use your browser’s device toolbar.

## Project structure
 - `index.html` – markup and page layout (Bootstrap 5 + Font Awesome)
 - `styles.css` – custom styles and CSS variables
 - `script.js` – all interactivity (search, filters, copy to clipboard)
 - `README.md` – overview and usage
 - `CNAME`/`sitemap.xml`/`robots.txt` – deployment/SEO (if present)

## Coding style
  - **JavaScript** (ES6+)
  - Use `const`/`let`; avoid `var`.
  - Prefer double quotes for strings in JS; use template literals for HTML snippets and multi‑line strings.
  - End statements with semicolons.
  - Indentation: 4 spaces.
  - Keep functions small and focused; name variables/functions in `camelCase`.
  - **HTML/CSS**
    - Leverage Bootstrap utilities/components; keep custom styles in `styles.css`.
    - Prefer CSS variables defined in `:root` for theme consistency.
    - Avoid inline styles unless necessary.
    - Ensure semantic HTML and basic accessibility (labels, alt text, roles when appropriate).

## Adding new prompts
Prompts live in the `prompts` array in `script.js`.

Each prompt should follow this shape:
```js
{
    id: <number>,        // unique, increment from the last id
    title: "Prompt Title",
    prompt: "The actual prompt text...",
    category: "category-name" // e.g., "coding", "creative", "business", "productivity"
}
```
Guidelines:
- Keep titles concise and descriptive.
- Ensure the `prompt` is copy‑ready and safe for all audiences.
- Choose an existing `category` when possible; propose new categories in an issue.
- Test: search, category filter, and “Copy Prompt” should all work for your new entry.

## Branching and pull requests
1. Fork the repo (or create a feature branch if you have push access):
   - `feat/<short-description>` for features
   - `fix/<short-description>` for bug fixes
   - `docs/<short-description>` for documentation
2. Make focused changes with clear commit messages:
   - Conventional prefix recommended: `feat:`, `fix:`, `docs:`, `refactor:`, `style:`, `chore:`
3. Before opening a PR:
   - Verify the site renders correctly by opening `index.html`.
   - Manually test search, category filters, and copy‑to‑clipboard.
   - Check responsive layout at common breakpoints (sm/md/lg).
4. Open a PR that:
   - Links related issues (e.g., `Closes #123`).
   - Includes a brief summary, screenshots/GIF for UI changes, and testing notes.

## Accessibility and UX
- Maintain sufficient color contrast.
- Provide meaningful text for icons where needed (ARIA labels or visibly hidden text).
- Ensure interactive controls are keyboard accessible and have clear focus states.

## Performance
- Keep assets small; avoid large images or heavy libraries.
- Prefer vanilla JS and Bootstrap utilities already in use.
- Avoid synchronous/blocking operations in event handlers.

## Security
- Escape user‑visible content where appropriate (see `escapeHtml()` in `script.js`).
- Do not include secrets or API keys.

## PR checklist
- [ ] Code follows style guidelines (formatting, naming, semicolons, 4‑space indent).
- [ ] No new dependencies or build steps added without discussion.
- [ ] UI tested across desktop and mobile viewports.
- [ ] Search, category filters, and copy‑to‑clipboard work.
- [ ] For prompts: valid `id`, concise `title`, appropriate `category`.
- [ ] Documentation updated (`README.md` or comments) if needed.

## License
By contributing, you agree that your contributions will be licensed under the MIT License as stated in `LICENSE` (or the project’s root license notice).
