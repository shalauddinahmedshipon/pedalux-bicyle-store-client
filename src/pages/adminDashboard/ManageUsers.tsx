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
import { useGetAllUsersQuery } from "@/redux/features/users/userApi";
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

export type TUser= {
  _id?: string;
  name: string;
  email: string;
  password: string;
  passwordChangedAt?: Date;
  status?: 'active' | 'deactivated';
  role?:  "admin" | "customer";
  isDeleted?:boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const ManageUsers = () => {
  const [page,setPage]=useState(1);
  const limit =4
  const {data:userData,isLoading}=useGetAllUsersQuery({page,limit});
  if(isLoading)return <div className="w-full h-full left-[5%] fixed"> <Loader/></div>
  return (
    <div >
     <div className="ml-10 mt-10">
<Table className="overflow-auto">
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
            <TableCell >
              
<label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
</label>
            </TableCell>
            <TableCell className="flex gap-3 items-center">
            <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Change Role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{user.role}</SelectLabel>
          <SelectItem value={user.role==="admin"?"customer":"admin"}>{user.role==="admin"?"customer":"admin"}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </TableCell>
            <TableCell ><span className="text-xl text-red-600"><AiOutlineDelete /></span></TableCell>
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