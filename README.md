# RagnaIdle Hub

English | [Português brasileiro](README.pt-BR.md)

An unofficial desktop application for managing up to four RagnaIdle accounts in a single interface.

Built with Electron, RagnaIdle Hub features isolated persistent sessions, flexible game layouts, and a black-and-yellow interface.

> Work in progress. Features listed in the roadmap are not yet available.

## Goal

Provide a Windows installer that allows players to install and use RagnaIdle Hub without setting up a development environment or running terminal commands.

The intended user experience is:

1. Download the installer.
2. Install the application.
3. Open RagnaIdle Hub.
4. Sign in to your accounts and play.

## Current Features

The initial implementation includes:

- Four isolated, persistent browsing sessions.
- Three game layouts:
  - Single: display one account at a time.
  - Grid: display four accounts in a 2 × 2 arrangement.
  - Columns: display four accounts side by side.
- Account selection, individual page reload, and single-account expansion.
- Manually assigned account names.
- Locally saved account names and layout preferences.
- A dashboard showing page loading status.
- A test notification button.
- Navigation sections prepared for future integrations.
- Build configuration for a Windows installer.

> “Page loaded” only indicates that a page has finished loading. It does not confirm that an account is signed in or that its characters are active.

The installer build configuration is included in the project. This does not mean that a compiled, tested release is already available for download.

## Navigation

| Section | Purpose | Current status |
| --- | --- | --- |
| Dashboard | Overview of accounts and page loading status. | Initial implementation. |
| Game | Access to the four sessions and layout controls. | Initial implementation. |
| Automations | Future automation settings and routines. | Placeholder only. |
| Streams | Future partner livestream and chat integrations. | Placeholder only. |
| Voting | Future TopIdle and Top Ragnarok voting availability tracking. | Placeholder only. |
| Settings | Account names, layout preferences, and notification settings. | Initial implementation; changes planned. |

The current application interface is in Portuguese. English documentation does not imply that an English interface is available.

## Roadmap

### Distribution

- [ ] Build and test the Windows installer.
- [ ] Validate installation on a computer without a development environment.
- [ ] Publish the installer for download.
- [ ] Document the installation and update process.

### User Interface

- [ ] Reduce the height of the top navigation bar.
- [ ] Maximize the space available for the game.
- [ ] Remove appearance settings.
- [ ] Keep black and yellow as the fixed visual identity.

### Account Information

- [ ] Read account names automatically from the game interface.
- [ ] Display detected account names in the account bar and dashboard.
- [ ] Distinguish page loading status from account authentication status.

### Application Updates

- [ ] Define the release publishing workflow.
- [ ] Add a “Check for updates” button.
- [ ] Display the installed version and available updates.
- [ ] Implement the update download and installation flow.
- [ ] Show progress, completion, and error messages.

### Future Integrations

- [ ] Read character names and levels.
- [ ] Notify users when a character reaches the maximum level.
- [ ] Implement partner livestream and chat integrations.
- [ ] Implement TopIdle and Top Ragnarok voting availability tracking.
- [ ] Define and implement routines for the Automations section.

Roadmap items describe planned work, not currently available functionality.

## Installation for Players

The project is intended to be distributed through a Windows installer.

A tested installer has not yet been confirmed as available in this documentation. Until a release is published, the instructions below are intended for developers building or running the application locally.

## Development

### Technology Stack

- Electron
- JavaScript
- HTML and CSS
- Node.js and npm
- electron-builder
- NSIS for the Windows installer

### Requirements

- Node.js LTS with npm.
- Git.
- Windows for the documented installer build workflow.

### Clone the Repository

```bash
git clone [https://github.com/sxlvadev/RagnaIdleHub.git](https://github.com/sxlvadev/RagnaIdleHub.git)
cd RagnaIdleHub
```

### Install Dependencies

```bash
npm install
```

### Start the Application

```bash
npm start
```

### PowerShell Alternative

If PowerShell blocks the `npm.ps1` script, use the Windows command wrapper:

```powershell
npm.cmd install
npm.cmd start
```

## Building the Windows Installer

On Windows, after installing the project dependencies, run:

```bash
npm run dist
```

Alternatively, in PowerShell:

```powershell
npm.cmd run dist
```

The current configuration targets Windows x64 and writes build output to the `dist` directory.

For version `0.1.0`, the configured installer filename is:

```text
RagnaIdle-Hub-Setup-0.1.0.exe
```

The filename changes with the application version.

> Installer generation and installation must be tested before a build is presented as ready for general use. Code signing is not currently configured.

## Project Structure

```text
RagnaIdleHub/
├── main.js           # Electron main process
├── preload.js        # Bridge between the interface and native functions
├── index.html        # Application interface structure
├── styles.css        # Visual identity and layouts
├── renderer.js       # Interface behavior and navigation
├── package.json      # Dependencies, scripts, and build configuration
├── package-lock.json # Dependency lockfile
├── .gitignore        # Files excluded from version control
├── README.md         # English documentation
└── README.pt-BR.md    # Brazilian Portuguese documentation
```

The dependency lockfile is generated by npm and should be committed to the repository.

## Local Sessions and Preferences

Each account uses a separate persistent session partition:

```text
persist:conta1
persist:conta2
persist:conta3
persist:conta4
```

Interface preferences, including manually assigned account names and the selected layout, are saved locally.

Cloning the repository on another computer does not transfer account logins or local preferences.

Back up local data before changing the application identity or the location of its session data.

## Security and Privacy

Do not commit or publish:

- Passwords or authentication tokens.
- Cookies or browser session data.
- Environment files containing secrets.
- Private keys or signing certificates.
- Local account data.

The repository should contain application source code and configuration, not personal browsing sessions.

The following directories are excluded from version control:

```text
node_modules/
dist/
out/
release/
```

Review staged changes before every commit. Ignore rules do not automatically detect sensitive information inside source files.

## Current Limitations

- Account names are assigned manually.
- Character names and levels are not read from the game.
- Maximum-level detection and its notification trigger are not implemented.
- The notification button sends a test notification only.
- Streams, voting, and automations do not have functional integrations.
- In-app updates are not implemented.
- Google authentication and external window flows require further validation.
- Keeping game views created does not guarantee an uninterrupted connection or continuous background execution.
- Installation and behavior on other computers still require testing.

## Responsible Use

Use the application in accordance with the rules of RagnaIdle and any external services you access.

## Disclaimer

RagnaIdle Hub is an independent, unofficial project and is not affiliated with or endorsed by the creators or operators of RagnaIdle.

Third-party names, trademarks, and game content belong to their respective owners.