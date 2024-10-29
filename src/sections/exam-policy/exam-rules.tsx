import { Card } from "@nextui-org/react";
import { examRules } from "@/data";

type ContentType = string | { note?: string; warning?: string };

const isNote = (content: ContentType): content is { note: string } => {
  return (content as { note: string }).note !== undefined;
};

const isWarning = (content: ContentType): content is { warning: string } => {
  return (content as { warning: string }).warning !== undefined;
};

const ExamRules = () => {
  const firstPart = examRules.slice(0, 3);
  const secondPart = examRules.slice(3);

  return (
    <div className="relative w-full bg-[url('/images/exam/exam-rules-bg.jpeg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-blue-900/80" />
      <div className="relative w-full padding lg:px-48 xl:px-64 2xl:px-80">
        <h2 className="heading-md text-jaris-gold text-center mb-8">Examination Rules</h2>
        <p className="subtitle text-center text-jaris-white mb-12">
          Rules pertaining to our examination system are upheld respectfully.
        </p>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-4">
            {firstPart.map((rule, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 break-words"
              >
                <h3 className="font-light heading-secondary text-jaris-gold">{rule.title}</h3>
                {rule.content.map((paragraph, idx) => {
                  if (typeof paragraph === "string") {
                    return (
                      <p key={idx} className="text-jaris-blue subtitle">
                        {paragraph}
                      </p>
                    );
                  } else if (isNote(paragraph)) {
                    return (
                      <p key={idx} className="text-jaris-red-dark font-semibold">
                        NOTE: {paragraph.note}
                      </p>
                    );
                  } else if (isWarning(paragraph)) {
                    return (
                      <p key={idx} className="text-jaris-red-dark font-semibold">
                        WARNING: {paragraph.warning}
                      </p>
                    );
                  }
                  return null;
                })}
              </Card>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-4"> 
            {secondPart.map((rule, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 break-words"
              >
                <h3 className="font-light heading-secondary text-jaris-gold">{rule.title}</h3>
                {rule.content.map((paragraph, idx) => {
                  if (typeof paragraph === "string") {
                    return (
                      <p key={idx} className="text-jaris-blue subtitle">
                        {paragraph}
                      </p>
                    );
                  } else if (isNote(paragraph)) {
                    return (
                      <p key={idx} className="text-jaris-red-dark font-semibold">
                        NOTE: {paragraph.note}
                      </p>
                    );
                  } else if (isWarning(paragraph)) {
                    return (
                      <p key={idx} className="text-jaris-red-dark font-semibold">
                        WARNING: {paragraph.warning}
                      </p>
                    );
                  }
                  return null;
                })}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamRules;
