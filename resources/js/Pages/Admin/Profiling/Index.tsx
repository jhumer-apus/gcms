import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Profiling() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Profiling
                </h2>
            }
        >
            <div>
                Profiling
            </div>
        </AuthenticatedLayout>
    )
}