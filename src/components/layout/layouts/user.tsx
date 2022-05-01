import { FC } from 'react'

type Props = {}

const User: FC<Props> = (props) => {
  return (
    <div>
      <h1>User</h1>
      {props.children}
    </div>
  )
}

export default User
