import { NextResponse } from "next/server";
import products from "@/data/products.json";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = products.products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return NextResponse.json(product);
}
