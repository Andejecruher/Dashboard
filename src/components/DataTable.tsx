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
} from "lucide-react";

export interface Column {
    key: string;
    label: string;
    sortable?: boolean;
    filterable?: boolean;
    type?: "text" | "select" | "date" | "number" | "image" | "file";
    options?: string[];
    autoIncrement?: boolean;
    component?: (row: any) => JSX.Element;
}

interface Sort {
    key: string;
    direction: "asc" | "desc";
}

interface Filter {
    key: string;
    operator: string;
    value: string;
}

interface RowActions<T> {
    onView?: (row: T) => void;
    onEdit?: (row: T) => void;
    onDelete?: (row: T) => void;
    onCreate?: () => void;
}

interface RowActionsText {
    view?: string;
    edit?: string;
    delete?: string;
    create?: string;
}

interface DataTableProps<T = any> {
    data: T[];
    columns: Column[];
    itemsPerPage?: number;
    onSort?: (sorts: Sort[]) => void;
    onFilter?: (filters: Filter[]) => void;
    actions?: RowActions<T>;
    actionsText?: RowActionsText;
}

export default function DataTable({
    data = [],
    columns = [],
    itemsPerPage = 10,
    onSort,
    onFilter,
    actions,
    actionsText,
}: DataTableProps) {
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
        <div className="w-full space-y-4">
            {/* Header Tools */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="">
                        <Input
                            className="border-1 border-grey-300 h-[45px]"
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
                            className="rounded-md"
                            onClick={actions.onCreate}
                            size="large"
                            text={actionsText?.create || "Create"}
                            intent="primary"
                            icon={<Plus className="h-4 w-4 mr-2" />}
                            iconPosition="right"
                        />
                    )}
                </div>

                <div className="flex items-center gap-2 z-2">
                    {/* Filter Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                intent="outline"
                                size="lg"
                                icon={<ListFilterPlus className="w-4 h-4 text-gray-800" />}
                                className="w-auto p-2 rounded-full border border-gray-400 bg-white"
                                text="Filters"
                                iconPosition="right"
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            className="w-full bg-white shadow-lg rounded-md"
                        >
                            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {filterableColumns.map((column) => (
                                <DropdownMenuSub key={column.key}>
                                    <DropdownMenuSubTrigger className="text-base text-black">
                                        {column.label}
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuSubContent className="bg-white shadow-lg rounded-md text-base">
                                        {column.options &&
                                            column.options.map((option) => (
                                                <DropdownMenuCheckboxItem
                                                    className="text-base"
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
                                    <DropdownMenuItem className="justify-center text-muted-foreground">
                                        <Button
                                            intent="primary"
                                            size="md"
                                            onClick={clearAllFilters}
                                            className="h-7 px-2 text-base rounded-md"
                                            text="Clear all filters"
                                        />
                                    </DropdownMenuItem>
                                </>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Active Filters */}
            {filters.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                    {filters.map((filter, index) => (
                        <Badge
                            key={index}
                            intent="secondary"
                            className="flex items-center gap-1 px-3 py-1 hover:bg-secondary/80"
                            text={`${getColumnLabel(filter.key)}: ${filter.value}`}
                            trailingIcon={X}
                            onTrailingIconClick={() => clearFilter(index)}
                        />
                    ))}
                    <Button
                        intent="primary"
                        size="md"
                        onClick={clearAllFilters}
                        className="text-xs rounded-md"
                        text="Clear all filters"
                    />
                </div>
            )}

            {/* Table */}
            <div className="rounded-md border overflow-auto">
                <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="border-b bg-muted/50">
                                {columns.map((column) => (
                                    <th
                                        key={column.key}
                                        className="px-4 py-3 text-left text-sm font-medium text-gray-500"
                                    >
                                        {column.sortable ? (
                                            <button
                                                onClick={() => handleSort(column.key)}
                                                className="inline-flex items-center gap-1 hover:text-primary"
                                            >
                                                {
                                                    column.type === "image" ? (
                                                        <Image className="h-6 w-6" />
                                                    ) : column.type === "file" ? (
                                                        <Folder className="h-6 w-6" />
                                                    ) : null
                                                }
                                                {column.label}
                                                <span className="ml-1">
                                                    {getSortDirection(column.key) === "asc" ? (
                                                        <ArrowUp className="h-4 w-4" />
                                                    ) : getSortDirection(column.key) === "desc" ? (
                                                        <ArrowDown className="h-4 w-4" />
                                                    ) : (
                                                        <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
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
                                    <th className="px-4 py-3 text-center text-sm font-medium">
                                        Actions
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((row, index) => (
                                <tr
                                    key={index}
                                    className="border-b last:border-none hover:bg-muted/50"
                                >
                                    {columns.map((column) => (
                                        column.component ? (
                                            <td className="px-4 py-3 text-base text-black">
                                                {column.component(row)}
                                            </td>
                                        ) : (
                                            <td className="px-4 py-3 text-base text-black">
                                                {column.type === "image" ? (
                                                    <img
                                                        src={row[column.key]}
                                                        alt={row[column.key]}
                                                        className="w-8 h-8 rounded-full"
                                                    />
                                                ) : column.type === "file" ? (
                                                    <a
                                                        href={row[column.key]}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-500"
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
                                            <td className="px-4 py-3 text-sm text-right">
                                                <div className="flex items-center justify-center">
                                                    {actions?.onView && (
                                                        <TooltipItem tooltipsText={actionsText?.view || "View"} position="top">
                                                            <Button
                                                                className="border-none w-4 hover:bg-gray-200 rounded-full"
                                                                intent="ghost"
                                                                size="md"
                                                                icon={<Eye className="h-5 w-5 text-blue" />}
                                                                iconPosition="center"
                                                                onClick={() => actions.onView?.(row)}
                                                            />
                                                        </TooltipItem>
                                                    )}
                                                    {actions?.onEdit && (
                                                        <TooltipItem tooltipsText={actionsText?.edit || "Edit"} position="top">
                                                            <Button
                                                                className="border-none w-4 hover:bg-gray-200 rounded-full"
                                                                intent="ghost"
                                                                size="md"
                                                                icon={<Pencil className="h-5 w-5 text-green" />}
                                                                iconPosition="center"
                                                                onClick={() => actions.onEdit?.(row)}
                                                            />
                                                        </TooltipItem>
                                                    )}
                                                    {actions?.onDelete && (
                                                        <TooltipItem tooltipsText={actionsText?.delete || "Delete"} position="top">
                                                            <Button
                                                                className="border-none w-4 hover:bg-gray-200 rounded-full"
                                                                intent="ghost"
                                                                size="md"
                                                                icon={<Trash2 className="h-5 w-5 text-red-600" />}
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
                                        colSpan={columns.length}
                                        className="px-4 py-8 text-center text-sm text-muted-foreground"
                                    >
                                        No results found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between">
                    <div className="text-base text-muted-foreground">
                        Showing {startIndex + 1} to{" "}
                        {Math.min(endIndex, filteredData.length)} of {filteredData.length}{" "}
                        record
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            className="rounded-md"
                            intent="primary"
                            size="md"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            text="Previous"
                        />
                        <div className="text-base text-muted-foreground">
                            Page {currentPage} of {totalPages}
                        </div>
                        <Button
                            className="rounded-md"
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
