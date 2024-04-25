import { NextRequest, NextResponse } from "next/server";
import { getProductsSlice } from "@/app/_utilities/dbRequests/dbRequests";

// Get products for given page
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;
  const category = searchParams.get('category');

	const productsSliceData = await getProductsSlice(page, 4, (category ?? undefined));

	return NextResponse.json(productsSliceData, { status: 200 });
}