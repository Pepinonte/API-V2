import { Request, Response } from "express";
import Item from "../../models/item";
import * as itemValidation from "../../validation/item/put.validation";

export async function updateById(req: Request, res: Response) {
  const { body } = req;
  const { error } = itemValidation.updateById(body);
  if (error) return res.status(401).json(error.details[0].message);
  Item.update(body, { where: { item_id: body.item_id } })
    .then((item) => {
      res.status(200).json({ msg: `item with id ${body.item_id} updated`, item });
    })
    .catch((err) => res.status(400).json(err));
}

export async function updateByName(req: Request, res: Response) {
  const { body } = req;
  const { error } = itemValidation.updateByName(body);
  if (error) return res.status(401).json(error.details[0].message);
  Item.update(body, { where: { item_name: body.item_name } })
    .then((item) => {
      res.status(200).json({ msg: `item with name ${body.item_name} updated`, item });
    })
    .catch((err) => res.status(400).json(err));
}
