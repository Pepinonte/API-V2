import { Request, Response } from "express";
import File from "../../models/file";

export async function deleteById(req: Request, res: Response) {
  const { id } = req.params;
  File.destroy({
    where: { file_id: id },
  })
    .then((file) => {
      if (file === 0) {
        return res.status(400).json({ error: true, msg: `file with id <${id}> not found` });
      }
      res.status(200).json({ msg: `file with id <${id}> deleted`, file });
    })
    .catch((err) => res.status(400).json({error: true, msg: err}));
}

export async function deleteByName(req: Request, res: Response) {
  const { name } = req.params;
  File.destroy({
    where: { file_name: name },
  })
    .then((file) => {
      if (file === 0) {
        return res.status(400).json({ error: true, msg: `file with name <${name}> not found` });
      }
      res.status(200).json({ msg: `file with name <${name}> deleted`, file });
    })
    .catch((err) => res.status(400).json({error: true, msg: err}));
}