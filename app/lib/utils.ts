export function cn(className: string, ...strings: (string | undefined | null)[]): { combinedString: string; className: string } {
  const combinedString = strings.filter(Boolean).join(" ");
  return { combinedString, className };
}
