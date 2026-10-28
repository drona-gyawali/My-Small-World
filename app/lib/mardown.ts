import { BlogPost } from '../types';

export function CleanSummary(post: BlogPost) {
  const slicedSummary = post.summary || post.content || '';
  const displaySummary =
    slicedSummary.length > 120
      ? `${slicedSummary.slice(0, 120)}...`
      : `${slicedSummary}...`;

  return displaySummary;
}
