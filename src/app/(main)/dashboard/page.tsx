import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="grid h-screen grid-cols-3 gap-6">
      <div className="col-span-2">
        <Card className="flex h-64 rounded-4xl">
          <CardContent>
            <p>Ok</p>
          </CardContent>
        </Card>
        <div className="mb-6 flex w-full gap-6">
          <Card className="mt-6 flex h-32 w-full rounded-4xl">
            <CardContent>
              <p>Card 1</p>
            </CardContent>
          </Card>
          <Card className="mt-6 flex h-32 w-full rounded-4xl">
            <CardContent>
              <p>Card 2</p>
            </CardContent>
          </Card>
          <Card className="mt-6 flex h-32 w-full rounded-4xl">
            <CardContent>
              <p>Card 3</p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="flex w-full items-center justify-between">
            <h3 className="text-3xl font-bold">Additional Title</h3>
            <div className="flex gap-2">
              <Button
                className="h-full w-full flex-1 rounded-full p-3"
                variant="outline"
                size={"icon"}
              >
                <ChevronLeft />
              </Button>
              <Button
                className="h-full w-full flex-1 rounded-full p-3"
                variant="outline"
                size={"icon"}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
          <Card className="min-h-[300px] rounded-4xl">
            <CardContent>
              <p>Additional content here</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="col-span-1">
        <Card className="flex h-full flex-col items-center rounded-4xl">
          <CardContent>
            <p className="text-2xl">
              Welcome {session?.user?.name || "Guest"}!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
