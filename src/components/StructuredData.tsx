export function StructuredData({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data.filter(Boolean) : data;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  );
}
