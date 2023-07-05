import { Request, Response } from "express";
import Item from "../../models/item";
import itemValidation from "../../validation/itemValidation";

export async function createOne(req: Request, res: Response) {
  const { body } = req;
  console.log(body);
  const { error } = itemValidation(body);
  if (error) return res.status(401).json(error.details[0].message);

  Item.create({ ...body })
    .then((product) => {
      res.status(201).json({ msg: "product created", product });
    })
    .catch((err) =>
      res.status(400).json({ msg: `error creating product ${err}` }),
    );
}
