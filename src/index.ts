import { parseEnvFiles } from "./envParser";
import { mergeEnvKeys } from "./keyMerger";
import { writeEnvExample } from "./fileWriter";

interface Options {
    files: string[],
    includeComments: boolean;
    includeValues: boolean;
}

export async function generateEnvExample(options: Options) {
    const envDataList = await Promise.all(options.files.map(parseEnvFiles));
    const mergedKeys = mergeEnvKeys(envDataList);
    await writeEnvExample(".env.example", mergeEnvKeys, options);
}