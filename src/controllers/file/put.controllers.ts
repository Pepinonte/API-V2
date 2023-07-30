import { Request, Response } from "express";
import File from "../../models/file";
import * as fileValidation from "../../validation/file/put.validation";

export async function updateById(req: Request, res: Response) {
  const { params } = req;
  const { body } = req;
  const { error } = fileValidation.updateById(body);
  if (error)
    return res.status(401).json({ error: true, msg: error.details[0].message });
  File.update(body, { where: { file_id: params.id } })
    .then((file) => {
      if (file[0] === 0) {
        return res
          .status(400)
          .json({
            error: true,
            msg: `file with id ${params.id} not found or element(s) provided are identical`,
          });
      }
      res.status(200).json({ msg: `file with id ${params.id} updated`, file });
    })
    .catch((err) => res.status(400).json({ error: true, msg: err }));
}

export async function updateByName(req: Request, res: Response) {
  const { params } = req;
  const { body } = req;
  const { error } = fileValidation.updateByName(body);
  if (error)
    return res.status(401).json({ error: true, msg: error.details[0].message });
  File.update(body, { where: { file_name: params.name } })
    .then((file) => {
      if (file[0] === 0) {
        return res
          .status(400)
          .json({
            error: true,
            msg: `file with name ${params.name} not found or element(s) provided are identical`,
          });
      }
      res
        .status(200)
        .json({ msg: `file with name ${params.name} updated`, file });
    })
    .catch((err) => res.status(400).json({ error: true, msg: err }));
}
