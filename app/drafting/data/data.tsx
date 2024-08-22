import {
    ArrowUpIcon,
    ArrowRightIcon,
    ArrowDownIcon,
    CheckIcon,
    Cross2Icon,
} from "@radix-ui/react-icons"

export const statuses = [
    {
        value: "true",
        label: "Available",
        icon: CheckIcon,
    },
    {
        value: "false",
        label: "Unavailable",
        icon: Cross2Icon,
    }
]

export const qualities = [
    {
        label: "Low",
        value: "low",
        icon: ArrowDownIcon,
    },
    {
        label: "Medium",
        value: "medium",
        icon: ArrowRightIcon,

    },
    {
        label: "High",
        value: "high",
        icon: ArrowUpIcon,

    },
]
