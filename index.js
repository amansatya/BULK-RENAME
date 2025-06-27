const fs = require('fs');
const path = require('path');

const replacethis = "abc";
const replaceto = "SATYA";
const preview = false; // Set to true to preview without renaming

const dir = "./data"; // Current directory

fs.readdir(dir, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }
    files.forEach((filename) => {
        const oldPath = path.join(dir, filename);
        const newName = filename.replaceAll(replacethis, replaceto);
        const newPath = path.join(dir, newName);

        // Skip if no renaming is needed
        if (filename === newName)
            return;

        // Skip if it's a directory
        if (fs.statSync(oldPath).isDirectory())
            return;

        if (preview)
            console.log(`[PREVIEW] ${filename} -> ${newName}`);
        else {
            fs.rename(oldPath, newPath, (err) => {
                if (err)
                    console.error(`Error renaming ${filename}:`, err);
                else
                    console.log(`Renamed: ${filename} -> ${newName}`);
            });
        }
    });
});
