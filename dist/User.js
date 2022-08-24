import chalk from "chalk";
const error = chalk.bold.bgRed;
export default class User {
    constructor(subscriptions = []) {
        this.subscriptions = subscriptions;
        this.subscriptionsList = [];
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
