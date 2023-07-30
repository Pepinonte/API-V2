import { Request, Response } from "express";
import { FileType } from "../../models/file";

export async function getAll(req: Request, res: Response) {
  FileType.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((file_type) => {
      if (file_type.length === 0) {
        return res
          .status(400)
          .json({ error: true, msg: "file type not found" });
      }
      res.status(200).json({ msg: "all files type", file_type });
    })
    .catch((err) => res.status(400).json({ error: true, msg: err }));
}
