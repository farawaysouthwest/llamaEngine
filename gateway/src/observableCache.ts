import { QueryPlan, QueryPlanCache } from "@apollo/query-planner";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
import { Logger } from "winston";

export class ObservableCache implements QueryPlanCache {
  private wrappedCache: InMemoryLRUCache<QueryPlan> =
    new InMemoryLRUCache<QueryPlan>({
      maxSize: Math.pow(2, 20) * 30,
      sizeCalculation: this.approximateObjectSize,
    });

  constructor(private logger?: Logger) {}

  private approximateObjectSize(obj: QueryPlan): number {
    return Buffer.byteLength(JSON.stringify(obj), "utf8");
  }

  async get(key: string) {
    const value = await this.wrappedCache.get(key);
    if (value) {
      this.logger?.info({
        message: "Cache hit",
        node: value,
        size: this.approximateObjectSize(value),
      });
      this.logger?.info({ message: "Cache count", count: await this.count() });
    }
    return value;
  }

  async set(key: string, value: QueryPlan) {
    return this.wrappedCache.set(key, value);
  }

  async delete(key: string) {
    return this.wrappedCache.delete(key);
  }

  async count() {
    return this.wrappedCache.keys().length;
  }

  clear() {
    return this.wrappedCache.clear();
  }
}
