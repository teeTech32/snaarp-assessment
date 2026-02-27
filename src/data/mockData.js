import { AiOutlineUser } from "react-icons/ai"
import { PiUsersThree, PiUsersFour, PiUpload } from "react-icons/pi";

export const initialWidgets = [
  { id: "users", type: "users" },
  { id: "storage", type: "storage" },
  { id: "files", type: "files" },
];

export const kpiData = [
  {
    id: "users",
    title: "Users",
    value: 3836,
    trend: -15,
    color: "red",
    analysis: "Compared to last week",
    icon: AiOutlineUser,
    data: [24, 19, 18, 10, 7, 2],
  },
  {
    id: "groups",
    title: "Groups",
    value: 316,
    trend: 23,
    color: "green",
    analysis: "Compared to last week",
    icon: PiUsersThree ,
    data: [24, 19, 18, 10, 7, 2],
  },
  {
    id: "uploads",
    title: "Uploads",
    value: 316,
    trend: 23,
    color: "green",
    analysis: "Compared to last week",
    icon: PiUpload,
    data: [24, 19, 18, 10, 7, 2],
  },
  {
    id: "departments",
    title: "Departments",
    value: 316,
    trend: -23,
    color: "red",
    analysis: "Compared to last week",
    icon: PiUsersFour,
    data: [24, 19, 18, 10, 7, 2],
  },
];

export const storageData = {
  total: 1000,
  used: 800,
  breakdown: [
    { name: "Files", value: 90, color: "#8b5cf6" },
    { name: "Folders", value:170 , color: "#f59e0b" },
    { name: "Videos", value: 190, color: "#10b981" },
    { name: "Apps", value: 190, color: "#3b82f6" },
    { name: "Audios", value: 100, color: "#ef4444" },
    { name: "Miscellaneous", value: 80, color: "#6366f1" },
    { name: "Available Space", value: 180, color: "#e5e7eb" },
  ],
};

export const fileSharingData = [
  { name: "JAN", value: 40 },
  { name: "FEB", value: 30 },
  { name: "MAR", value: 50 },
  { name: "APR", value: 70 },
  { name: "MAY", value: 60 },
  { name: "JUN", value: 90 },
  { name: "JUL", value: 90 },
  { name: "AUG", value: 90 },
  { name: "SEP", value: 40 },
  { name: "OCT", value: 90 },
  { name: "NOV", value: 90 },
  { name: "DEC", value: 90 },
  
];