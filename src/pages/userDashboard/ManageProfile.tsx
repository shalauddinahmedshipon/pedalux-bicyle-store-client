import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-menubar";

const ManageProfile = () => {
  return (
    <div>
       <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label >Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label >Framework</Label>
             
            </div>
          </div>
        </form>
      </CardContent>
      <div className="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
      </div>
      {/* <CardFooter >
      
      </CardFooter> */}
    </Card>
    </div>
  );
};

export default ManageProfile;