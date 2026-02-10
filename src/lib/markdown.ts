import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

// Configure marked for safe rendering
marked.setOptions({
  gfm: true,
  breaks: true,
});

export async function renderMarkdown(content: string): Promise<string> {
  const html = await marked(content);
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "h1", "h2", "h3", "h4", "h5", "h6",
      "p", "br", "hr",
      "ul", "ol", "li",
      "blockquote", "pre", "code",
      "a", "strong", "em", "del", "s",
      "img", "figure", "figcaption",
      "table", "thead", "tbody", "tr", "th", "td",
      "div", "span",
    ],
    ALLOWED_ATTR: ["href", "src", "alt", "title", "class", "id", "target", "rel"],
    ALLOW_DATA_ATTR: false,
  });
}
