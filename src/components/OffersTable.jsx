import React from 'react';

const OffersTable = ({ tableData, tableType, pageNumber }) => {
  const tableHeader =
    tableType === 'disliked'
      ? [
          'Payment',
          'Hours',
          'Payment/Hour',
          'Reason',
          'Duration',
          'Date',
          'Capture Time',
          'Location'
        ]
      : [
          'Payment',
          'Hours',
          'Payment/Hour',
          'Duration',
          'Date',
          'Capture Time',
          'Location'
        ];
  return (
    <div className="flex flex-col gap-3 items-end w-full">
      <div className="flex w-full justify-between items-center">
        <p className="text-3xl text-white font-semibold">
          {tableType === 'disliked' ? 'Disliked Offers' : 'Gone Offers'}{' '}
          <span className="font-thin text-[#747474]">(247)</span>
        </p>

        <div className="flex items-center gap-1">
          <p className="text-sm text-white">Rows per page: </p>
          <button className="flex items-center justify-center gap-5 text-white font-thin text-sm w-[90px] h-[30px] rounded-[28.5px] bg-[#F65B0B]">
            20
            <img src="/assets/ArrowDown.svg" alt="Arrow" />
          </button>
        </div>
      </div>

      <div class="relative bg-[#282828] overflow-x-auto shadow-md sm:rounded-[28.5px] w-full">
        <table class="w-full text-sm text-left rtl:text-right ">
          <thead class=" bg-[#393939] ">
            <tr>
              {tableHeader.map((value, index) => (
                <th
                  scope="col"
                  className="px-6 py-5 text-sm text-white  font-normal"
                  key={index}
                >
                  {value}
                </th>
              ))}
            </tr>
          </thead>
          <div className="h-[12px] w-full" />
          <tbody className="text-xs font-thin text-[#A4A4A4]">
            {tableData.map((value, index) => (
              <tr className="bg-[#393939] border-b-4 border-[#282828]">
                <td class="px-6 py-2">{value.amount}</td>
                <td class="px-6 py-2">{value.hours}</td>
                <td class="px-6 py-2">22$</td>
                {tableType === 'disliked' && (
                  <td class="px-6 py-2">{value.reason}</td>
                )}
                <td class="px-6 py-2">{value.duration}</td>
                <td class="px-6 py-2">{value.date}</td>
                <td class="px-6 py-2">{value.captureTime}</td>
                <td class="px-6 py-2">{value.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-1">
        <p className="text-sm text-white">Page {pageNumber}</p>
        <img
          src="/assets/PrevPage.svg"
          alt="Page"
          className="h-6 w-6 cursor-pointer"
        />
        <img
          src="/assets/NextPage.svg"
          alt="Page"
          className="h-6 w-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default OffersTable;
