import { NextResponse } from "next/server";
export const runtime = "edge";
// import { revalidatePath } from 'next/cache'

export type RevalidateResponse = {
    revalidated: boolean;
    now: number;
}

export async function GET() {
  try {
    // Trigger a revalidation of the /revalidate-on-demand page
    // revalidatePath("/revalidate-on-demand");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        revalidated: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
} 