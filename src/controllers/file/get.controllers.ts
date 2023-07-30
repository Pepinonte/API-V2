import { Request, Response } from "express";
import File from "../../models/file";

export async function getAll(req: Request, res: Response) {
  File.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((file) => {
      if (file.length === 0) {
        return res.status(400).json({ error: true, msg: "file not found" });
      }
      res.status(200).json({ msg: "all files", file });
    })
    .catch((err) => res.status(400).json({ error: true, msg: err }));
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  File.findOne({
    where: { file_id: id },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((file) => {
      if (!file) {
        return res.status(400).json({ error: true, msg: "file not found" });
      }
      res.status(200).json({ msg: `file with id <${id}>`, file });
    })
    .catch((err) => res.status(400).json({ error: true, msg: err }));
}

export async function getByName(req: Request, res: Response) {
  const { name } = req.params;
  File.findOne({
    where: { file_name: name },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((file) => {
      if (!file) {
        return res.status(400).json({ error: true, msg: "file not found" });
      }
      res.status(200).json({ msg: `file with name <${name}>`, file });
    })
    .catch((err) => res.status(400).json({ error: true, msg: err }));
}