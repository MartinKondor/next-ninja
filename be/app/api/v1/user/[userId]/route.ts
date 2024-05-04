import { NextResponse, NextRequest } from "next/server"
import { DEFAULT_ERROR_MESSAGE } from "@/../shared/strings";

/**
 * 
 * @param req Get a user
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
 * @param req Modify a user
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
 * @param req Delete a user
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
