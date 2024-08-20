"use client"

import Image from "next/image"
import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { statuses, qualities } from "@/app/drafting/data/data"
import { Athlete, Company } from "@/app/drafting/data/schema"
import { DataTableColumnHeader } from "@/app/drafting/components/data-table-column-header"
import { DataTableRowActions } from "@/app/drafting/components/data-table-row-actions"



export const athleteColumns: ColumnDef<Athlete>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            /> 
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Athlete" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium">
                        
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button variant="outline">{row.getValue("name")}</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <div className="mx-auto w-full max-w-sm">
                                    <DrawerTitle>{row.getValue("name")}</DrawerTitle>
                                    <DrawerDescription>{row.getValue("description")}</DrawerDescription>
                                    <div className="flex justify-center p-4">
                                        <Image
                                            src={'/images/athletes/default.jpg'}
                                            alt={'picture of the athlete ' + row.getValue("name")}
                                            width={300}
                                            height={300}
                                            className="rounded"
                                        />
                                    </div>
                                    <DrawerFooter>
                                        <Button>Draft</Button>
                                        <DrawerClose asChild>
                                            <Button variant="outline">Close</Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </div>
                            </DrawerContent>
                        </Drawer>

                    </span>
                </div>
            )
        },
        enableHiding: false,
    },
    {
        accessorKey: "description",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Description"/>
        ),
        cell: ({ row }) => {
            return(
                <span className="max-w-[500px] truncate font-medium">
                    {row.getValue("description")}
                </span>
            )
        },
        enableSorting: false,
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status"/>
        ),
        cell: ({ row }) => {
            const status = statuses.find(
                (status) => status.value === row.getValue("status")
            )

            if (!status) return null

            return (
                <div className="flex w-[100px] items-center">
                    {status.icon && (
                        <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{status.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "quality",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Quality"/>
        ),
        cell: ({ row }) => {
            const quality = qualities.find(
                (quality) => quality.value === row.getValue("quality")
            )

            if (!quality) return null

            return (
                <div className="flex w-[100px] items-center">
                    {quality.icon && (
                        <quality.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{quality.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]


export const companyColumns: ColumnDef<Company>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            /> 
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Company" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => {
            <div className="flex space-x-2">
                <span className="max-w-[500px] truncate font-medium">
                    {row.getValue("name")}
                </span>
            </div>
        },
        enableHiding: false,
    },
    {
        accessorKey: "description",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Description"/>
        ),
        cell: ({ row }) => {
                <span className="max-w-[500px] truncate font-medium">
                    {row.getValue("description")}
                </span>
        },
        enableSorting: false,
    },
    {
        accessorKey: "quality",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Quality"/>
        ),
        cell: ({ row }) => {
            const quality = qualities.find(
                (quality) => quality.value === row.getValue("quality")
            )

            if (!quality) return null

            return (
                <div className="flex w-[100px] items-center">
                    {quality.icon && (
                        <quality.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{quality.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]
