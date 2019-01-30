# Requirements

You need [Node.JS](https://nodejs.org) (9.x or higher) and [NPM](https://www.npmjs.com) (usually comes together).

[Download and install](https://nodejs.org/en/download/)

The latest version (v10.9.0) is recommended.

**Cogear.JS** runs on:
* Mac
* Linux
* Windows

You may also want to use awesome [VSCode](https://code.visualstudio.com) editor.

# Installation
To install **Cogear.JS** do next:
```bash
$ npm install cogear -g
# or
$ yarn global add cogear
```
Done. Congratulations! 

**Cogear.JS** is now available by CLI-command `cogear`.

Now you're ready to build your first site.

# Usage
Go to the directory where all your local sites are hosted.
```bash
$ cd ~/Sites
```
Create a new site via command:
```bash
$ cogear new awesome-static-site # where "site" is your site folder name
```

After that go to site dir:
```bash
cd ~/Sites/awesome-static-site
```
And start up **Cogear.JS** in prefered mode.
```bash
$ cogear # run in develompent mode with hot-reload – by default

$ cogear build # build a site

$ cogear production # build a site and run local server

$ cogear deploy # deploy site to the default server
```
# Options
You can find the option via the `--help` command.
```bash
$ cogear --help

  Usage: cogear [command] [options]

  Options:

    -v, --version                     output the version number
    -s, --source [string]             custom source directory.
    -o, --output [string]             custom output directory.
    -p, --port   [int]                port to serve site on.
    -h, --host   [string]             host to serve site on.
    -n, --no-open                     do not open browser window automatically after built.
    -w, --verbose                     verbose Webpack output.
    --help                            output usage information

  Commands:

                                      Development mode with hot-reload (default).
    production|prod                   Production mode: build and serve.
    build|b                           Build mode: just build.
    deploy|d <preset>                 Deploy mode: build (if not) and deploy.
    new|init [options] <site-name>    Generate new site.
    plugin|p [options] <plugin-name>  Generate new plugin.
    theme|t [options] <theme-name>    Generate new theme.

For more information visit:
https://cogearjs.org
```

For more info, visit official website:
[https://cogearjs.org](https://cogearjs.org)