import Search from "@/Components/Search";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@mui/material";
import { DataGrid, GridColDef, GridRowProps, GridRowsProp } from "@mui/x-data-grid";

export default function Profiling() {
    const columns: GridColDef[] = [
        {
            field: "student_number",
            headerName: 'Student Number',
            flex: 1
        },
        {
            field: "student_name",
            headerName: 'Student Name',
            flex: 1
        },
        {
            field: "program",
            headerName: 'Program',
            flex: 1
        },
        {
            field: "year",
            headerName: 'Year',
            flex: 1
        },
        {
            field: "section",
            headerName: 'Section',
            flex: 1
        },
        {
            field: "status",
            headerName: 'Status',
            flex: 1
        },
    ]

    const rows: GridRowsProp = [
        {
            id: "1",
            student_name: "Boyax",
            program: "BS-IT",
            year: "2nd year",
            section: "Secret",
            status: "active"
        },
        
    ]
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Profiling
                </h2>
            }
        >
            <div>
                <div className="flex justify-between">
                    <div id="button-wrapper" className="flex gap-4">
                        <Button variant="contained">Add</Button>
                        <Button variant="contained" disabled>Import</Button>
                    </div>
                    <Search />
                </div>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    className="mt-4"
                />
            </div>
        </AuthenticatedLayout>
    )
}