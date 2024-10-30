import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { DOMAIN } from "./server/domain";
import { Link } from "@remix-run/react";

export default function CustomerList() {
  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "id",
      headerName: "ID",
      width: 30,
      type: "number",
      filterable: true,

      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "NAME",
      width: 150,
      editable: true,

      align: "center",
      headerAlign: "center",
    },
    {
      field: "address",
      headerName: "ADDRESS",
      width: 300,
      editable: true,

      align: "center",
      headerAlign: "center",
    },
    {
      field: "province",
      headerName: "PROVINCE",
      width: 150,
      editable: true,

      align: "center",
      headerAlign: "center",
    },
    {
      field: "credit_limit",
      headerName: "CREDIT",
      type: "number",
      width: 100,
      editable: true,

      align: "center",
      headerAlign: "center",
    },
    {
      field: "tax_id",
      headerName: "TAX ID",
      width: 150,
      editable: true,

      align: "center",
      headerAlign: "center",
    },
    {
      field: "tel",
      headerName: "TEL",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      editable: true,
      width: 150,

      align: "center",
      headerAlign: "center",
      // valueGetter: (value, row) => `${row.name || ""} ${row.tel || ""}`,
    },
    {
      field: "addDate",
      headerName: "ADD DATE",
      width: 240,
      editable: false,
      align: "center",
      headerAlign: "center",
      valueGetter: (value, row) => `${new Date(row.addDate).toUTCString()}`,
    },
  ];

  const [rows, setRows] = useState<Customer[]>([]);
  const [selection, setSelection] = useState<any[]>([]);

  const fetchData = async () => {
    const response = await fetch(DOMAIN + "/customers/getList");
    const data: Customer[] = await response.json();
    setRows(data);
  };

  async function handleEdit(body: any) {
    const response = await fetch(DOMAIN + "/customers/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    fetchData();
  }

  async function handleSelect() {
    await sessionStorage.setItem("selectedCustomer", JSON.stringify(selection));
  }

  useEffect(() => {
    handleSelect();
  }, [selection]);

  useEffect(() => {
    fetchData();
    sessionStorage.removeItem("address");
    sessionStorage.removeItem("province");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-svw h-svh gap-10 translate-y-7">
      <h1 className="font-inter font-bold text-[#A8C027] text-5xl">
        ข้อมูลลูกค้า
      </h1>
      <div className="h-[61.2%]">
        <DataGrid
          className="[&>*]:font-urbanist [&>*]:font-semibold shadow-xl"
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          autoPageSize
          checkboxSelection
          disableMultipleRowSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(selection: any, detail) => {
            setSelection(selection);
          }}
          onCellEditStop={(cell, event: any, detail) => {
            console.log(event);
            const body: any = {
              id: cell.id,
            };
            body[cell.field] = event.target.value;
            handleEdit(body);
          }}
        />
      </div>

      <div className="flex flex-row gap-16">
        <Link to="/addcustomer" prefetch="intent">
          <button className="w-[10rem] h-fit bg-[#51C0F4] text-black font-bold rounded-lg p-2 hover:scale-105 active:scale-95">
            ADD
          </button>
        </Link>
        <Link to="/workDescription" prefetch="intent" onClick={
          (e)=>{
            if(selection.length === 0){
              e.preventDefault();
            }
          }
        }>
          <button className="w-[10rem] h-fit bg-[#DEE33E] text-black font-bold rounded-lg p-2 hover:scale-105 active:scale-95">
            Select
          </button>
        </Link>
      </div>
    </div>
  );
}
