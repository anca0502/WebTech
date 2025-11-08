export function pw(a, b) {
  let res = 1;
  for (let i = 0; i < b; i++) {
    res = res * a;
  }
  return res;
}
