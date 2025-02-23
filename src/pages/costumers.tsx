//DESC: Costumers page with a table 
import DataTable, { Column, Sort, Filter } from "@/components/DataTable";
import ColumnNameDeal from "@/components/ColumnNameDeal";
import { costumers } from "@/lib/costumer-faker";

//styles
const classes = {
    container: "p-6",
    title: `text-2xl font-bold mb-6`,
    roomArea: `self-stretch justify-start items-start gap-2 inline-flex overflow-hidden`,
    label: `text-base`,
};

// Costumer interface
interface Costumer {
    id: number;
    name: string;
    avatar: string;
    email: string;
    phone: string;
    address: string;
}

// Example data and columns configuration
const columns: Column<Costumer>[] = [
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
        component: (row: Costumer) => (
            <ColumnNameDeal
                image={row.avatar}
                description={row.name}
            />
        ),
    },
    {
        key: "email",
        label: "Email",
        sortable: true,
        type: "text",
    },
    {
        key: "phone",
        label: "Phone",
        sortable: true,
        type: "text",
    },
    {
        key: "address",
        label: "Address",
        sortable: true,
        type: "text",
    }
];

const Costumers: React.FC = () => {
    const handleSort = (sorts: Sort[]) => {
        console.log("Sorting:", sorts);
        // Implement your sorting logic here
    };

    const handleFilter = (filters: Filter[]) => {
        console.log("Filters:", filters);
        // Implement your filtering logic here
    };

    const handleView = (row: Costumer) => {
        console.log("Viewing:", row);
        // Implement view logic
    };

    const handleEdit = (row: Costumer) => {
        console.log("Editing:", row);
        // Implement edit logic
    };

    const handleDelete = (row: Costumer) => {
        console.log("Deleting:", row);
        // Example: Remove the user from the data array
    };

    const handleCreate = () => {
        console.log("Creating new user");
        // Implement create logic
    };

    return (
        <section className={classes.container}>
            <h1 className={classes.title}>Costumer of list</h1>
            <DataTable
                data={costumers}
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
export default Costumers;
