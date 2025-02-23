// Desc: DataTable component for displaying data in a table with sorting, filtering, and pagination
import { useState, useEffect, useMemo, JSX } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
    DropdownMenuLabel,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";
import TooltipItem from "./ui/Tooltip";
import Input from "@/components/ui/Input";
import Badge from "@/components/ui/Badge";
import {
    ArrowUpDown,
    Filter,
    X,
    ArrowUp,
    ArrowDown,
    ListFilterPlus,
    Plus,
    Eye,
    Pencil,
    Trash2,
    Image,
    Folder,
    LayoutList
} from "lucide-react";

// Column type
export interface Column<T = any> {
    key: string;
    label: string;
    sortable?: boolean;
    filterable?: boolean;
    type?: "text" | "select" | "date" | "number" | "image" | "file";
    options?: string[];
    autoIncrement?: boolean;
    component?: (row: T) => JSX.Element;
}

// Sort type
export interface Sort {
    key: string;
    direction: "asc" | "desc";
}

// Filter type
export interface Filter {
    key: string;
    operator: string;
    value: string;
}

// Row actions type
interface RowActions<T> {
    onView?: (row: T) => void;
    onEdit?: (row: T) => void;
    onDelete?: (row: T) => void;
    onCreate?: () => void;
}

// Row actions text
interface RowActionsText {
    view?: string;
    edit?: string;
    delete?: string;
    create?: string;
}

// interface DataTableProps
interface DataTableProps<T = any> {
    data: T[];
    columns: Column<T>[];
    itemsPerPage?: number;
    onSort?: (sorts: Sort[]) => void;
    onFilter?: (filters: Filter[]) => void;
    actions?: RowActions<T>;
    actionsText?: RowActionsText;
}

// Styles
const classes = {
    container: `w-full space-y-4`,
    header: `flex items-center justify-between gap-4`,
    headerContent: `flex items-center gap-4`,
    inputSearch: `border-1 border-grey-300 h-[45px]`,
    buttonAdd: `rounded-md`,
    iconAdd: `h-4 w-4 mr-2`,
    filtresContainer: `flex items-center gap-2 z-2`,
    buttonFilter: `w-auto p-2 rounded-full border border-gray-400 bg-white`,
    iconFilter: `w-4 h-4 text-gray-800`,
    drowpdownContent: `w-full bg-white shadow-lg rounded-md`,
    drowpdownTigger: `text-base text-black`,
    drowpdownSubContent: `bg-white shadow-lg rounded-md text-base`,
    drowpdownItem: `text-base`,
    drowpdownMenuItem: `justify-center text-muted-foreground`,
    clearFilters: `h-7 px-2 text-base rounded-md`,
    filtersActive: `flex flex-wrap items-center gap-2`,
    badgeFilter: `flex items-center gap-1 px-3 py-1 hover:bg-secondary/80`,
    clearAllFilters: `text-xs rounded-md`,
    table: `rounded-md`,
    tableWrapper: `overflow-x-auto`,
    tableContent: `w-full table-auto`,
    tableTr: `border-b bg-muted border-gray-200`,
    tableTh: `px-2 py-2 text-left text-sm font-medium text-gray-500`,
    buttonSort: `inline-flex items-center gap-1 hover:text-primary`,
    iconHeaderTable: `mr-2 h-6 w-6`,
    iconSort: `h-4 w-4 text-muted-foreground`,
    tableThRow: `px-2 py-2 text-left text-sm font-medium text-black-200`,
    avatar: 'w-8 h-8 rounded-full',
    file: 'text-blue-600',
    tableThActions: `px-4 py-3 text-sm text-right`,
    contentActions: `flex items-center justify-center`,
    buttonAction: `border-none w-4 hover:bg-gray-200 rounded-full`,
    iconView: `h-5 w-5 text-blue`,
    iconEdit: `h-5 w-5 text-green`,
    iconDelete: `h-5 w-5 text-red-600`,
    tableNotFound: `px-4 py-8 text-center text-sm text-muted-foreground`,
    notFound: `text-xl text-gray-400 flex items-center justify-center gap-2`,
    iconNotFound: `w-5 h-5 text-gray-400`,
    footer: `flex items-center justify-between mt-4`,
    footerInfo: `text-base text-muted-foreground`,
    pagination: `flex items-center gap-2`,
    buttonPaginate: `rounded-md`,
    infoPaginate: `text-base text-muted-foreground`,
};

