//DESC: Tasks page with a table 
import DataTable, { Column, Sort, Filter } from "@/components/DataTable";
import { tasks } from "@/lib/tasks-faker";

//styles
const classes = {
    container: "p-6",
    title: `text-2xl font-bold mb-6`,
    roomArea: `self-stretch justify-start items-start gap-2 inline-flex overflow-hidden`,
    label: `text-base`,
};

// Costumer interface
interface Task {
    id: number;
    date: string;
    title: string;
    isHighlighted: boolean;
}

// Example data and columns configuration
const columns: Column<Task>[] = [
    {
        key: "id",
        label: "ID",
        sortable: true,
        type: "number",
    },
    {
        key: "date",
        label: "Due Date",
        sortable: true,
        type: "text",
    },
    {
        key: "title",
        label: "Task",
        sortable: true,
        type: "text",
    },
];

const Tasks: React.FC = () => {
    const handleSort = (sorts: Sort[]) => {
        console.log("Sorting:", sorts);
        // Implement your sorting logic here
    };

    const handleFilter = (filters: Filter[]) => {
        console.log("Filters:", filters);
        // Implement your filtering logic here
    };

    const handleView = (row: Task) => {
        console.log("Viewing:", row);
        // Implement view logic
    };

    const handleEdit = (row: Task) => {
        console.log("Editing:", row);
        // Implement edit logic
    };

    const handleDelete = (row: Task) => {
        console.log("Deleting:", row);
        // Example: Remove the user from the data array
    };

    const handleCreate = () => {
        console.log("Creating new user");
        // Implement create logic
    };

    return (
        <section className={classes.container}>
            <h1 className={classes.title}>Task of list</h1>
            <DataTable
                data={tasks}
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
export default Tasks;
