import { Request, Response } from "express";
import File from "../../models/file";
import * as fileValidation from "../../validation/file/post.validation";

export async function createOne(req: Request, res: Response) {
  const { body } = req;
  const { error } = fileValidation.createOne(body);
  if (error) return res.status(401).json({ error: true, msg: error.details[0].message });
  // Check if file already exists
  File.findOne({ where: { file_name: body.file_name } })
    .then((file) => {
      if (file) {
        res
          .status(400)
          .json({
            error: true,
            msg: `file with name <${body.file_name}> already exists`,
          });
      } else {
        File.create({ ...body })
          .then((file) => {
            res.status(201).json({ msg: "file created", file });
          })
          .catch((err) => res.status(400).json({ error: true, msg: err }));
      }
    })
    .catch((err) => res.status(400).json({ error: true, msg: err }));
}
