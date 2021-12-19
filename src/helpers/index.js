export function highlightPattern(text, pattern) {
  const splitText = text.split(pattern);

  if (splitText.length <= 1) {
    return text;
  }

  const matches = text.match(pattern);

  return splitText.reduce(
    (arr, element, index) =>
      matches[index]
        ? [
            ...arr,
            element,
            <span className="highlighted" key={index}>
              {matches[index]}
            </span>,
          ]
        : [...arr, element],
    []
  );
}
