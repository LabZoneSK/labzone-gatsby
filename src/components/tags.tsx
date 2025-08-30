import type { FC } from 'react'

type TagProps = { tags: string[] }

function Tags({ tags = [] }: TagProps) {
    return (
        <div className="flex gap-2 mb-2" role="list">
            {tags.map((tag, i) => (
                <span
                    key={`tag-${tag.toLowerCase().replace(/\s+/g, '-')}-${i}`}
                    className="text-sm py-1 px-2 bg-black text-white rounded-none"
                    role="listitem"
                >
                    {tag}
                </span>
            ))}
        </div>
    )
}

export default Tags
