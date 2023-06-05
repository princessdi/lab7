import { Engine } from "./Engine";

export abstract class InternalCombustionEngine extends Engine {
  abstract fuelType: string;
}
