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
import { ScrollArea } from "@/components/ui/scroll-area"

import { statuses, qualities } from "@/app/drafting/data/data"
import { Athlete} from "@/app/drafting/data/schema"
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
        accessorKey: "athlete_id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Athlete ID" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("athlete_id")}</div>,
        enableHiding: false,
    },
    {
        accessorFn: (row) => `${row.first_name} ${row.last_name}`,
        id: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => {
            const rowData = row.original
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium">
                        
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button variant="outline">{rowData.first_name + " " + rowData.last_name}</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <div className="mx-auto w-full max-w-2xl">
                                    <DrawerHeader>
                                        <DrawerTitle>{rowData.first_name + " " + rowData.last_name}</DrawerTitle>
                                        <DrawerDescription>
                                            Information Overview
                                        </DrawerDescription>
                                    </DrawerHeader>
                                    <div className="flex flex-col items-center">
                                        <div className="flex p-4 space-x-4">
                                            <Image
                                                src={'/images/athletes/default.jpg'}
                                                alt={'picture of the athlete ' + rowData.first_name + rowData.last_name}
                                                width={300}
                                                height={300}
                                                className="rounded"
                                            />
                                            <div>
                                                <p>{"sport: " + row.getValue("sport")}
                                                <br />
                                                media presence: 8 mio</p>
                                                <h2>Description</h2>
                                                <ScrollArea className="h-[200px]">
                                                    {rowData.description}
                                                </ScrollArea>
                                            </div>

                                        </div>
                                        <DrawerFooter className="w-full max-w-sm">
                                            <Button className="w-full max-w-sm">Draft</Button>
                                            <DrawerClose asChild>
                                                <Button variant="outline" className="w-full">Close</Button>
                                            </DrawerClose>
                                        </DrawerFooter>

                                    </div>
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
        accessorKey: "sport",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Sport"/>
        ),
        cell: ({ row }) => {
            return(
                <span className="max-w-[100px] truncate font-medium">
                    {row.getValue("sport")}
                </span>
            )
        },
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

            if (!status) {
                return null
            }

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
