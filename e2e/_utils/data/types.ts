export interface IDatabaseItem {
    type: "mongo" | "postgres";
    modelName: string;
    data: Record<string, any>;
}
