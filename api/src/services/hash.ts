import bcrypt from "bcryptjs";

function hashed(password: string): string {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

export default hashed;
