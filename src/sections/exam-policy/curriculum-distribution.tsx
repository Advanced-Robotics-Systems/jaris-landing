import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { curriculumDistribution } from "@/data";

const columns = [
  { key: 'examination', label: 'Terminal/Monthly Examination' },
  { key: 'carryPercentage', label: 'Carry Percentage' },
  { key: 'totalTermCompletion', label: 'Total Term Completion' },
];

export default function CurriculumDistribution() {
  return (
    <div className="padding bg-bg-primary lg:px-64 xl:px-80 2xl:px-96">
      <h3 className="subtitle font-semibold text-jaris-blue uppercase mb-2">Examination Policy</h3>
      <h2 className="heading-secondary font-semibold text-jaris-gold mb-10">Distribution of Curriculum</h2>
      <div className="overflow-x-auto">
        <Table aria-label="Curriculum Distribution">
          <TableHeader className="">
            {columns.map((column, index) => (
              <TableColumn key={column.key} className={`${index!==0 && "text-center" } p-4 bg-jaris-blue text-jaris-white subtitle text-base leading-[25.5px] sm:text-lg md:text-xl;`}>{column.label}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {curriculumDistribution.map((row, index) => (
              <TableRow key={index}>
                {(columnKey) => (
                  <TableCell className={`${columnKey!=="examination" && "text-center" } p-3 text-jaris-gold-dark subtitle text-base leading-[21.5px] sm:text-lg md:text-xl;`}>{getKeyValue(row, columnKey)}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
