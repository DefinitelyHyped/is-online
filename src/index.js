import isOnline from 'is-online'
import Future from 'fluture'

const willBeOnline = Future.encaseP(isOnline)

export default willBeOnline
