import fs from "fs/promises";
import path from "path";

type EnvEntry = {
    key: string;
    value?: string;
    comment?: string;
}

export async function parseEnvFiles(files: string[]): Promise<EnvEntry[]> {
    const allEntries: EnvEntry[] = [];

    for (const file of files) {
        const filePath = path.resolve(process.cwd(), file);
        const content = await fs.readFile(filePath, "utf-8");
        const lines = content.split(/\r?\n/);
    }
}