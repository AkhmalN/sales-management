import bcrypt from "bcryptjs";

export function hashed(password: string): string {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

export function compare(
  prevPassword: string,
  currentPassword: string
): boolean {
  const comparePassword = bcrypt.compareSync(prevPassword, currentPassword);
  return comparePassword;
}
