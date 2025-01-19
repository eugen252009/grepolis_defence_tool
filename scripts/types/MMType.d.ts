import { CollectionType } from "./CollectionType"
import { ModelsType } from "./ModelsType"

export interface MMType {
    status: {
        collection: CollectionType,
        models: ModelsType
    }
}
