
<!-- STORY -->
# [Insights Chrome](https://github.com/RedHatInsights/insights-chrome)

The "wrapper" around your application!

Insights Chrome provides:
- Standard header, footer, navigation
- Base CSS/style
- A JavaScript library for interacting with Insights Chrome

# Beta usage

You can include/use chrome in your development project by running the insights-proxy (https://github.com/RedHatInsights/insights-proxy) in front of your application and using the following HTML template.

```
<!doctype html>
<html>
  <head>
    <!-- your own HEAD tags -->
    <esi:include src="/insightsbeta/static/chrome/snippets/head.html" />
  </head>
  <body>
    <esi:include src="/insightsbeta/static/chrome/snippets/header.html" />
    <esi:include src="/insightsbeta/static/chrome/snippets/footer.html" />
    <!-- your own HTML -->
  </body>
</html>
```

# Running the build
There is numerous of task for building this application. You can run individual tasks or run them in batch to build the
entire app or to watch files.

#### Individual tasks
To run each task you have to first install dependencies `npm install` and then you are free to use any task as you wish.
If you want to watch file changes for each build just pass `-- -w` to specific task (this is not applicable to 
`npm run build:js:watch` because it's somewhat specific).
1) Building of styles
```bash
> npm run build:sass
```

2) Building of javascripts
```bash
> npm run build:js
```

3) Building of javascripts and watching files when they change
```bash
> npm run build:js:watch
```

4) Building of HTML partials
```bash
> npm run build:pug
```

5) Running tests
```bash
> npm run test
```

#### Specific tasks
1) Run build of whole application just once
```bash
> npm run build
```

2) Watching file changes and trigger build every time something changes
```bash
> npm run start
```