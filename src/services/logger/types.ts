type LogPrimitive = string | number | boolean | null | undefined;

export type LogContext = Record<string, LogPrimitive | readonly LogPrimitive[]>;

export type BreadcrumbType = "error" | "log" | "manual" | "navigation" | "process" | "request" | "state" | "user";
