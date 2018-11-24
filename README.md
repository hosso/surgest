# Surgest

Deploy password protected websites using [Surge](https://surge.sh)

[![CircleCI](https://circleci.com/gh/hosso/surgest.svg?style=shield)](https://circleci.com/gh/hosso/surgest)

## Installation

```
yarn global add hosso/surgest
```

## Usage

```
Usage: surgest [options] <domain>

Deploy password protected websites using Surge

Options:
  -V, --version      output the version number
  -u, --user <name>  specify auth user (default: "guest")
  -r, --random       append a random suffix to the domain name
  -h, --help         output usage information
```

Example usage:

```
$ cd public
$ surgest awesome-website -u hosso

   Running as hosso@users.noreply.github.com (Professional)

        project: .
         domain: https://awesome-website.surge.sh
         upload: [=====] 100% eta: 0.0s (2 files, 127 bytes)
            CDN: [====================] 100%
             IP: 45.55.110.124
https://awesome-website.surge.sh [in clipboard]
user: hosso
pass: fuhocodiza
Deployment complete
```

## License

[MIT](LICENSE)
