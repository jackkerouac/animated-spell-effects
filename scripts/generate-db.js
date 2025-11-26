
import set from 'lodash/set.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SEQUENCER_DB_PATH = path.join(__dirname, 'sequencer-db.js');
const SPELL_EFFECTS_DIR = path.join(__dirname, '..', 'spell-effects'); // Assuming 'spell-effects' is sibling to 'scripts'

const SHAPES = ["CIRCLE", "SQUARE", "RAY", "CONE", "RECTANGLE"];

function generateDatabase(PATH) {
    let db = {};
    const categories = fs.readdirSync(SPELL_EFFECTS_DIR, { withFileTypes: true })
                         .filter(dirent => dirent.isDirectory())
                         .map(dirent => dirent.name);

    for (const category of categories) {
        const categoryPath = path.join(SPELL_EFFECTS_DIR, category);

        // Grab all webm files
        let files = fs.readdirSync(categoryPath)
                        .filter(file => file.endsWith('.webm'));

        files = files.map(file => {
            const fileNameWithoutExt = file.replace(/\.webm$/, '');
            let parts = fileNameWithoutExt.split('_');
            if (parts[0] === category) parts.shift();
            parts = parts.map(part => part.toLowerCase())
            const filePath = `${category}.${parts.join('.')}`;
            db = set(db, filePath, PATH + category + '/' + file);
        });
    }

    return db;
}


function updateSequencerDb() {
    const MODULE_ID = "animated-spell-effects"
    const PATH = `modules/${MODULE_ID}/spell-effects/`

    // Generate Current Database
    const generatedDb = generateDatabase(PATH);
    const dbString = JSON.stringify(generatedDb, null, 4);

    const newContent = `Hooks.once('sequencer.ready', () => {
        const DATABASE = ${dbString};
        Sequencer.Database.registerEntries('${MODULE_ID}', DATABASE);
});`

    fs.writeFileSync(SEQUENCER_DB_PATH, newContent, 'utf8');
}

updateSequencerDb();
