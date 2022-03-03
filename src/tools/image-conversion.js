import * as imageConversion from "image-conversion";

export async function view(event, size) {
  const file = event.target.input.files[0];
  const res = await imageConversion.compressAccurately(file, size);
  return res;
}
