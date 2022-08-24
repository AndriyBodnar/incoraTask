import chalk from "chalk";
import Subscription from "./Subscription";

const error = chalk.bold.bgRed;

export default class User {
  public subscriptionsList: string[] = [];
  constructor(public subscriptions: any[] = []) {}
  get subs() {
    return this.subscriptions;
  }

  subscribe(streamingService: Subscription) {
    let nameService = streamingService.streamingService.name;

    if (!this.subscriptionsList.includes(nameService)) {
      this.subscriptionsList.push(nameService);
      this.subscriptions.push(streamingService);
      return streamingService;
    } else {
      return error(`Already subscribed: ${nameService}`);
    }
  }
}
