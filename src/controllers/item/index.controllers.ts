import { Request, Response } from "express";

export async function indexWelcome(req: Request, res: Response) {
  res.send("Hello World");
}

export async function indexWelcome2(req: Request, res: Response) {
  res.send("Hello World2");
}
