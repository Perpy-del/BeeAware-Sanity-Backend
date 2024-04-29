export default {
  name: 'puberty',
  type: 'document',
  title: 'Puberty',
  fields: [
    {
      name: 'focus',
      type: 'string',
      title: 'Focus',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'keyfacts',
      type: 'array',
      title: 'Key Facts',
      of: [{type: 'string'}],
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      title: 'Main Video',
      name: 'mainVideo',
      type: 'file',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainScreenImage',
      title: 'Main Screen Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'scope',
      type: 'array',
      title: 'Scope',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },
    {
      name: 'conclusion',
      type: 'string',
      title: 'Conclusion',
    },
    {
      name: 'videoAuthor',
      type: 'string',
      title: 'Video Author',
    },
  ],
}
