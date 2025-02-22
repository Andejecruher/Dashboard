import DataTable, { Column } from "@/components/DataTable";
import ColumnNameDeal from "@/components/ColumnNameDeal";
import SquareMeterIcon from "@/components/SquareMeterIcon";
import Badge from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";

//styles
const classes = {
    container: "p-6",
    title: `text-2xl font-bold mb-6`,
    roomArea: `self-stretch justify-start items-start gap-2 inline-flex overflow-hidden`,
    label: `text-base`,
};

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
        component: (row) => (
            <ColumnNameDeal
                image={row.imageUrl}
                description={`${row.address}, ${row.city}, ${row.state} ${row.zipCode}`}
            />
        ),
    },
    {
        key: "roomArea",
        label: "Area",
        sortable: true,
        type: "number",
        component: (row) => (
            <div className={classes.roomArea}>
                <span className={classes.label}>{row.roomArea}</span>
                <SquareMeterIcon fill="black" />
            </div>
        ),
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
        type: "number",
        component: (row) => (
            <span className={classes.label}>{formatCurrency(row.price)}</span>
        ),
    },
    {
        key: "status",
        label: "Status",
        sortable: true,
        filterable: true,
        type: "select",
        options: ["IN PROGRESS", "CLOSED"],
        component: (row) => (
            <Badge
                size="sm"
                intent={row.status === "IN PROGRESS" ? "primary" : "secondary"}
                text={row.status}
            />
        ),
    },
];

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
        status: "CLOSED",
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
        status: "IN PROGRESS",
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
        status: "CLOSED",
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
        status: "IN PROGRESS",
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
        status: "CLOSED",
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
        status: "IN PROGRESS",
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
        status: "IN PROGRESS",
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
        status: "CLOSED",
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
        status: "CLOSED",
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
        status: "IN PROGRESS",
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
        status: "IN PROGRESS",
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
        status: "IN PROGRESS",
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
        status: "IN PROGRESS",
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
        status: "CLOSED",
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
        status: "CLOSED",
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
        status: "IN PROGRESS",
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
        status: "CLOSED",
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
        status: "IN PROGRESS",
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
        status: "IN PROGRESS",
    },
];

const Deals: React.FC = () => {
    const handleSort = (sorts: any[]) => {
        console.log("Sorting:", sorts);
        // Implement your sorting logic here
    };

    const handleFilter = (filters: any[]) => {
        console.log("Filters:", filters);
        // Implement your filtering logic here
    };

    const handleView = (row: any) => {
        console.log("Viewing:", row);
        // Implement view logic
    };

    const handleEdit = (row: any) => {
        console.log("Editing:", row);
        // Implement edit logic
    };

    const handleDelete = (row: any) => {
        console.log("Deleting:", row);
        // Example: Remove the user from the data array
    };

    const handleCreate = () => {
        console.log("Creating new user");
        // Implement create logic
    };

    return (
        <section className={classes.container}>
            <h1 className={classes.title}>User Management</h1>
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
        </section>
    );
};

// export
export default Deals;
