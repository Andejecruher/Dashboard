// DESC: Deals page with a table
import DataTable, { Column, Sort, Filter } from "@/components/DataTable";
import ColumnNameDeal from "@/components/ColumnNameDeal";
import SquareMeterIcon from "@/components/SquareMeterIcon";
import Badge from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";
import { deals } from "@/lib/deal-faker";

//styles
const classes = {
    container: "p-6",
    title: `text-2xl font-bold mb-6`,
    roomArea: `self-stretch justify-start items-start gap-2 inline-flex overflow-hidden`,
    label: `text-base`,
};

// Deal interface
interface Deal {
    id: number;
    address: string;
    price: number;
    city: string;
    state: string;
    zipCode: string;
    dateTime: string;
    imageUrl: string;
    roomArea: number;
    status: string;
}

// Example data and columns configuration
const columns: Column<Deal>[] = [
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
        component: (row: Deal) => (
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
        component: (row: Deal) => (
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
        component: (row: Deal) => (
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

const Deals: React.FC = () => {
    const handleSort = (sorts: Sort[]) => {
        console.log("Sorting:", sorts);
        // Implement your sorting logic here
    };

    const handleFilter = (filters: Filter[]) => {
        console.log("Filters:", filters);
        // Implement your filtering logic here
    };

    const handleView = (row: Deal) => {
        console.log("Viewing:", row);
        // Implement view logic
    };

    const handleEdit = (row: Deal) => {
        console.log("Editing:", row);
        // Implement edit logic
    };

    const handleDelete = (row: Deal) => {
        console.log("Deleting:", row);
        // Example: Remove the user from the data array
    };

    const handleCreate = () => {
        console.log("Creating new user");
        // Implement create logic
    };

    return (
        <section className={classes.container}>
            <h1 className={classes.title}>List of the deals</h1>
            <DataTable
                data={deals}
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
