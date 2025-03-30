import Loader from "@/components/share/Loader";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useChangeUserStatusMutation, useDeleteUserMutation, useGetAllUsersQuery, useUpdateUserRoleMutation } from "@/redux/features/users/userApi";
import { AiOutlineDelete } from "react-icons/ai";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Pagination from "@/components/share/Pagination";
import { useState } from "react";
import { InputSelect } from "@/components/share/InputSelect";
import { toast } from "sonner";
import { TUser } from "@/components/types/User.types";
import { roleOptions, statusOptions } from "@/utils/filterOptions";


const ManageUsers = () => {
  const [page,setPage]=useState(1);
  const [currentRole,setCurrentRole]=useState("");
  const [selectedRoles, setSelectedRoles] = useState<{ [key: string]: string }>({});
  const [userStatuses, setUserStatuses] = useState<Record<string, "active" | "deactivated">>({});
  const [refreshKey, setRefreshKey] = useState(0);
  const [currentStatus,setCurrentStatus]=useState("");
  const limit =10
  const {data:userData,isLoading}=useGetAllUsersQuery({page,limit,filters:{
    role:currentRole,status:currentStatus
  }});
  const [deleteAction]=useDeleteUserMutation();
  const [updateRole]=useUpdateUserRoleMutation();
  const [updateStatus]=useChangeUserStatusMutation();

const handleDelete=async(id:string)=>{
  toast("Are you sure you want to delete?", {
    action: {
      label: "Confirm",
      onClick: async() => {
        const toastId = toast.loading("Deleting...");
    try {
      const res=await deleteAction(id).unwrap();
      toast.success(res.message,{id:toastId})
    } catch (error:any) {
      toast.error(error.message||"Failed to delete!", { id: toastId, duration: 3000 })
    }

      },
    },
    cancel: {
      label: "Cancel",
      onClick: () => toast.info("Deletion canceled"),
    },
  });
}
const handleRoleChange=async(userId:string,role:string)=>{
  const id=toast.loading("Updating...")
try {
  console.log(userId,role)
  const res =await updateRole({userId,role:role}).unwrap();
toast.success(res.message,{id})
setSelectedRoles((prev) => ({ ...prev, [userId]: role }));
setRefreshKey((prev) => prev + 1);
} catch (error:any) {
  toast.error(error.data.message||"failed to update",{id})
}
}
const handleStatusChange = async (userId: string, currentStatus: "active" | "deactivated") => {
  const newStatus = currentStatus === "active" ? "deactivated" : "active";
  const toastId = toast.loading("Updating status...");
  try {
    const res = await updateStatus({ userId, status: newStatus }).unwrap();
    toast.success(res.message, { id: toastId });
    setUserStatuses((prev) => ({ ...prev, [userId]: newStatus }));
    setRefreshKey((prev) => prev + 1);
  } catch (error: any) {
    toast.error(error.data?.message || "Failed to update status", { id: toastId });
  }
};

 if(isLoading)return <div className="w-full h-full left-[5%] fixed"> <Loader/></div>
  return (
    <div className="w-full">
     <div className=" mx-10 mt-10">
<header className="flex flex-col lg:flex-row items-stretch justify-between gap-5 mb-8 w-full">
  <h3 className="text-2xl font-semibold text-black">User Management</h3>
 <div className="flex items-center gap-5">
  
    {/* filter by brand  */}
    <div >
  <InputSelect label="Filter by Role" options={roleOptions} onSelected={setCurrentRole}/>
  </div>
   {/* filter by status  */}
   <div >
  <InputSelect label="Filter by Status" options={statusOptions} onSelected={setCurrentStatus}/>
  </div>
 </div>
</header>

<Table key={refreshKey} className="overflow-auto">
  <TableCaption>A list of users</TableCaption>
  <TableHeader>
    <TableRow >
      <TableHead className="w-[150px]">Name</TableHead>
      <TableHead className="w-[200px]">Email</TableHead>
      <TableHead className="w-[150px]">Role</TableHead>
      <TableHead className="w-[150px]">Status</TableHead>
      <TableHead className="w-[200px]">Update Status</TableHead>
      <TableHead className="w-[200px]">Update Role</TableHead>
      <TableHead className="w-[150px]">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {userData?.data?.map((user:TUser) => (
          <TableRow key={user._id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="pr-14"><span className={`px-2 border flex items-center justify-center rounded-full ${user.role==="admin"?"bg-blue-50 text-blue-500":"bg-rose-50 text-rose-500"}`}>{user.role}</span></TableCell>
            <TableCell className="flex gap-3 items-center"><div className={`w-3 h-3 rounded-full ${user.status==="active"?"bg-green-500":"bg-red-500"}`}></div>{user.status}</TableCell>

            {/* update status change  */}
            <TableCell >
              
            <label className="inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    className="sr-only peer"
    checked={(userStatuses[user._id!] ?? user.status) === "active"}
    onChange={() => handleStatusChange(user._id as string, user.status!)}
  />
  <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
</label>

            </TableCell>

                   {/* update role cell */}
            <TableCell className="flex gap-3 items-center">
            <Select onValueChange={(value)=>handleRoleChange(user._id as string,value)}>
      <SelectTrigger  className="w-[180px]">
      <SelectValue placeholder={selectedRoles[user._id!] ?? user.role ?? "Change Role"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{user.role}</SelectLabel>
          <SelectItem value={user.role==="admin"?"customer":"admin"}>{user.role==="admin"?"customer":"admin"}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </TableCell>
            <TableCell ><span onClick={()=>handleDelete(user._id as string)} className="text-xl text-red-600 active:scale-95"><AiOutlineDelete /></span></TableCell>
          </TableRow>
        ))}
  </TableBody>
</Table>

 {/* pagination  */}
 <div className="my-14">
 <Pagination
        currentPage={page} 
        totalPages={userData?.meta?.totalPage} 
        onPageChange={setPage} 
      />
 </div>
     </div>
      

    </div>
  );
};

export default ManageUsers;