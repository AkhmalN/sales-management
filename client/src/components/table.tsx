import { RiRadioButtonLine } from "react-icons/ri";
import Badge from "./Badge";
import Pagination from "./Pagination";
import SearchBar from "./Search";
import React from "react";

interface TableProps {
  data: any[] | undefined;
  title?: string;
  searchBar?: boolean;
  Action?: React.FC<{ data: Record<string, string>; fieldId: string }>;
  ActionAdd?: React.ReactNode;
  keyColumn?: {
    key: string;
    label: string;
    isObject?: boolean;
    objectField?: string;
  }[];
  fieldId: string;
  status_label?: string;
  pagination?: boolean;
}

const Table: React.FC<TableProps> = ({
  data,
  title,
  searchBar,
  Action,
  ActionAdd,
  keyColumn,
  fieldId,
  status_label,
  pagination,
}) => {
  return (
    <div className="overflow-x-auto overflow-y-hidden bg-white rounded-xl w-full">
      <div className="-m-1.5 w-full">
        <div className="flex justify-between p-5 mt-5 w-full ">
          <div className="">
            <p className=" font-bold text-[#030229] opacity-70 text-[18px]">
              {title}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="inline-flex">{searchBar && <SearchBar />}</div>
            <div>{ActionAdd}</div>
          </div>
        </div>
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="rounded-lg  ">
            <div className="overflow-hidden bg-white">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-white dark:bg-neutral-700">
                  <tr>
                    <th className="px-6 py-3 text-start text-[16px] font-semibold text-[#030229] text-opacity-100 font-text">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                      />
                    </th>
                    {keyColumn?.map((column) => {
                      return (
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-[16px] font-semibold text-[#030229] text-opacity-100 font-text "
                          key={`header-${column.key}`}
                        >
                          {column.label}
                        </th>
                      );
                    })}
                    {Action ? (
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        key={`header-action`}
                      >
                        Action
                      </th>
                    ) : null}
                  </tr>
                </thead>
                <tbody>
                  {data?.map((row: any, rowindex: any) => {
                    return (
                      <tr key={`row-${rowindex}`}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                          />
                        </td>
                        {keyColumn &&
                          keyColumn.map((column) => {
                            if (column.key === "product_name") {
                              return (
                                <td
                                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                                  key={`cell-${rowindex}-${column.key}`}
                                >
                                  <div className="flex flex-row items-center gap-2">
                                    <img src={row[column.key]?.image} />
                                    <p>{row[column.key]?.name}</p>
                                  </div>
                                </td>
                              );
                            }
                            if (column.key === "gender") {
                              return (
                                <td
                                  className="px-6 py-4 whitespace-nowrap text-sm font-medium "
                                  key={`cell-${rowindex}-${column.key}`}
                                >
                                  <div
                                    className={`flex flex-row items-center gap-2 `}
                                  >
                                    {row[column.key] === "Male" ? (
                                      <Badge text="Male" variant="primary" />
                                    ) : (
                                      <Badge text="Female" variant="warning" />
                                    )}
                                  </div>
                                </td>
                              );
                            }
                            if (column.key === "total_order") {
                              return (
                                <td
                                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                                  key={`cell-${rowindex}-${column.key}`}
                                >
                                  <div className="w-[50px] bg-saas-blue-sky rounded-lg bg-opacity-10">
                                    <p className="flex justify-center items-center text-saas-blue-sky font-bold  px-3 py-2 w-auto">
                                      {row[column.key]}
                                    </p>
                                  </div>
                                </td>
                              );
                            }

                            if (column.key === status_label) {
                              return (
                                <td
                                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                                  key={`cell-${rowindex}-${column.key}`}
                                >
                                  {row[column.key] === "Complete" ? (
                                    <Badge text="Completed" variant="success" />
                                  ) : row[column.key] === "Pending" ? (
                                    <Badge text="Pending" variant="warning" />
                                  ) : (
                                    <Badge text="Cancel" variant="danger" />
                                  )}
                                </td>
                              );
                            }
                            if (column.key === "is_active") {
                              return (
                                <td
                                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                                  key={`cell-${rowindex}-${column.key}`}
                                >
                                  {row[column.key] === 1 ? (
                                    <Badge
                                      text={<RiRadioButtonLine />}
                                      variant="success"
                                    />
                                  ) : (
                                    <Badge
                                      text={<RiRadioButtonLine />}
                                      variant="danger"
                                    />
                                  )}
                                </td>
                              );
                            }

                            return (
                              <td
                                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                                key={`cell-${rowindex}-${column.key}`}
                              >
                                {row[column.key]}
                              </td>
                            );
                          })}
                        {Action && <Action data={row} fieldId={fieldId} />}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {pagination && (
          <div className="px-6 py-4 min-w-full inline-block">
            <Pagination />
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
