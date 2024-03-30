enum TimelineStatus {
  Active = "active",
  Completed = "completed",
  Pending = "pending",
}

type TimelineItem = {
  status: TimelineStatus;
  title: string;
};
