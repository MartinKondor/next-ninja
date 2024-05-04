import { NextResponse, NextRequest } from "next/server"
import { DEFAULT_ERROR_MESSAGE } from "@/../shared/strings";

/**
 * 
 * @param req Get a todo list, make sure the user is authenticated
 * @returns 
 */
export const GET = (req: NextRequest) => {
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

/**
 * 
 * @param req Modify a todo list, make sure the user is authenticated
 * @returns 
 */
export const PUT = (req: NextRequest) => {
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

/**
 * 
 * @param req Delete a todo list, make sure the user is authenticated
 * @returns 
 */
export const DELETE = (req: NextRequest) => {
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
