# QA Automation
The purpose of this module is to use for E2E automation test for personal.

Current testing type:
- Functional
- Visual Test

## Installation

Clone this project via ssh:

```bash
  git clone git@github.com:Panha-Kreng/e-invoice-experiment.git
```

Install dependencies using npm:

```bash
  cd e-invoice-experiment
  npm install
```

## Running Tests

To run tests, run the following command:

For CLI on chrome:

```bash
  npm run cy:run:chrome
```
For headless ui:
```bash
  npm run test:e2e
```

## Reporting

#### Allure Reports

Generate and open reports, run the following command:
```bash
npm run report:open
```
#### Visual Reports
Generate and open reports, run the following command

```bash
npm run report:visual:generate
```
then

```bash
npm run report:visual:start
```


## Authors

- [@Panha Kreng](https://github.com/Panha-Kreng)
