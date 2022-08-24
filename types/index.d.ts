export {};
declare global {
  interface Array<T> {
    getRecommendation(length: number): any[] | Array<T>;
  }
  interface Array<T> {
    getMostViewed(sort: Map<string, number>): Array<T>;
  }
}
