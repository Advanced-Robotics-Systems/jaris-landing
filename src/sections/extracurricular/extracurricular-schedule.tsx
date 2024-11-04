import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const columns = [
  {
    key: "day",
    label: "Program Schedule",
  },
  {
    key: "detail",
    label: "",
  },
];

export default function ExtracurricularSchedule({schedule}: {schedule: any}) {
  return (
    <section className="flex flex-col lg:flex-row items-center padding bg-bg-primary lg:px-36 xl:px-48 2xl:px-62 lg:py-36 gap-10 lg:gap-20">
      {/* Schedule Table */}
      <div className="w-full lg:w-1/2">
        <Table aria-label="Art Program Schedule" selectionMode="none">
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key} className="bg-bg-text"><span className="subtitle text-jaris-blue">{column.label}</span></TableColumn>}
          </TableHeader>
          <TableBody items={schedule.schedule}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell><span className="text-jaris-blue subtitle">{getKeyValue(item, columnKey)}</span></TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Schedule Description */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-jaris-gold heading-secondary font-semibold mb-4">Schedule</h2>
        <p className="text-jaris-blue subtitle leading-relaxed">
          {schedule.description}
        </p>
      </div>
    </section>
  );
}
