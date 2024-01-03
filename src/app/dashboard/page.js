import Link from "next/link";
import LeftSideBar from "@/components/LeftSidebar";
import UserManagementTable from "@/components/UserManagementTable";

export default function page() {
  return (
    <div className="flex w-full">
      <adminLeftSideBar />
      <UserManagementTable />
    </div>
  );
}
