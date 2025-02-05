import test from "tape";
import stampit from "../stampit.js";

test("stamp.compose() deep merge bad deepProps", (t) => {
  const stamp = stampit({ props: { a: 1 } });
  stamp.compose = null;
  const o = stamp();

  t.equal(o.a, undefined);

  t.end();
});
