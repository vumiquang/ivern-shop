import { NextFunction } from "express";
import { responseDate } from "@/types";

export const registerUserController = (
  req,
  res,
  next
): responseDate | NextFunction => {
  return res.status(200).json(req.body);
};
