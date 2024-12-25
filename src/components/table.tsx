"use client"

import { Table as AntTable, Empty } from "antd";
import type { TableColumnsType, TableProps } from 'antd';



interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }



const rowSelection: TableProps<DataType>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  



export const Table = ({ headersData, tableData, isLoading }: any) => {



    const modifiedHeadersData = headersData.map((header: any) => ({
        ...header,
        width: 120,
        onHeaderCell: () => ({
            style: {
                minWidth: 0,
            },
        }),
    }));




    return (
        <AntTable
            rowSelection={{ type: 'checkbox', }}
            bordered
            loading={isLoading}
            columns={modifiedHeadersData}
            dataSource={tableData}
            // rowKey={() => uuidv4()}
            className="wrapper-table"
            scroll={{ x: "max-content" }}
            locale={{
                emptyText:
                    !tableData?.length && !isLoading ? <Empty /> : " ",
            }}
            pagination={false}
        />
    );
};
