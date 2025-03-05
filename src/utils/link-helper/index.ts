export function linkHelper(locale: string, link: string): string {
  if (link.startsWith("http")) {
    return link;
  }

  return `/${locale}${link}`;
}
