import { missionItems } from "@/data";
import { ICONS } from "@/utils/icons";

const AdmissionMission = ({ t }: { t: any }) => {
  return (
    <div className="lg:min-h-screen padding lg:px-64 xl:px-80 2xl:px-96 bg-bg-primary flex flex-col gap-12 justify-center">
      {/* Title */}
      <div>
        <h3 className="subtitle text-jaris-gold font-semibold">
          {t(`mission.subtitle`)}
        </h3>
        <h2 className="heading-md text-jaris-blue font-semibold">
          {t(`mission.title`)}
        </h2>
      </div>

      {/* Mission Items */}
      <ul className="space-y-4 text-jaris-black">
        {missionItems.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 text-jaris-gold">
              {ICONS.check_circle}
            </div>
            <span className="subtitle">{t(`mission.${item.item}`)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdmissionMission;
