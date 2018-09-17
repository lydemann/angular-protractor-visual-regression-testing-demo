import { browser } from 'protractor';

export class ExpectHelper {
    public static async expectOrRetry<T>(boolFunc: () => boolean, timeout: number = 5000) {
        return await browser.wait(() => {
            const exRes = boolFunc();
            return Promise.resolve(exRes);
        }, timeout);
    }
}
