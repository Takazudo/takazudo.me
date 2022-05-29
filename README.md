# takazudo.me

## dev & build

to develop

```
npm run dev
```

to build

```
npm run build
```

## package update notes

### mdx stuff

```
@mdx-js/mdx
@mdx-js/react
```

Updates these made dependency problem. so these are still 1.X.

### rehype, remark

```
rehype-slug
rehype-stringify
remark-attr
remark-breaks
remark-external-links
```

The latest versions of these packages are ES modules. Gatsby's config files don't support ES modules yet. so there can't be upgraded.

