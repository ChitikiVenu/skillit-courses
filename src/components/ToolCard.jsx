function initialsFor(name) {
  return name
    .replace('&', '')
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function ToolCard({ tool }) {
  return (
    <div className="tool-card">
      <div className="tool-logo" role="img" aria-label={`LOGO: ${tool.name}`} title={`[LOGO: ${tool.name}]`}>
        {initialsFor(tool.name)}
      </div>
      <div>
        <h4>{tool.name}</h4>
        <p>{tool.desc}</p>
      </div>
    </div>
  );
}
