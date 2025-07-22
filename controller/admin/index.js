import dotenv from "dotenv";
import AdminSchema from "../../schema/admin/index.js";

const envFile = process.env.NODE_ENV === "local" ? ".env.local" : ".env";
dotenv.config({ path: envFile });

class AdminController {
  async Authorization(req, res) {
    try {
      const { name, password } = req.body;
      if (!name || !password) {
        return res
          .status(403)
          .json({ message: "Please provide name and password" });
      }

      const admin = await AdminSchema.findOne({});

      if (password === admin.password && login === admin.login) {
        const secretKey = process.env.JWT_SECRET;

        const token = Jwt.sign({ user: "Admin" }, secretKey, {
          algorithm: "HS256",
          expiresIn: "24h",
        });

        res.cookie("Authorization", token, {
          maxAge: 24 * 60 * 60 * 1000,
          httpOnly: true,
          secure: true,
          sameSite: "none",
        });
        return res.status(200).json({ message: "Logined" });
      } else {
        return res.status(400).json({ message: "Something Went Wrong" });
      }
    } catch (e) {
      console.error(e);
      return res.status(500).json(e);
    }
  }
}

export default new AdminController();
