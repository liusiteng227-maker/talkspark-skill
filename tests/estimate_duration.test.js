const assert = require("node:assert/strict");
const test = require("node:test");

const { estimateDuration } = require("../talkspark/scripts/estimate_duration");

test("counts visible characters after whitespace removal", () => {
  const result = estimateDuration("我 最近\n想 用 AI", 120);

  assert.equal(result.characters, 7);
  assert.equal(result.chars_per_minute, 120);
  assert.equal(result.estimated_seconds, 4);
  assert.equal(result.estimated_time, "0分4秒");
});

test("rejects invalid speaking speed", () => {
  assert.throws(() => estimateDuration("测试", 0), /positive number/);
});
