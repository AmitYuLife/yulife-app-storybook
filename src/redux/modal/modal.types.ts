export type IModalQueueItem = {
  id: string;
  priority?: number; // leave it for now, might be removed later
  props: Record<string, any>;
};

export type IModalStore = {
  queue: IModalQueueItem[];
};

export type RemoveModalFromQueuePayload = { id: string };
