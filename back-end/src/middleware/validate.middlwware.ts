import { NextFunction, Request, Response } from "express";
import type { responseDate } from "@/types";

export const validateBody =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    const validatorResult = schema.validate(req.body);
    if (validatorResult.error) {
      const response: responseDate = {
        success: false,
        data: "",
        message: validatorResult.error.details[0].message,
      };
      return res.status(400).json(response);
    }
    next();
  };
