This is a simple [Bootstrap](http://getbootstrap.com) theme for
[Pelican](http://blog.getpelican.com/). It's built for my
[Personal Site](http://crowdersoup.com).

To use it you must first have [NodeJS](https://nodejs.org/en/) installed, which
comes with `npm`, a package management tool. I'm using it to install `gulp`, a
task runner, and Bootstrap. `gulp` will then move Bootstrap from where `npm` put
it to where Pelican expects it to be.

After cloning this repo, run `npm` and `gulp` like this:

```bash
npm install # Installs packages
gulp # Runs default gulp task
```