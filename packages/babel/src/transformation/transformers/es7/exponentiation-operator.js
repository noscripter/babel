// https://github.com/rwaldron/exponentiation-operator

import build from "../../helpers/build-binary-assignment-operator-transformer";
import * as t from "../../../types";

export var metadata = {
  stage: 2
};

var MATH_POW = t.memberExpression(t.identifier("Math"), t.identifier("pow"));

/**
 * [Please add a description.]
 */

export var visitor = build({
  operator: "**",

  /**
   * [Please add a description.]
   */

  build(left, right) {
    return t.callExpression(MATH_POW, [left, right]);
  }
});
