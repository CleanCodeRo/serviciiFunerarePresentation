import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {

  
  try {

    // Get the user ID from the request
    const { userId } = auth();
    // Get the request body
    const body = await req.json();
    // Destructure the request body
    const {
      name,
      price,
      description,
      images,
      isFeatured,
      isArchived,
    } = body;

    // Check if the user is authenticated
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    if (!images || !images.length) {
      return new NextResponse("At least one image is required", {
        status: 400,
      });
    }
    if (price < 0) {
      return new NextResponse("Price cannot be negative", { status: 400 });
    }
    if (!price) {
      return new NextResponse("Price is required", { status: 400 });
    }
    if(!description) {
      return new NextResponse("Description is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store ID is required", { status: 400 });
    }

    // Find the store by the user ID
    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    // Create the product
    const service = await prismadb.services.create({
      data: {
        name,
        price,
        description,
        isFeatured,
        isArchived,
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
        storeId: params.storeId,
      },
    });

    return new NextResponse(JSON.stringify(service), { status: 201 });
  } catch (error) {
    console.error("[SERVICE_POST_ERROR]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { searchParams } = new URL(req.url);
    const isFeatured = searchParams.get("isFeatured");

    if (!params.storeId) {
      return new NextResponse("Store ID is required", { status: 400 });
    }

    const services = await prismadb.services.findMany({
      where: {
        storeId: params.storeId,
        description: { not: ""},
        isFeatured: isFeatured ? true : undefined,
        isArchived: false,
      },
      include: {
        images: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return new NextResponse(JSON.stringify(services), { status: 200 });
  } catch (error) {
    console.error("[SERVICE_GET_ERROR]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
