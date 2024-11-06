import {
  AgeCriteria,
  AnnouncementNews,
  OnlineResult,
  PaymentPortal,
} from "@/sections";

const Announcements = () => {
  return (
    <div>
      <AgeCriteria />
      <PaymentPortal />
      <AnnouncementNews />
      <OnlineResult />
    </div>
  );
};

export default Announcements;
