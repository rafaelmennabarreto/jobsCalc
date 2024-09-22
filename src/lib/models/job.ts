import type { jobStatus } from "$lib/enums/status";

export interface Job {
  id: string;
  name: string;
  hourPerDay: number;
  totalHours: number;
  value: number;
  status: jobStatus;
}
