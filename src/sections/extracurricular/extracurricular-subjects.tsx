import { Card, CardBody, CardHeader } from '@nextui-org/react';

const ExtracurriculurSubjects = ({subjects} : {subjects: any}) => {
  return (
    <section className="relative py padding y lg:px-36 xl:px-48 2xl:px-62 bg-cover bg-center" style={{ backgroundImage: 'url(/images/extracurricular/academy-subjects-bg.png)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-jaris-blue opacity-80" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-jaris-gold heading-secondary font-bold mb-12">What we provide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {subjects.map((subject : any, index: number) => (
            <Card key={index} className="bg-white/70 rounded-lg shadow-md min-h-[150px] lg:p-10">
              <CardHeader className="pb-0 flex flex-col items-start gap-4">
                <p className="text-jaris-blue font-semibold small-text">{subject.level}</p>
                <h3 className="text-jaris-gold-dark heading-secondary">{subject.title}</h3>
              </CardHeader>
              <CardBody className="">
                <p className="text-jaris-blue subtitle leading-relaxed">{subject.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurriculurSubjects;
