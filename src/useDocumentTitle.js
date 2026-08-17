import { useEffect } from "preact/hooks";

export const defaultTitle =
  "Slow Running Club Karlsruhe | Entspannt laufen in der Gruppe";

/** Setzt den Seitentitel und stellt beim Unmount den Standardtitel wieder her. */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `${title} | Slow Running Club Karlsruhe`;
    return () => {
      document.title = defaultTitle;
    };
  }, [title]);
}
