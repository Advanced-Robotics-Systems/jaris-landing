import { admissionProcedureSteps } from '@/data'
import { Card, CardBody } from '@nextui-org/react'
import React from 'react'

const AdmissionProcedureSteps = () => {
  return (
    <div className="relative padding bg-bg-primary lg:h-screen flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-20 lg:px-56 xl:px-72">
      <div className="self-start">
        <h2 className="heading-secondary font-bold text-jaris-blue">Admission Procedure</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {admissionProcedureSteps.map((step, index) => (
          <div
            key={step.id}
            className={`w-full ${index === 1 ? 'sm:col-span-2 lg:col-span-2' : 'col-span-1'}`}
          >
            <Card className="bg-white shadow-md h-full">
              <CardBody className="p-6">
                <div className="text-jaris-gold font-semibold subtitle mb-8">{step.id}</div>
                <div className="text-jaris-blue heading-secondary font-semibold mb-4">{step.title}</div>
                <div className="text-jaris-black subtitle">{step.description}</div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdmissionProcedureSteps