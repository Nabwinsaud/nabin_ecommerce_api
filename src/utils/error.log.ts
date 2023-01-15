import chalk from "chalk";
const log = console.log;
export const debugMessage = {
  error: (error: string) => log(chalk.red(error)),
  warning: (warning: string) => log(chalk.yellow(warning)),
  success: (success: string) => log(chalk.green(success)),
};
