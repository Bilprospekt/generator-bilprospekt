# generator-bilprospekt 

Yeoman generator for bilprospekt.
Feel free to extend, with pull requests or forks.

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-bilprospekt from npm, run:
(Note that the generator is not published to npm so you'll have to install from the folder)

**Note** This is a private package, and therefore not published in npm.
You'll need to clone the repo and then link it or install it globally.

```bash
npm install -g generator-bilprospekt
```

Finally, initiate the generator:

```bash
yo bilprospekt
```

### Commands to use

All commands creates files in current folder
```bash
yo bilprospekt #Creates a frontend package
yo bilprospekt:frontend-test #Creates a frontend-test
yo bilprospekt:backend-router #Creates a backend-router
yo bilprospekt:backend-test #Creates a backend test. Router or Model.
```

Look inside *generators* folder for more info.

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
