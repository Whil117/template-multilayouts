import { FC, Fragment } from 'react'

type Props = {}

const Public: FC<Props> = (props) => {
  return <Fragment>{props.children}</Fragment>
}

export default Public
