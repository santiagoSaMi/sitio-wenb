# SantiagoOS — Windows 98 Portfolio

A personal portfolio website inspired by the classic Windows 98 desktop environment. The project combines a retro operating-system interface with a modern React application to showcase personal information, experience, skills, projects, and contact links.

## Preview

The portfolio recreates the visual language of Windows 98 through:

- Desktop-style layout
- Pixel-inspired icons
- Start menu
- Classic window styling
- Retro typography and colors
- Interactive desktop shortcuts
- Footer credit to 98.css

## Features

- **About Me** — Personal introduction and background.
- **Experience** — Academic and professional experience.
- **Skills** — Programming languages, tools, and technologies.
- **Projects** — Selected software and development projects.
- **Contact** — Contact and social media information.
- **GitHub shortcut** — Direct access to the GitHub profile.
- **Windows 98-inspired interface** — Desktop, icons, windows, and Start menu.
- **Responsive layout** — Adapted for desktop and smaller screens.

## Technologies

- [React](https://react.dev/) — User interface library.
- [Vite](https://vite.dev/) — Development server and build tool.
- [98.css](https://jdan.github.io/98.css/) — Windows 98-inspired CSS framework.
- JavaScript
- HTML5
- CSS3

## Project Structure

```text
.
├── public/              # Static assets
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   └── main.jsx         # React entry point
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── package-lock.json    # Dependency lockfile
├── vite.config.js       # Vite configuration
├── .gitignore           # Git exclusions
└── README.md            # Project documentation
```

> The exact structure may vary depending on the current implementation.

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) — LTS version recommended.
- npm — Included with Node.js.

Check your installed versions:

```bash
node --version
npm --version
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   ```

2. Navigate to the project directory:

   ```bash
   cd YOUR_REPOSITORY
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Run the Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production files will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project can be deployed using [Vercel](https://vercel.com/).

### Deploy with GitHub

1. Push the project to a GitHub repository.
2. Log in to Vercel using GitHub.
3. Select **Add New → Project**.
4. Import the repository.
5. Configure the project if necessary.

For a standard Vite project, use:

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

6. Click **Deploy**.

After deployment, Vercel will provide a public URL for the portfolio.

## Git Workflow

After making changes locally:

```bash
git add .
git commit -m "Update portfolio"
git push
```

If the repository is connected to Vercel, pushing changes to the configured branch will trigger a new deployment automatically.

## Customization

To personalize the portfolio, you can modify:

- **Personal information:** Update the content in `src/App.jsx`.
- **Colors and layout:** Modify `src/App.css`.
- **Icons:** Adjust the icon components or their associated styles.
- **Projects:** Add or edit project entries and links.
- **Social links:** Replace the existing URLs with your own profiles.
- **Static assets:** Add images and other files to `public/` or the appropriate assets directory.

## Credits

This project uses [98.css](https://jdan.github.io/98.css/), a CSS framework that recreates the appearance of Windows 98.

- **98.css:** [https://jdan.github.io/98.css/](https://jdan.github.io/98.css/)
- **Developer:** [jdan](https://github.com/jdan)

## License

This project is intended as a personal portfolio. The source code may be reused or adapted for educational and personal purposes.

Third-party libraries and assets remain subject to their respective licenses.