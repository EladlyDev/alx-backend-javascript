export default function createInt8TypedArray(l, p, v) {
  const buffer = new Int8Array(l);
  const dv = new DataView(buffer.buffer);

  if (p < 0 || p >= l) {
    throw new Error('Position outside range');
  }

  dv.setInt8(p, v);
  return dv;
}
