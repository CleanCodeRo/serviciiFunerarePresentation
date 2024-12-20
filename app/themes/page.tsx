import { GridBackgroundDemo } from "@/components/GridBackgroundDemo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ThemesPage = () => {
  return (
    <div className="h-full flex flex-wrap items-center justify-center bg-gray-900">
      <div className="grid grid-cols-1 4xs:w-[90%] 4xs:mt-5 4xs:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:my-10">
        <Card className="">
          <CardHeader>
            <CardTitle>Theme 1</CardTitle>
            <CardDescription>The first theme</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/placeholder.webp"
              alt="Placeholder"
              width={400}
              height={200}
              className="mx-auto rounded-md"
            />
          </CardContent>
          <CardFooter>
            <Link href="/themes/theme1" className="w-full">
              <Button className="w-full">Theme 1</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Theme 2</CardTitle>
            <CardDescription>The first theme</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/placeholder.webp"
              alt="Placeholder"
              width={400}
              height={200}
              className="mx-auto rounded-md"
            />
          </CardContent>
          <CardFooter>
            <Link href="/themes/theme2" className="w-full">
              <Button className="w-full">Theme 2</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Theme 3</CardTitle>
            <CardDescription>The first theme</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/placeholder.webp"
              alt="Placeholder"
              width={400}
              height={200}
              className="mx-auto rounded-md"
            />
          </CardContent>
          <CardFooter>
            <Link href="/themes/theme3" className="w-full">
              <Button className="w-full">Theme 3</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Theme 1</CardTitle>
            <CardDescription>The first theme</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/placeholder.webp"
              alt="Placeholder"
              width={400}
              height={200}
              className="mx-auto rounded-md"
            />
          </CardContent>
          <CardFooter>
            <Link href="/themes/theme2" className="w-full">
              <Button className="w-full">Theme 2</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Theme 1</CardTitle>
            <CardDescription>The first theme</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/placeholder.webp"
              alt="Placeholder"
              width={400}
              height={200}
              className="mx-auto rounded-md"
            />
          </CardContent>
          <CardFooter>
            <Link href="/themes/theme2" className="w-full">
              <Button className="w-full">Theme 2</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Theme 1</CardTitle>
            <CardDescription>The first theme</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/placeholder.webp"
              alt="Placeholder"
              width={400}
              height={200}
              className="mx-auto rounded-md"
            />
          </CardContent>
          <CardFooter>
            <Link href="/themes/theme2" className="w-full">
              <Button className="w-full">Theme 2</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Theme 1</CardTitle>
            <CardDescription>The first theme</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/placeholder.webp"
              alt="Placeholder"
              width={400}
              height={200}
              className="mx-auto rounded-md"
            />
          </CardContent>
          <CardFooter>
            <Link href="/themes/theme2" className="w-full">
              <Button className="w-full">Theme 2</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Theme 1</CardTitle>
            <CardDescription>The first theme</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/placeholder.webp"
              alt="Placeholder"
              width={400}
              height={200}
              className="mx-auto rounded-md"
            />
          </CardContent>
          <CardFooter>
            <Link href="/themes/theme2" className="w-full">
              <Button className="w-full">Theme 2</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Theme 1</CardTitle>
            <CardDescription>The first theme</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/placeholder.webp"
              alt="Placeholder"
              width={400}
              height={200}
              className="mx-auto rounded-md"
            />
          </CardContent>
          <CardFooter>
            <Link href="/themes/theme2" className="w-full">
              <Button className="w-full">Theme 2</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Theme 1</CardTitle>
            <CardDescription>The first theme</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/placeholder.webp"
              alt="Placeholder"
              width={400}
              height={200}
              className="mx-auto rounded-md"
            />
          </CardContent>
          <CardFooter>
            <Link href="/themes/theme2" className="w-full">
              <Button className="w-full">Theme 2</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ThemesPage;
