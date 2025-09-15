# AI Prompt Gallery

A modern, responsive web application for discovering and sharing AI prompts. Easily browse through different categories of prompts and copy them to your clipboard with a single click.

## Features

- 🎨 Modern, clean UI with responsive design
- 🔍 Search functionality to find specific prompts
- 📋 One-click copy to clipboard
- 🏷️ Categorized prompts for easy navigation
- 🌓 Dark mode ready

## Getting Started

### Prerequisites

- A modern web browser
- (Optional) GitHub account for deployment

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/prompt-gallery.git
   cd prompt-gallery
   ```

2. Open `index.html` in your preferred web browser

## Deployment

This project is designed to be easily deployed to GitHub Pages:

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to the repository settings
4. Navigate to "Pages" in the left sidebar
5. Under "Source", select the `main` or `master` branch and click "Save"
6. Your site will be published at `https://<username>.github.io/<repository-name>/`

## Customization

### Adding New Prompts

To add new prompts, edit the `prompts` array in `script.js`. Each prompt should be an object with the following structure:

```javascript
{
    id: 1,
    title: "Prompt Title",
    prompt: "The actual prompt text goes here...",
    category: "category-name" // e.g., "coding", "creative", "business", "productivity"
}
```

### Styling

- Main styles are in `styles.css`
- Uses Bootstrap 5 for responsive layout and components
- Custom CSS variables for easy theming

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6+)
- [Bootstrap 5](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
