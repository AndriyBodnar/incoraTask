import chalk from "chalk";
const error = chalk.bold.bgRed;
export default class User {
    subscriptions;
    subscriptionsList = [];
    constructor(subscriptions = []) {
        this.subscriptions = subscriptions;
    }
    get subs() {
        return this.subscriptions;
    }
    subscribe(streamingService) {
        let nameService = streamingService.streamingService.name;
        if (!this.subscriptionsList.includes(nameService)) {
            this.subscriptionsList.push(nameService);
            this.subscriptions.push(streamingService);
            return streamingService;
        }
        else {
            return error(`Already subscribed: ${nameService}`);
        }
    }
}
