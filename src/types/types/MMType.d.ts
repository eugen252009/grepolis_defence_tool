import type { CollectionType } from "./CollectionType.d.ts";
import type { ModelsType } from "./ModelsType.d.ts";
export interface MMType {
    status: {
        collection: CollectionType;
        models: ModelsType;
    };
}
