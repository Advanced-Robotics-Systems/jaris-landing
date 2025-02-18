const ContactExperienceCard = ({
  index,
  icon,
  title,
  subtitle,
}: {
  index: number;
  icon: JSX.Element;
  title: string;
  subtitle: string[];
}) => {
  return (
    <div className="flex flex-col bg-bg-primary rounded-2xl w-full md:w-[45%] lg:w-[30%] h-40 md:h-56 p-4 md:p-6 lg:p-8">
      <div className="flex items-center justify-center text-xl w-9 h-9 rounded-full text-jaris-white bg-jaris-blue">
        {icon}
      </div>
      <div className="text-jaris-blue text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-3">
        {title}
      </div>
      {index != 6
        ? subtitle.map((item, index) => (
            <p
              className="text-jaris-blue text-[10px] sm:text-xs mt-2"
              key={index}
            >
              {item}
            </p>
          ))
        : subtitle.map((item, index) => (
            <p
              className="text-jaris-blue text-[10px] sm:text-xs mt-2"
              key={index}
            >
              {index == 0 && item}
              {index == 1 && (
                <>
                  <span>{item.split(":")[0]}:</span>
                  <span className="text-red-500">{item.split(":")[1]}</span>
                </>
              )}
            </p>
          ))}
    </div>
  );
};

export default ContactExperienceCard;
