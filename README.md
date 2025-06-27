# BULK-RENAME

**A Simple Node.js Application to Rename Files in Bulk**

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Used NPM Modules & Why](#used-npm-modules--why)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

**BULK-RENAME** is a simple command-line application built with Node.js that allows users to rename multiple files at once in a chosen directory. The app is designed to be efficient and easy to use, saving time when you need to update file names in bulk for organization or workflow needs.

---

## Features

- Rename multiple files in a directory with a single command
- Customizable renaming patterns (add prefix, suffix, replace text, numbering, etc.)
- Preview changes before applying them (if implemented)
- Handles errors and naming conflicts gracefully
- Pure JavaScript—no HTML or CSS used

---

## Tech Stack

- **Node.js** (JavaScript only)
- **CLI-based application** (no graphical or web interface)

---

## Used NPM Modules & Why

| Module      | Why We Used It                                                |
|-------------|--------------------------------------------------------------|
| `fs`        | Node.js built-in module for interacting with the file system. |
| `path`      | Node.js built-in module for secure cross-platform file path handling. |
| `readline`  | Node.js built-in module for reading input from the command line. |
| *(Optional)* `fs-extra` | For more robust file system operations (if used)   |
| *(Optional)* `yargs` or `commander` | For argument parsing and improved CLI (if used) |

**Note:** Only core Node.js modules are required unless your implementation uses extra features.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later recommended)
- [npm](https://www.npmjs.com/) (for installing dependencies, if any)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amansatya/BULK-RENAME.git
   cd BULK-RENAME
   ```

2. **Install dependencies**  
   If you have only used built-in modules, skip this step.  
   If you use optional modules:
   ```bash
   npm install
   ```

### Running the Application

1. **Start the application**
   ```bash
   node app.js
   ```
   Or, if you have a different entry point:
   ```bash
   node [your-main-file].js
   ```

2. **Follow the CLI prompts** to specify the directory and renaming pattern.

---

## Usage

- Launch the app with `node app.js`
- Enter the directory path when prompted
- Specify the renaming pattern (prefix, suffix, replace, etc.)
- Confirm to proceed with renaming

**Example:**
```bash
$ node index.js
Enter the directory path: ./myfiles
Choose renaming option (prefix/suffix/replace/numbering): prefix
Enter the prefix to add: vacation_
Renaming...
Done! 12 files updated.
```

---

## Folder Structure

```
BULK-RENAME/
├── index.js           # Main application file (entry point)
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation
```

---

## Contributing

Contributions, issues, and feature requests are welcome!

- Fork the repo
- Create your feature branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

- **Author:** [amansatya](https://github.com/amansatya)
- **Repository:** [github.com/amansatya/BULK-RENAME](https://github.com/amansatya/BULK-RENAME)

---

**Efficiently rename your files with BULK-RENAME!**