interface Header {
  userType: string
  children?: JSX.Element[] | JSX.Element;
}
export const Header =({userType}:Header)=> {
  return(
    <header id="page-header">
      header
    </header>
  )
}