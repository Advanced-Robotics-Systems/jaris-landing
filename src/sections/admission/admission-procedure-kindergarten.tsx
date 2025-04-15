"use client";
import { admissionKindergartenAgeGroups } from "@/data";
import { ICONS } from "@/utils/icons";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Image,
} from "@nextui-org/react";

const tableColumns = [
  {
    key: "grade",
    label: "Grade",
  },
  {
    key: "age",
    label: "Age",
  },
];

const AdmissionProcedureKindergarten = ({ t }: { t: any }) => {
  const tableRowData = admissionKindergartenAgeGroups.map((item) => ({
    grade: t(`kindergarten.ageGroups.${item.grade}`),
    age: t(`kindergarten.ageGroups.${item.age}`),
  }));

  return (
    <div className="padding bg-jaris-white flex flex-col gap-16 lg:px-64 xl:px-80 2xl:px-96">
      {/* Top Section */}
      <div className="flex flex-col xl:flex-row gap-8 items-center justify-between">
        {/* Text Content */}
        <div className="xl:w-1/2">
          <h3 className="subtitle text-jaris-blue font-semibold">
            {t(`kindergarten.subtitle`)}
          </h3>
          <h2 className="heading-secondary text-jaris-gold font-semibold">
            {t(`kindergarten.title`)}
          </h2>
          <p className="subtitle text-jaris-black mt-4">
            {t(`kindergarten.details1`)}
          </p>
          <p className="subtitle text-jaris-black mt-4">
            {t(`kindergarten.details2`)}
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/images/admission/admission-kindergarten-img.JPG"
            alt="Admission in Kindergarten"
            width={400}
            height={300}
            className="rounded-lg object-cover object-[75%_center]"
          />
        </div>
      </div>

      {/* Table Section */}
      <Table
        aria-label="Kindergarten Grades and Ages"
        removeWrapper
        className="rounded-lg overflow-hidden bg-bg-primary xl:w-2/3 self-center"
      >
        <TableHeader columns={tableColumns}>
          {(column) => (
            <TableColumn
              key={column.key}
              className="bg-bg-text text-jaris-blue font-bold p-4"
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={tableRowData}>
          {(item) => (
            <TableRow
              key={item.grade}
              className="border-b-[0.01rem] border-[#93C5FD99]"
            >
              {(columnKey) => (
                <TableCell className="bg-bg-primary text-jaris-blue p-4 ">
                  <span className="lg:text-base">
                    {getKeyValue(item, columnKey)}
                  </span>
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Important Notes */}
      <ul className="space-y-4 text-jaris-black mt-6">
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 text-jaris-gold">
            {ICONS.check_circle}
          </div>
          <span className="subtitle">{t(`kindergarten.notes.note1`)}</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 text-jaris-gold">
            {ICONS.check_circle}
          </div>
          <span className="subtitle">{t(`kindergarten.notes.note2`)}</span>
        </li>
      </ul>

      {/* Caution Section */}
      <div className="bg-[#FFF3E1] p-6 mt-8 rounded-lg border border-[#DD8F27]">
        <div className="flex items-start gap-3">
          <span className="text-red-600 font-semibold subtitle">
            {ICONS.caution}
          </span>
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-jaris-red subtitle">
              {t(`kindergarten.caution.title`)}
            </div>
            <div className="text-jaris-blue small-text">
              {t(`kindergarten.caution.details`)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcedureKindergarten;
