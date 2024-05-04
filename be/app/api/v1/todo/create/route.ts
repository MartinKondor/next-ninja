import { NextResponse, NextRequest } from "next/server"
import { DEFAULT_ERROR_MESSAGE } from "@/../shared/strings";

/**
 * 
 * @param req Create a todo list
 * @returns 
 */
export const POST = (req: NextRequest) => {
    try {
        return NextResponse.json({status: true});
    }
    catch (error: Error) {
        return NextResponse.json({
            status: false,
            message: error.message ?? DEFAULT_ERROR_MESSAGE
        });
    }
}
