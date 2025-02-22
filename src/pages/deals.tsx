import DataTable, { Column } from "@/components/DataTable"

// Example data and columns configuration
const columns: Column[] = [
    {
        key: "id",
        label: "ID",
        sortable: true,
        type: "number",
    },
    {
        key: "address",
        label: "Name",
        sortable: true,
        type: "image",
        component: (row) => <span className="text-black">{row.address}</span>,
    },
    {
        key: "roomArea",
        label: "Area",
        sortable: true,
        type: "number",
    },
    {
        key: "dateTime",
        label: "Appointment Date",
        sortable: true,
    },
    {
        key: "price",
        label: "Price",
        sortable: true,
        filterable: true,
        type: "number",
    },
    {
        key: "status",
        label: "Status",
        sortable: true,
        filterable: true,
        type: "select",
        options: ["Active", "Inactive", "Pending", "Suspended"],
    }
]

// recent deals example
const recentDeals = [
    {
        id: 1,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 2,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 3,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 4,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 5,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 6,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 7,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 8,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 9,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 10,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 11,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 12,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 13,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 14,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 15,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 16,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 17,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 18,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
    {
        id: 19,
        address: "319 Haul Road",
        price: 5750,
        city: "Glenrock",
        state: "OH",
        zipCode: "44114",
        dateTime: "Nov 14, 07:00 AM",
        imageUrl: "https://placehold.co/44x44",
        roomArea: 350,
        status: "Active",
    },
]

const Deals: React.FC = () => {
    const handleSort = (sorts: any[]) => {
        console.log("Sorting:", sorts)
        // Implement your sorting logic here
    }

    const handleFilter = (filters: any[]) => {
        console.log("Filters:", filters)
        // Implement your filtering logic here
    }


    const handleView = (row: any) => {
        console.log("Viewing:", row)
        // Implement view logic
    }

    const handleEdit = (row: any) => {
        console.log("Editing:", row)
        // Implement edit logic
    }

    const handleDelete = (row: any) => {
        console.log("Deleting:", row)
        // Example: Remove the user from the data array
    }

    const handleCreate = () => {
        console.log("Creating new user")
        // Implement create logic
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">User Management</h1>
            <DataTable
                data={recentDeals}
                columns={columns}
                itemsPerPage={10}
                onSort={handleSort}
                onFilter={handleFilter}
                actions={{
                    onView: handleView,
                    onEdit: handleEdit,
                    onDelete: handleDelete,
                    onCreate: handleCreate,
                }}
                actionsText={{
                    view: "View Deal",
                    edit: "Edit Deal",
                    delete: "Delete Deal",
                    create: "Create Deal",
                }}
            />
        </div>
    )
}

// export 
export default Deals;