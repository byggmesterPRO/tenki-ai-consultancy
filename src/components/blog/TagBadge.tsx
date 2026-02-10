import React from "react";
import Link from "next/link";

interface TagBadgeProps {
  tag: { name: string; slug: string };
  linked?: boolean;
}

const TagBadge: React.FC<TagBadgeProps> = ({ tag, linked = false }) => {
  const className =
    "inline-block text-xs font-sans font-medium px-3 py-1 rounded-full bg-stone-100 text-tenki-muted hover:bg-tenki-accent/10 hover:text-tenki-accent transition-colors";

  if (linked) {
    return (
      <Link href={`/blog?tag=${tag.slug}`} className={className}>
        {tag.name}
      </Link>
    );
  }

  return <span className={className}>{tag.name}</span>;
};

export default TagBadge;
