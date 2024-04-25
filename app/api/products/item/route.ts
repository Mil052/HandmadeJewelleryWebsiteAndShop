import { NextRequest, NextResponse } from "next/server";
import { getProductData } from "@/app/_utilities/dbRequests/dbRequests";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
  }

	const singleProductData = await getProductData(parseInt(id));
  
  return NextResponse.json(singleProductData, { status: 200 });
}