import fs from "fs";
import path from "path";
import { BlogPost } from "../types";


export function getProjectMarkdown(id: string): string | null {
  try {
    const filePath = path.join(process.cwd(), "app/content/projects", `${id}.md`);
    
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error(`Could not find markdown file for project ID: ${id}`);
    return null;
  }
}


export function CleanSummary(post:BlogPost) {

  const slicedSummary = post.summary || post.content || "";
  const displaySummary = slicedSummary.length > 120 
    ? `${slicedSummary.slice(0, 120)}...` 
    : `${slicedSummary}...`;

  return displaySummary
}