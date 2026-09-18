/** Convert [[term|definition]] markers into clickable term buttons. */
export function renderTerms(html: string): string {
  return html.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_m, term, def) => {
    const t = escapeAttr(String(term).trim());
    const d = escapeAttr(String(def).trim());
    const label = escapeHtml(String(term).trim());
    return `<button type="button" class="term" data-term="${t}" data-def="${d}">${label}</button>`;
  });
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeAttr(s: string): string {
  return escapeHtml(s).replace(/"/g, '&quot;');
}
