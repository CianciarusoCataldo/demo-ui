# demo-ui

![GitHub](https://img.shields.io/github/license/CianciarusoCataldo/demo-ui?color=dark&label=%20license)
![npm](https://img.shields.io/npm/v/@cianciarusocataldo/demo-ui?label=%20npm%20package%20version)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/CianciarusoCataldo/demo-ui?label=Stable%20release)
![npm type definitions](https://img.shields.io/npm/types/@cianciarusocataldo/demo-ui)
![GitHub repo size](https://img.shields.io/github/repo-size/CianciarusoCataldo/demo-ui)
![npm bundle size](https://img.shields.io/bundlephobia/min/@cianciarusocataldo/demo-ui?color=brown)
![Lines of code](https://img.shields.io/tokei/lines/github/CianciarusoCataldo/demo-ui)
![bit](https://img.shields.io/bit/collection/total-components/cianciarusocataldo/demo-ui?label=Components%20hosted%20on%20Bit's%20registry)
![Maintenance](https://img.shields.io/maintenance/yes/2021)


A tiny UI library designed for build interactive demos for every react app.

## Summary
- [Why Demo-ui?](#why-demo-ui)
- [Installation](#installation)
- [See in action](#see-in-action)
- [Authors](#authors)
- [License](#license)

## Why Demo-ui?

**demo-ui** provide a flexible and responsive playground to test any component. It can be used to have a real-time preview while playing with the component's properties, without touching the code. 

### Use demo-ui with react-styleguidist

When developing React apps, expecially in teams, a common (and safer) approach is to test every component separately, into an isolated environment, before introducing it into the app, to prevent unexpected behaviours and undesired errors. This job is usually done by various utilities, like [react-styleguidist] or (https://github.com/styleguidist/react-styleguidist). When using a Styleguide, for example, for every component is usually provided a demo (or example) file (or multiple files). `demo-ui` can be used to stadardize the demos's design and to have them all wrapped into a dedicated and isolated playground, fully customizable. This brings some advantages:

- ***Less code, less time wasted***: wrapping a component with `demo-ui` is really quick and intuitive to do when writing demo files (for Styleguidist, `.md`), and gives to other devs the ability to experiment with the component, without the need to write additional static examples (or implements selectors, input fields and so on). `demo-ui` can do the job for you. As a side-effect, this can speed up the Styleguide rendering process (less DOM nodes).  

- ***Standard UI for every demo***: when working in team on a single project, every dev usually write demo files in a preferred way (implementing selectors, importing external components to give a realistic scenario, and so on). This usually make the global Styleguide's UI not homogeneous.

## Installation

The whole `demo-ui` library can be installed from official npm registry:
```
npm i @cianciarusocataldo/demo-ui
```

Installation's steps can be different, depends on which package manager is used.

It's possible to download every `demo-ui` component separately, with Bit package registry. Before next step, add the following entry to your `.npmrc` file, that must be located to the host project root (look at the official [Bit docs](https://docs.bit.dev/docs/installing-components) for details):

```
@bit:registry= https://node.bit.dev
```
 
Now Bit registry is accessible from `npm`:
 
- Box ```npm i @bit/cianciarusocataldo.demo-ui.box```

- Previewer `npm i @bit/cianciarusocataldo.demo-ui.previewer`

- Demo `npm i @bit/cianciarusocataldo.demo-ui.demo`

- Prop creators `npm i @bit/cianciarusocataldo.demo-ui.prop-creators`

- Logic `npm i @bit/cianciarusocataldo.demo-ui.logic`

- Types `npm i @bit/cianciarusocataldo.demo-ui.types`


`demo-ui` component collection can be found on https://bit.dev/cianciarusocataldo/demo-ui

## See in action
Wanna see how this library works in real time? A static version of the integrated playground can be found on https://cianciarusocataldo.github.io/demo-ui

## Authors

* **Cataldo Cianciaruso** - *Initial work* - [CianciarusoCataldo](https://github.com/CianciarusoCataldo)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
