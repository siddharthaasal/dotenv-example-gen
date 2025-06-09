import { Command } from "commander";
import { generateEnvExample } from "../src";

const program = new Command();


program
    .name('dotenv-example-gen')
    .description('Generate .env.example files from .env')
    .option('-f, --files<files...>', 'Specify .env files to parse', ['.env'])
    .option('-c, --comments', 'Include comments in .env.example', false)
    .option('-v, --values', 'Include values in .env.example', false)
    .parse(process.argv);

const options = program.opts();

generateEnvExample({
    files: options.files,
    includeComments: options.comments,
    includeValues: options.values,
}).catch((e: Error) => {
    console.error("Error:", e.message);
    process.exit(1);
})