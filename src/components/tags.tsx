import React, { FC } from "react"
import { z } from "zod"

const tagSchema = z.object({
  tags: z.array(z.string()),
})

type TagProps = z.infer<typeof tagSchema>

const Tags: FC<TagProps> = ({ tags }) => {
  return (
    <div className="flex gap-2 mb-2">
      {tags?.map(tag => (
        <span key={`tag-${tag.split(' ').join('-')}`} className="text-sm py-1 px-2 bg-black text-white rounded-none">{tag}</span>
      ))}
    </div>
  )
}

export default Tags