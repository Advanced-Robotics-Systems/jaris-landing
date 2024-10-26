import { staffContactDetailsTable } from "@/data";
const StaffContactDetails = () => {
  return (
    <div className="padding bg-jaris-white">
      <div>
        <span className="inline-block text-jaris-blue-dark font-normal sm:mb-3 text-base sm:text-xl md:text-2xl lg:text-3xl">
          Communication
        </span>
        <h1 className="text-jaris-gold font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-10">
          Staff Contact Details
        </h1>
      </div>
      <div className="max-md:overflow-x-scroll">
        <table className="w-full">
          <thead className="bg-bg-text">
            <tr>
              <td className="p-4 border-r-2 border-white text-xs font-medium xl:text-sm 2xl:text-base text-jaris-blue-dark">
                Role
              </td>
              <td className="p-4 text-xs font-medium xl:text-sm 2xl:text-base text-jaris-blue-dark">
                Name
              </td>
              <td className="p-4 text-xs font-medium xl:text-sm 2xl:text-base text-jaris-blue-dark">
                Contact
              </td>
              <td className="p-4 text-center text-xs font-medium xl:text-sm 2xl:text-base text-jaris-blue-dark">
                Ext
              </td>
              <td className="p-4 text-xs font-medium xl:text-sm 2xl:text-base text-jaris-blue-dark">
                Email
              </td>
            </tr>
          </thead>
          <tbody className="bg-bg-primary">
            {staffContactDetailsTable.map((item: any, index: number) => (
              <tr className="border-b border-[#93C5FD]" key={index}>
                <td className="p-4 border-r-2 border-white text-xs font-medium xl:text-sm 2xl:text-base text-jaris-blue-dark">
                  {item.role}
                </td>
                <td className="p-4 text-xs font-medium xl:text-sm 2xl:text-base text-jaris-blue-dark">
                  {item.name}
                </td>
                <td className="p-4 text-xs font-medium xl:text-sm 2xl:text-base text-jaris-blue-dark">
                  {item.contact}
                </td>
                <td className="p-4 text-center text-xs font-medium xl:text-sm 2xl:text-base text-jaris-blue-dark">
                  {item.ext}
                </td>
                <td className="p-4 text-xs font-medium xl:text-sm 2xl:text-base text-jaris-blue-dark">
                  {item.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffContactDetails;
