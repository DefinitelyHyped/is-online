import test from 'ava'
// import {pipe} from 'f-utility'
import m from './is-online'
console.log(`m`, m)
const truthyEnder = (t) => (x) => {
  t.true(x)
  t.end()
}
const falsyEnder = (t) => (x) => {
  t.false(x)
  t.end()
}
test.cb(`v4`, (t) => {
  console.log(`t`, t, Object.keys(t))
  m().fork(t.fail, truthyEnder(t))
})

test.cb(`v4 with timeout`, (t) => {
  m({timeout: 500}).fork(t.fail, truthyEnder(t))
})

test.cb(`v4 with impossible timeout`, (t) => {
  m({timeout: 1}).fork(t.fail, falsyEnder(t))
})

if (!process.env.CI) {
  test.cb(`v6`, (t) => {
    m({version: `v6`}).fork(t.fail, truthyEnder(t))
  })

  test.cb(`v6 with timeout`, (t) => {
    m({version: `v6`, timeout: 500}).fork(t.fail, truthyEnder(t))
  })
}