// DataTable Component
const DataTable: React.FC<DataTableProps> = ({
    data = [],
    columns = [],
    itemsPerPage = 10,
    onSort,
    onFilter,
    actions,
    actionsText,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sorts, setSorts] = useState<Sort[]>([]);
    const [filters, setFilters] = useState<Filter[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Apply filters and search to data
    const filteredData = useMemo(() => {
        let result = [...data];

        // Apply search filter
        if (searchTerm) {
            const lowercasedSearch = searchTerm.toLowerCase();
            result = result.filter((item) =>
                Object.entries(item).some(([value]) =>
                    String(value).toLowerCase().includes(lowercasedSearch)
                )
            );
        }

        // Apply column filters
        if (filters.length > 0) {
            result = result.filter((item) =>
                filters.every((filter) => {
                    const value = String(item[filter.key]).toLowerCase();
                    const filterValue = filter.value.toLowerCase();

                    switch (filter.operator) {
                        case "contains":
                            return value.includes(filterValue);
                        case "equals":
                            return value === filterValue;
                        case "startsWith":
                            return value.startsWith(filterValue);
                        case "endsWith":
                            return value.endsWith(filterValue);
                        case "gt":
                            return Number(value) > Number(filterValue);
                        case "lt":
                            return Number(value) < Number(filterValue);
                        default:
                            return true;
                    }
                })
            );
        }

        // Apply sorting
        if (sorts.length > 0) {
            result.sort((a, b) => {
                for (const sort of sorts) {
                    const aValue = a[sort.key];
                    const bValue = b[sort.key];

                    // Handle different types of values
                    if (typeof aValue === "number" && typeof bValue === "number") {
                        if (aValue !== bValue) {
                            return sort.direction === "asc"
                                ? aValue - bValue
                                : bValue - aValue;
                        }
                    } else {
                        const comparison = String(aValue).localeCompare(String(bValue));
                        if (comparison !== 0) {
                            return sort.direction === "asc" ? comparison : -comparison;
                        }
                    }
                }
                return 0;
            });
        }

        return result;
    }, [data, searchTerm, filters, sorts]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    // Reset pagination when filters/search changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, filters, sorts]);

    // Handle sorting
    const handleSort = (key: string) => {
        const existingSort = sorts.find((s) => s.key === key);
        let newSorts: Sort[];

        if (existingSort) {
            if (existingSort.direction === "asc") {
                // Change to desc
                newSorts = sorts.map((s) =>
                    s.key === key ? { ...s, direction: "desc" } : s
                );
            } else {
                // Remove sort
                newSorts = sorts.filter((s) => s.key !== key);
            }
        } else {
            // Add new sort while keeping existing sorts
            newSorts = [...sorts, { key, direction: "asc" }];
        }

        setSorts(newSorts);
        onSort?.(newSorts);
    };

    // Handle filtering
    const handleFilter = (key: string, value: string, operator = "contains") => {
        // Check if filter already exists
        const existingFilterIndex = filters.findIndex(
            (f) => f.key === key && f.value === value && f.operator === operator
        );

        if (existingFilterIndex >= 0) {
            // Remove existing filter
            const newFilters = filters.filter(
                (_, index) => index !== existingFilterIndex
            );
            setFilters(newFilters);
            onFilter?.(newFilters);
        } else {
            // Add new filter
            const newFilters = [...filters, { key, operator, value }];
            setFilters(newFilters);
            onFilter?.(newFilters);
        }
    };

    // Clear single filter
    const clearFilter = (index: number) => {
        const newFilters = filters.filter((_, i) => i !== index);
        setFilters(newFilters);
        onFilter?.(newFilters);
        // Reset pagination when removing filters
        setCurrentPage(1);
    };

    // Clear all filters
    const clearAllFilters = () => {
        setFilters([]);
        onFilter?.([]);
        // Reset pagination when clearing all filters
        setCurrentPage(1);
    };

    // Handle pagination
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const filterableColumns = columns.filter((col) => col.filterable);

    // Get column label by key
    const getColumnLabel = (key: string) => {
        return columns.find((col) => col.key === key)?.label || key;
    };

    // Get sort direction for a column
    const getSortDirection = (key: string) => {
        return sorts.find((s) => s.key === key)?.direction;
    };

    // Get appropriate operator based on column type
    const getOperatorForColumnType = (type?: string) => {
        switch (type) {
            case "number":
                return "equals";
            case "date":
                return "equals";
            case "select":
                return "equals";
            default:
                return "contains";
        }
    };

    return (
        <div className={classes.container}>
            {/* Header Tools */}
            <div className={classes.header}>
                <div className={classes.headerContent}>
                    {/* Search */}
                    <div className="">
                        <Input
                            className={classes.inputSearch}
                            placeholder="Buscar..."
                            icon="search"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    console.log(
                                        "Search for:",
                                        (e.target as HTMLInputElement).value
                                    );
                                    setSearchTerm((e.target as HTMLInputElement).value);
                                }
                            }}
                        />
                    </div>

                    {/* Create Button */}
                    {actions?.onCreate && (
                        <Button
                            className={classes.buttonAdd}
                            onClick={actions.onCreate}
                            size="large"
                            text={actionsText?.create || "Create"}
                            intent="primary"
                            icon={<Plus className={classes.iconAdd} />}
                            iconPosition="right"
                        />
                    )}
                </div>

                <div className={classes.filtresContainer}>
                    {/* Filter Dropdown */}
                    {filterableColumns.length > 0 && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    intent="outline"
                                    size="lg"
                                    icon={<ListFilterPlus className={classes.iconFilter} />}
                                    className={classes.buttonFilter}
                                    text="Filters"
                                    iconPosition="right"
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className={classes.drowpdownContent}
                            >
                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {filterableColumns.map((column) => (
                                    <DropdownMenuSub key={column.key}>
                                        <DropdownMenuSubTrigger className={classes.drowpdownTigger}>
                                            {column.label}
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuSubContent className={classes.drowpdownSubContent}>
                                            {column.options &&
                                                column.options.map((option) => (
                                                    <DropdownMenuCheckboxItem
                                                        className={classes.drowpdownItem}
                                                        key={option}
                                                        checked={filters.some(
                                                            (f) =>
                                                                f.key === column.key &&
                                                                f.value === option &&
                                                                f.operator ===
                                                                getOperatorForColumnType(column.type)
                                                        )}
                                                        onCheckedChange={() => {
                                                            const operator = getOperatorForColumnType(
                                                                column.type
                                                            );
                                                            handleFilter(column.key, option, operator);
                                                        }}
                                                    >
                                                        {option}
                                                    </DropdownMenuCheckboxItem>
                                                ))}
                                        </DropdownMenuSubContent>
                                    </DropdownMenuSub>
                                ))}
                                {filters.length > 0 && (
                                    <>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className={classes.drowpdownMenuItem}>
                                            <Button
                                                intent="primary"
                                                size="md"
                                                onClick={clearAllFilters}
                                                className={classes.clearFilters}
                                                text="Clear all filters"
                                            />
                                        </DropdownMenuItem>
                                    </>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            </div>

            {/* Active Filters */}
            {filters.length > 0 && (
                <div className={classes.filtersActive}>
                    {filters.map((filter, index) => (
                        <Badge
                            key={index}
                            intent="secondary"
                            className={classes.badgeFilter}
                            text={`${getColumnLabel(filter.key)}: ${filter.value}`}
                            trailingIcon={X}
                            onTrailingIconClick={() => clearFilter(index)}
                        />
                    ))}
                    <Button
                        intent="primary"
                        size="md"
                        onClick={clearAllFilters}
                        className={classes.clearAllFilters}
                        text="Clear all filters"
                    />
                </div>
            )}

            {/* Table */}
            <div className={classes.table}>
                <div className={classes.tableWrapper}>
                    <table className={classes.tableContent}>
                        <thead>
                            <tr className={classes.tableTr}>
                                {columns.map((column) => (
                                    <th
                                        key={column.key}
                                        className={classes.tableTh}
                                    >
                                        {column.sortable ? (
                                            <button
                                                onClick={() => handleSort(column.key)}
                                                className={classes.buttonSort}
                                            >
                                                {
                                                    column.type === "image" ? (
                                                        <Image className={classes.iconHeaderTable} />
                                                    ) : column.type === "file" ? (
                                                        <Folder className={classes.iconHeaderTable} />
                                                    ) : null
                                                }
                                                {column.label}
                                                <span className="ml-1">
                                                    {getSortDirection(column.key) === "asc" ? (
                                                        <ArrowUp className={classes.iconSort} />
                                                    ) : getSortDirection(column.key) === "desc" ? (
                                                        <ArrowDown className={classes.iconSort} />
                                                    ) : (
                                                        <ArrowUpDown className={classes.iconSort} />
                                                    )}
                                                </span>
                                            </button>
                                        ) : (
                                            column.label
                                        )}
                                    </th>
                                ))}
                                {/* Actions Column Header */}
                                {(actions?.onView || actions?.onEdit || actions?.onDelete) && (
                                    <th className={classes.tableTh}>
                                        Actions
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((row, index) => (
                                <tr
                                    key={index}
                                    className={classes.tableTr}
                                >
                                    {columns.map((column) => (
                                        column.component ? (
                                            <td className={classes.tableThRow}>
                                                {column.component(row)}
                                            </td>
                                        ) : (
                                            <td className={classes.tableThRow}>
                                                {column.type === "image" ? (
                                                    <img
                                                        src={row[column.key]}
                                                        alt={row[column.key]}
                                                        className={classes.avatar}
                                                    />
                                                ) : column.type === "file" ? (
                                                    <a
                                                        href={row[column.key]}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={classes.file}
                                                    >
                                                        {row[column.key]}
                                                    </a>
                                                ) : column.type === "number" ? (
                                                    row[column.key]
                                                ) : (
                                                    row[column.key]
                                                )}
                                            </td>
                                        )
                                    ))}
                                    {/* Row Actions */}
                                    {(actions?.onView ||
                                        actions?.onEdit ||
                                        actions?.onDelete) && (
                                            <td className={classes.tableThActions}>
                                                <div className={classes.contentActions}>
                                                    {actions?.onView && (
                                                        <TooltipItem tooltipsText={actionsText?.view || "View"} position="top">
                                                            <Button
                                                                className={classes.buttonAction}
                                                                intent="ghost"
                                                                size="md"
                                                                icon={<Eye className={classes.iconView} />}
                                                                iconPosition="center"
                                                                onClick={() => actions.onView?.(row)}
                                                            />
                                                        </TooltipItem>
                                                    )}
                                                    {actions?.onEdit && (
                                                        <TooltipItem tooltipsText={actionsText?.edit || "Edit"} position="top">
                                                            <Button
                                                                className={classes.buttonAction}
                                                                intent="ghost"
                                                                size="md"
                                                                icon={<Pencil className={classes.iconEdit} />}
                                                                iconPosition="center"
                                                                onClick={() => actions.onEdit?.(row)}
                                                            />
                                                        </TooltipItem>
                                                    )}
                                                    {actions?.onDelete && (
                                                        <TooltipItem tooltipsText={actionsText?.delete || "Delete"} position="top">
                                                            <Button
                                                                className={classes.buttonAction}
                                                                intent="ghost"
                                                                size="md"
                                                                icon={<Trash2 className={classes.iconDelete} />}
                                                                iconPosition="center"
                                                                onClick={() => actions.onDelete?.(row)}
                                                            />
                                                        </TooltipItem>
                                                    )}
                                                </div>
                                            </td>
                                        )}
                                </tr>
                            ))}
                            {currentData.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={(columns.length || 1) + 1}
                                        className={classes.tableNotFound}
                                    >
                                        <span className={classes.notFound}>
                                            <LayoutList className={classes.iconNotFound} /> No data found
                                        </span>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className={classes.footer}>
                    <div className={classes.footerInfo}>
                        Showing {startIndex + 1} to{" "}
                        {Math.min(endIndex, filteredData.length)} of {filteredData.length}{" "}
                        record
                    </div>
                    <div className={classes.pagination}>
                        <Button
                            className={classes.buttonPaginate}
                            intent="primary"
                            size="md"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            text="Previous"
                        />
                        <div className={classes.infoPaginate}>
                            Page {currentPage} of {totalPages}
                        </div>
                        <Button
                            className={classes.buttonPaginate}
                            intent="primary"
                            size="md"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            text="Next"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

// Export 
export default DataTable;