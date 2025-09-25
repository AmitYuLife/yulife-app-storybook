export type IModalQueueItem = {
  id: string;
  modalId: string;
  priority: number;
  props: Record<string, any>;
};

export type IModalStore = {
  queue: IModalQueueItem[];
};

export type RemoveModalFromQueuePayload = { id: string };
